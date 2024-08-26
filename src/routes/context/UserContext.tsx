import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

interface Usuario {
  nombre: string;
  correo: string;
  password: string;
  autenticado: boolean;
}

interface UsuarioContextType {
  usuario: Usuario | null;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;
  logout: () => void;
}

export const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

interface UsuarioProviderProps {
  children: ReactNode;
}

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  useEffect(() => {
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
    }
  }, [usuario]);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (context === undefined) {
    throw new Error('useUsuario must be used within a UsuarioProvider');
  }
  return context;
};
