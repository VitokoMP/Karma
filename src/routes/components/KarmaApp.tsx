import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './HomeScreen'; 
import NavBar from './NavBar';

export const KarmaApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* Define otras rutas aquí */}
      </Routes>
    </>
  );
};