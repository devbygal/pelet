import React from 'react';
import { Link } from 'react-router-dom';

export const Overview = () => {
    return (
        <div>
            <h1>מנהל</h1>
            <p>רק מנהלי מערכת יכולים לגשת לקטע הזה.</p>
            <p><Link to="/admin/users">נהל משתמשים</Link></p>
        </div>
    );
}