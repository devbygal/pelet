import React from 'react';
import { Navigate, Outlet } from 'react-router';

import { accountService } from '../_services';

function PrivateRoute({ roles, ...props }) {
    const user = accountService.userValue;
    
    if (roles && roles.indexOf(user.roleUser) === -1) {
        // role not authorized so redirect to home page
        return <Navigate to={{ pathname: '/' }} />;
    }
    return user ? <Outlet {...props} /> : <Navigate to="account/login"/>;
}

export { PrivateRoute };