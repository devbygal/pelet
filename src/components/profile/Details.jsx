import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '../_services';

export const Details = () => {
    const user = accountService.userValue;
    return (
        <div>
            <h1>My Profile</h1>
            <p>
                <strong>שם: </strong> {user.firstName} {user.lastName}<br />
                <strong>דואר אלקטרוני: </strong> {user.email}
            </p>
            <p><Link to="/profile/update">עדכון פרופיל</Link></p>
            <p><Link to="#" onClick={accountService.logout} className="nav-item nav-link">התנתק</Link></p>
        </div>
    );
}