import React, { useState } from 'react';
import { useUsuario } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { usuario, setUsuario } = useUsuario(); // Obtener el usuario actual del contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Credenciales en duro
  const hardcodedCredentials = {
    email: 'usuario@example.com',
    password: '123456'
  };

  const validateEmail = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      setErrors(prev => ({ ...prev, email: 'Ingresa un correo electrónico válido' }));
      return false;
    }
    setErrors(prev => ({ ...prev, email: '' }));
    return true;
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setErrors(prev => ({ ...prev, password: 'La contraseña debe tener al menos 6 caracteres' }));
      return false;
    }
    setErrors(prev => ({ ...prev, password: '' }));
    return true;
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('email', email);
    const body = bodyBuilderJSON();
    console.log('JSON listo para enviar', body);
  };

  const bodyBuilderJSON = () => {
    return {
      "email": email,
      "password": password
    };
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      // Compara las credenciales ingresadas con las credenciales en duro
      if (email === hardcodedCredentials.email && password === hardcodedCredentials.password) {
        saveToLocalStorage();
        //setUsuario({ ...usuario, autenticado: true });
        setUsuario({ nombre: 'Muuu', correo: email, password: password, autenticado: true });
 
        alert('Inicio de sesión exitoso');
        navigate('/'); // Redirige a la página principal
      } else {
        alert('Credenciales incorrectas');
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
