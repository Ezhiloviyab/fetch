// src/App.js
import React from 'react';
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import BootstrapCard from './components/BootstrapCard';
import Home from './components/home';

function App() {
  return (
   <>
      <NavigationMenu />
      <Home/>
          <BootstrapCard />
   </>
  );
}

export default App;
