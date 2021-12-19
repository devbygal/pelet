import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Course } from './Course';

export const Courses = () => {
    return (
        <div className="p-4">
            <div className="">
                <Routes>
                    <Route path="course/:id" element={<Course />} />
                </Routes>
            </div>
        </div>
    );
}