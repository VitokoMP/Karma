import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Usuario {
  nombre: string;
  correo: string;
  autenticado: boolean;
}

interface UsuarioContextType {
  usuario: Usuario | null;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;
}

export const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

interface UsuarioProviderProps {
  children: ReactNode;
}

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
  const [usuario, setUsuario] = useState<Usuario | null>({
    nombre: 'Juan',
    correo: 'juan@example.com',
    autenticado: true
  });

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
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
