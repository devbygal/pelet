import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AddEdit } from './AddEdit';
import { List } from './List';

export const Words = () => {
    return (
        <div>
            <Routes>
                <Route path="" element={<List />} />
                <Route path="add" element={<AddEdit />} />
                <Route path="edit/:id" element={<AddEdit />} />
            </Routes>
        </div>
    );
}