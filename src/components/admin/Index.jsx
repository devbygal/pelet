import './styles/General.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Overview } from './Overview';
import { Users } from './users/Index';
import { Courses } from './courses/Index';
import { Exercises } from './exercises/Index';
import { Words } from './words/Index';
import { CreateInserts } from './sqlInserts/CreateInserts';

export const Admin = () => {
    return (
        <>
            <nav className="admin-nav navbar navbar-expand navbar-dark bg-primary">
                <div className="navbar-nav">
                    <Link to="/admin/users" className="nav-item nav-link">משתמשים</Link>
                    <Link to="/admin/courses" className="nav-item nav-link">קורסים</Link>
                    <Link to="/admin/exercises" className="nav-item nav-link">תרגולים</Link>
                    <Link to="/admin/words" className="nav-item nav-link"> מילים</Link>
                    <Link to="/admin/convertToInserts" className="nav-item nav-link">המרה לאינסרטים</Link>
                </div>
            </nav>
            <div className="p-4">
                <div className="container">
                    <Routes>
                        <Route path="overview" element={<Overview />} />
                        <Route path="users/*" element={<Users />} />
                        <Route path="courses/*" element={<Courses />} />
                        <Route path="exercises/*" element={<Exercises />} />
                        <Route path="words/*" element={<Words />} />
                        <Route path="convertToInserts/*" element={<CreateInserts />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}