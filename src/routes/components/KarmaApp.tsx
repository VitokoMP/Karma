import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './HomeScreen'; 
import NavBar from './NavBar';
import LoginPage from './LoginPage'; 

export const KarmaApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Login" element={<LoginPage />} />
        
        {/* Define otras rutas aquí */}
        
      </Routes>
    </>
  );
};