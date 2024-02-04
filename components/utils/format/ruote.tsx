// components/utils/format/route.tsx

import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from './authContext';
import { useRouter } from 'next/router';
// Asegúrate de importar desde 'react-router-dom'

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

const ProtectedRouteContent: React.FC<ProtectedRouteProps> = ({ allowedRoles, ...rest }) => {
  const { decodedToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleRouteRedirect = () => {
      if (!decodedToken) {
        router.push('/login');
      } else if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(decodedToken?.role || '')) {
        router.push('/denied');
      }
    };

    handleRouteRedirect();
  }, [decodedToken, allowedRoles, router]);

  return <Route {...rest} />;
};

export default ProtectedRouteContent;
