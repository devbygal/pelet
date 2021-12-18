import { BehaviorSubject } from 'rxjs';

import { fetchWrapper } from '../_helpers';

const userSubject = new BehaviorSubject(null);
const baseUrl = `http://proj7.ruppin-tech.co.il/api/accounts`;

export const accountService = {
    login,
    logout,
    refreshToken,
    register,
    verifyEmail,
    forgotPassword,
    validateResetToken,
    resetPassword,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    postUser,
    updateUser,
    deleteUser,
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value }
};

async function login(email, password) {
    return await fetchWrapper.post(`${baseUrl}/authenticate`, { email, password })
        .then(user => {
            // publish user to subscribers and start timer to refresh token
            userSubject.next(user);
            startRefreshTokenTimer();
            return user;
        });
}

async function logout() {
    // revoke token, stop refresh timer, publish null to user subscribers and redirect to login page
    await fetchWrapper.post(`${baseUrl}/revoke-token`, {});
    stopRefreshTokenTimer();
    userSubject.next(0);
}

async function refreshToken() {
    return await fetchWrapper.post(`${baseUrl}/refresh-token`, {})
        .then(user => {
            // publish user to subscribers and start timer to refresh token
            userSubject.next(user);
            startRefreshTokenTimer();
            return user;
        });
}

async function register(params) {
    return await fetchWrapper.post(`${baseUrl}/register`, params);
}

async function verifyEmail(token) {
    return await fetchWrapper.post(`${baseUrl}/verify-email`, { token });
}

async function forgotPassword(email) {
    return await fetchWrapper.post(`${baseUrl}/forgot-password`, { email });
}

async function validateResetToken(token) {
    return await fetchWrapper.post(`${baseUrl}/validate-reset-token`, { token });
}

async function resetPassword({ token, password }) {
    return await fetchWrapper.post(`${baseUrl}/reset-password`, { token, password });
}

async function getAll() {
    return await fetchWrapper.get(`${baseUrl}`);
}

async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function create(params) {
    return await fetchWrapper.post(baseUrl, params);
}

async function update(id, params) {
    return await fetchWrapper.put(`${baseUrl}/${id}`, params)
        .then(user => {
            // update stored user if the logged in user updated their own record
            if (user.id === userSubject.value.id) {
                // publish updated user to subscribers
                user = { ...userSubject.value, ...user };
                userSubject.next(user);
            }
            return user;
        });
}

// prefixed with underscore because 'delete' is a reserved word in javascript
async function _delete(id) {
    return await fetchWrapper.delete(`http://localhost:3000/api/accounts/${id}`)
        .then(x => {
            // auto logout if the logged in user deleted their own record
            if (id === userSubject.value.id) {
                logout();
            }
            return x;
        });
}

async function postUser(params) {
    return await fetchWrapper.post(`${baseUrl}/users`, params );
}

async function updateUser(id, params) {
    return await fetchWrapper.put(`${baseUrl}/users/${id}`, params);
}

async function deleteUser(id) {
    return await fetchWrapper.delete(`${baseUrl}/users/${id}`);
}

// helper functions

let refreshTokenTimeout;

function startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(userSubject.value.jwtToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    refreshTokenTimeout = setTimeout(refreshToken, timeout);
}

function stopRefreshTokenTimer() {
    clearTimeout(refreshTokenTimeout);
}