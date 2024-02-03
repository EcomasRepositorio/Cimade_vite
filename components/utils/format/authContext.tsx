// authContext.tsx

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AuthContextProps {
  decodedToken: DecodedToken | null;
  setDecodedToken: React.Dispatch<React.SetStateAction<DecodedToken | null>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface DecodedToken {
  role: string;
  // Agrega otras propiedades según tus necesidades
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  // Aquí puedes agregar lógica para verificar y decodificar el token almacenado en localStorage

  useEffect(() => {
    // Ejemplo de cómo podrías decodificar el token (asegúrate de agregar tu propia lógica aquí)
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Decodificar y establecer el token
      const decodedToken = decodeToken(storedToken);
      setDecodedToken(decodedToken);
    }
  }, []);

  // Función para decodificar el token (puedes usar tu propia lógica aquí)
  const decodeToken = (token: string): DecodedToken | null => {
    try {
      // Ejemplo simple de decodificación (puedes usar bibliotecas como jwt-decode)
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
