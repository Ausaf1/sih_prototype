import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = localStorage.getItem('authToken');
    return auth ? <Outlet /> : <Navigate to="/officerLogin" />;
}

export default PrivateRoute;