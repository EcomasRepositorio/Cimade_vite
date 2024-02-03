import React from 'react';
import { Route, Navigate, PathRouteProps, useNavigate } from 'react-router-dom';
import { useAuth } from './authContext';

interface ProtectedRouteProps extends PathRouteProps {
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, ...rest }) => {
  const navigate = useNavigate();
  const authContext = useAuth();

  if (!authContext) {
    return <Navigate to="/login" />;
  }

  const { decodedToken } = useAuth();
  const isAuthenticated = decodedToken !== null;

  if (isAuthenticated) {
    if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(decodedToken?.role || '')) {
      return <Navigate to="/denied" />;
    }

    return <Route {...rest} />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
