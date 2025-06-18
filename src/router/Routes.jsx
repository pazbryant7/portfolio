import React from 'react';
import Home from '../views/home';
import NotFound from '../views/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MainRoutes;
