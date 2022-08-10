import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const InstituteRoute = () => {
    const auth = localStorage.getItem('authToken');
    return auth ? <Outlet /> : <Navigate to="/instituteLogin" />;
}

export default InstituteRoute;