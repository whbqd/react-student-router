
import './App.css';
import { NavLink } from 'react-router-dom'
import RouterConfig from './router/routes'
import React from "react";


function App() {
 
  return (
    <div className="App">
      <header className="header-box">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/add">Add</NavLink>
      </header>
      <div className="content">
        <RouterConfig />
      </div>
    </div>
  );
}

export default App;
