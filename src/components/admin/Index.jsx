import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Overview } from './Overview';
import { Users } from './users/Index';

export const Admin2 = () => {
    return (
        <>
            <nav className="admin-nav navbar navbar-expand navbar-dark bg-primary">
                <div className="navbar-nav">
                    <Link to="/admin/users" className="nav-item nav-link">משתמשים</Link>
                </div>
            </nav>
            <div className="p-4">
                <div className="container">
                    <Routes>
                        <Route path="overview" element={<Overview />} />
                        <Route path="users/*" element={<Users />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}