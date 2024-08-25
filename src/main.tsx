import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { KarmaApp } from './routes/components/KarmaApp';
import { UsuarioProvider } from  './routes/context/UserContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <UsuarioProvider>
        <KarmaApp />
      </UsuarioProvider>
    </React.StrictMode>
  </BrowserRouter>
);
