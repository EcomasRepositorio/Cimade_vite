// authContext.tsx

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AuthContextProps {
  decodedToken: DecodedToken | null;
  setDecodedToken: React.Dispatch<React.SetStateAction<DecodedToken | null>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface DecodedToken {
  role: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const decodedToken = decodeToken(storedToken);
      setDecodedToken(decodedToken);
    }
  }, []);

  const decodeToken = (token: string): DecodedToken | null => {
    try {
      const decoded: DecodedToken = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ decodedToken, setDecodedToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
