import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { token } = JSON.parse(sessionStorage.getItem(`adminData`))?JSON.parse(sessionStorage.getItem(`adminData`)):``;
  return token ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
