import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Role } from '../_helpers';
import { accountService } from '../_services';

export const Nav = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return null;

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">ראשי</Link>
                    <Link to="profile/details" className="nav-item nav-link">פרופיל</Link>
                    <Link to="vocabulary" className="nav-item nav-link">אוצר מילים</Link>
                    <Link to="/calculator" className="nav-item nav-link"
                        onClick={() => { window.open('/calculator', 'mywin', 'width=288,height=600') }}>
                        מחשבון
                    </Link>
                    {user.roleUser === Role.Admin &&
                        <Link to="/admin" className="nav-item nav-link">מנהל</Link>
                    }
                    <Link to="#" onClick={accountService.logout} className="nav-item nav-link">התנתק</Link>
                </div>
            </nav>
            <Routes>
            <Route path="/admin" element={AdminNav} />
            </Routes>
        </div>
    );
}

function AdminNav({ match }) {
    const { path } = match;

    return (
        <nav className="admin-nav navbar navbar-expand navbar-light">
            <div className="navbar-nav">
                <Link to={`${path}/users`} className="nav-item nav-link">משתמשים</Link>
            </div>
        </nav>
    );
}