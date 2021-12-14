import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Details } from './Details';
import { Update } from './Update';

export const Profile = () => {
    return (
        <div className="p-4">
            <div className="container">
                <Routes>
                    <Route path="details" element={<Details />} />
                    <Route path="update" element={<Update />} />
                </Routes>
            </div>
        </div>
    );
}