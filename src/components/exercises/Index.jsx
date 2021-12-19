import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Display } from './Display';
import { Exercise } from './topics/Exercise';

export const Exercises = () => {
    return (
        <div className="">
            <div className="">
                <Routes>
                    <Route path="display" element={<Display />} />
                    <Route path="exercise/:id" element={<Exercise />} />
                </Routes>
            </div>
        </div>
    );
}