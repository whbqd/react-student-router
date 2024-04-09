
import './App.css';
import { NavLink } from 'react-router-dom'
import RouterConfig from './router/routes'
import React from "react";

function App() {
  return (
      <div className="App">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">StudentOA</NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/todo">todo</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/home">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/about">About</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/add">Add</NavLink>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div className="content">
              <RouterConfig/>
          </div>
      </div>
  );
}

export default App;
