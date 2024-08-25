import React from 'react';
import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { useUsuario } from '../context/UserContext';

export const NavBar = () => {
  const { usuario, logout } = useUsuario();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    logout();
    navigate('/LoginPage');
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Karma</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            {usuario ? (
              <div className="d-flex align-items-center">
                <span className="text-white mr-2">Hola, {usuario.nombre}</span>
                <NavLink to="/logout" className="nav-link"  onClick={handleAuthAction}>Logout</NavLink>
              </div>
            ) : (
              <NavLink to="/login" className="nav-link"  onClick={handleAuthAction}>Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
