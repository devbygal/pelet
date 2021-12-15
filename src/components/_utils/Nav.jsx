import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Role } from '../_helpers';
import { accountService } from '../_services';

const { ipcRenderer } = window.require('electron');

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
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                        <Link to="/" className="nav-item nav-link">ראשי</Link>
                        </li>
                        <li>
                            <Link to="simulation" className="nav-item nav-link">סימולציה</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/exercise" className="nav-item nav-link">תרגולים </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="vocabulary" className="nav-item nav-link">אוצר מילים</Link>
                        </li>
                        <li className="nav-item">
                        <   Link to="#" id="toggle-calc-window" className="nav-item nav-link" onClick={() => ipcRenderer.send('calc-window:toggle')}>מחשבון</Link>
                        </li>
                        {user.roleUser === Role.Admin &&
                            <>
                                <li><Link to="/admin" className="nav-item nav-link">מנהל</Link></li>
                                <li><Link to="/admin/overview" className="nav-item nav-link">מנהל שני</Link></li>
                            </>
                        }
                        <Link to="profile/details" className="nav-item nav-link">פרופיל</Link>
                        <Link to="#" onClick={accountService.logout} className="nav-item nav-link">התנתק</Link>
                    </ul>
                </div>
            </nav> 
        </div>
    );
}