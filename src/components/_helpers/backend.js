import { Role } from './'
import { accountService, alertService } from '../_services';

// array in local storage for registered users
const usersKey = 'users';
let users = JSON.parse(localStorage.getItem(usersKey)) || [];

export async function configureBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        if (opts === undefined) { return; }
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);
            function handleRoute() {
                const { method } = opts;
                switch (true) {
                    case url.endsWith('/accounts/authenticate') && method === 'POST':
                        return authenticate();
                    case url.endsWith('/accounts/refresh-token') && method === 'POST':
                        return refreshToken();
                    case url.endsWith('/accounts/revoke-token') && method === 'POST':
                        return revokeToken();
                    case url.endsWith('/accounts/register') && method === 'POST':
                        return register();
                    case url.endsWith('/accounts/verify-email') && method === 'POST':
                        return verifyEmail();
                    case url.endsWith('/accounts/forgot-password') && method === 'POST':
                        return forgotPassword();
                    case url.endsWith('/accounts/validate-reset-token') && method === 'POST':
                        return validateResetToken();
                    case url.endsWith('/accounts/reset-password') && method === 'POST':
                        return resetPassword();
                    // case url.endsWith('/accounts') && method === 'GET':
                    //     return getUsers();
                    // case url.match(/\/accounts\/\d+$/) && method === 'GET':
                    //     return getUserById();
                    case url.endsWith('/accounts') && method === 'POST':
                        return createUser();
                    case url.match(/\/accounts\/\d+$/) && method === 'PUT':
                        return updateUser();
                    case url.match(/\/accounts\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            async function authenticate() {
                const { email, password } = body();
                
                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })
                const check = allUsers.find(x => x.email === email && x.password === password && x.isVerified);

                if (!check) return error('הדוא"ל או הסיסמה שגויים.');

                // if (allUsers.find(x => x.isVerified && x.roleUser === 'מנהל'))
                // {
                //     user.roleUser = Role.Admin;
                // }
                // add refresh token to user
                const user  = users.find(x => x.email === email && x.password === password && x.isVerified);
                user.refreshTokens.push(generateRefreshToken());
                localStorage.setItem(usersKey, JSON.stringify(users));

                return ok({
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    roleUser: user.roleUser,
                    jwtToken: generateJwtToken(user)
                });
            }

            async function refreshToken() {
                const refreshToken = getRefreshToken();
                
                if (!refreshToken) return unauthorized();

                const user = users.find(x => x.refreshTokens.includes(refreshToken));
                
                if (!user) return unauthorized();

                // replace old refresh token with a new one and save
                user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
                user.refreshTokens.push(generateRefreshToken());
                localStorage.setItem(usersKey, JSON.stringify(users));

                return ok({
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    roleUser: user.roleUser,
                    jwtToken: generateJwtToken(user)
                })
            }

            async function revokeToken() {
                if (isAuthenticated()) return unauthorized();
                
                const refreshToken = getRefreshToken();
                const user = users.find(x => x.refreshTokens.includes(refreshToken));

                // revoke token and save
                user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
                localStorage.setItem(usersKey, JSON.stringify(users));

                return ok();
            }

            async function register() {
                const user = body();

                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })

                if (allUsers.find(x => x.email === user.email)) {
                    return error(`הדוא"ל הזה ${user.email} כבר קיים.`);
                }
    
                // assign user id and a few other properties then save
                user.id = await newUserId();
                // if (user.id === 1) {
                //     // first registered user is an admin
                //     user.roleUser = Role.Admin;
                // } else {
                //     user.roleUser = Role.User;
                // }
                user.roleUser = Role.User;
                user.dateCreated = new Date().toISOString();
                user.verificationToken = new Date().getTime().toString();
                user.isVerified = true;
                user.refreshTokens = [];
                users.push(user);
                localStorage.setItem(usersKey, JSON.stringify(users));

                // display verification email in alert
                setTimeout(() => {
                    const verifyUrl = `http://localhost:3000/account/verify-email?token=${user.verificationToken}`;
                    alertService.info(`
                    <h4>אימייל אימות</h4>
                    <p>תודה על ההרשמה!</p>
                    <p>אנא לחץ על הקישור שלהלן כדי לאמת את כתובת הדוא"ל שלך:</p>
                    <p><a href="${verifyUrl}">${verifyUrl}</a></p>
                    `, { autoClose: false });
                }, 1000);

                accountService.postUser(user);
                return ok();
            }
    
            async function verifyEmail() {
                const { token } = body();

                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })
                
                const user = allUsers.find(x => !!x.verificationToken && x.verificationToken === token);

                if (!user) return error('האימות נכשל.');
                
                // set is verified flag to true if token is valid
                user.isVerified = true;
                localStorage.setItem(usersKey, JSON.stringify(users));

                return ok();
            }

            async function forgotPassword() {
                const { email } = body();

                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })

                const user = allUsers.find(x => x.email === email);
                
                // always return ok() response to prevent email enumeration
                if (!user) return ok();
                
                // create reset token that expires after 24 hours
                user.resetToken = new Date().getTime().toString();
                user.resetTokenExpires = new Date(Date.now() + 24*60*60*1000).toISOString();
                localStorage.setItem(usersKey, JSON.stringify(users));

                // display password reset email in alert
                setTimeout(() => {
                    const resetUrl = `http://localhost:3000/account/reset-password?token=${user.verificationToken}`;
                    alertService.info(`
                    <h4>איפוס סיסמה</h4>
                    <p>אנא לחץ על הקישור למטה כדי לאפס את הסיסמה שלך, הקישור יהיה תקף ליום אחד:</p>
                    <p><a href="${resetUrl}">${resetUrl}</a></p>
                    `, { autoClose: false });
                }, 1000);

                return ok();
            }

            async function validateResetToken() {
                const { token } = body();

                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })

                const user = allUsers.find(x =>
                    !!x.resetToken && x.resetToken === token
                );
                
                if (!user) return error('אסימון לא חוקי.');

                return ok();
            }

            async function resetPassword() {
                const { token, password } = body();

                let allUsers = await accountService.getAll.then((data) => {
                    return data;
                })

                const user = allUsers.find(x =>
                    !!x.resetToken && x.resetToken === token
                );
                
                if (!user) return error('אסימון לא חוקי.');
                
                // update password and remove reset token
                user.password = password;
                user.isVerified = true;
                delete user.resetToken;
                delete user.resetTokenExpires;
                localStorage.setItem(usersKey, JSON.stringify(users));

                accountService.updateUser(user.id, user);
                return ok();
            }

            function getUsers() {
                if (isAuthorized(Role.Admin)) return unauthorized();

                return ok(users);
            }

            function getUserById() {
                if (!isAuthenticated()) return unauthorized();
    
                let user = users.find(x => x.id === idFromUrl());

                // users can get own profile and admins can get all profiles
                if (user.id !== currentUser().id && !isAuthorized(Role.Admin)) {
                    return unauthorized();
                }

                return ok(user);
            }
    
            async function createUser() {
                if (isAuthorized(Role.Admin)) return unauthorized();

                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })

                const user = body();
                if (allUsers.find(x => x.email === user.email)) {
                    return error(`הדוא"ל ${user.email} כבר רשום`);
                }

                // assign user id and a few other properties then save
                user.id = await newUserId();
                user.dateCreated = new Date().toISOString();
                user.verificationToken = new Date().getTime().toString();
                user.isVerified = true;
                user.refreshTokens = [];
                users.push(user);
                localStorage.setItem(usersKey, JSON.stringify(users));

                accountService.postUser(user);
                return ok();
            }
    
            async function updateUser() {
                if (isAuthenticated()) return unauthorized();
    
                let params = body();

                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })

                let user = allUsers.find(x => x.id === idFromUrl());

                // users can update own profile and admins can update all profiles
                // if (user.id !== currentUser().id && !isAuthorized(Role.Admin)) {
                //     return unauthorized();
                // }

                // only update password if included
                if (!params.password) {
                    delete params.password;
                }

                // update and save user
                Object.assign(user, params);
                localStorage.setItem(usersKey, JSON.stringify(users));

                accountService.updateUser(user.id, user);
                return ok({
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    roleUser: user.roleUser
                });
            }
    
            async function deleteUser() {
                if (!isAuthenticated()) return unauthorized();

                let allUsers = await accountService.getAll().then((data) => {
                    return data;
                })
    
                let user = allUsers.find(x => x.id === idFromUrl());

                // users can delete own account and admins can delete any account
                if (user.id !== currentUser().id && !isAuthorized(Role.Admin)) {
                    return unauthorized();
                }

                // delete user then save
                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem(usersKey, JSON.stringify(users));

                accountService.deleteUser(user.id);
                return ok();
            }
    
            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'לא מורשה.' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isAuthenticated() {
                return !!currentUser();
            }
    
            function isAuthorized(role) {
                const user = currentUser();
                if (!user) return false;
                return user.roleUser === role;
            }
    
            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }

            function body() {
                return opts.body && JSON.parse(opts.body);    
            }

            async function newUserId() {
                let id = await accountService.getAll()
                    .then(data => {
                        return data.length ? Math.max(...data.map(x => x.id)) + 1 : 1;
                    });
                return id;
                // return users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            }

            function generateJwtToken(user) {
                // create token that expires in 15 minutes
                const tokenPayload = { 
                    exp: Math.round(new Date(Date.now() + 15*60*1000).getTime() / 1000),
                    id: user.id
                }
                return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
            }

            function currentUser() {
                // check if jwt token is in auth header
                const authHeader = opts.headers['Authorization'] || '';
                if (!authHeader.startsWith('Bearer fake-jwt-token')) return;

                // check if token is expired
                const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
                const tokenExpired = Date.now() > (jwtToken.exp * 1000);
                if (tokenExpired) return;

                const user = users.find(x => x.id === jwtToken.id);
                return user;
            }

            function generateRefreshToken() {
                const token = new Date().getTime().toString();

                // add token cookie that expires in 7 days
                const expires = new Date(Date.now() + 7*24*60*60*1000).toUTCString();
                document.cookie = `fakeRefreshToken=${token}; expires=${expires}; path=/`;

                return token;
            }

            function getRefreshToken() {
                // get refresh token from cookie
                return (document.cookie.split(';').find(x => x.includes('fakeRefreshToken')) || '=').split('=')[1];
            }
        });
    }
}