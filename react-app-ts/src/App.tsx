
import './App.css';
import { NavLink } from 'react-router-dom'
import RouterConfig from './router/routes'
import React from "react";
import Input from "./components/Todo/Input";
import List from "./components/Todo/List";


function App() {

  return (
      <div className="App">
          {/*<header className="header-box">*/}
          {/*    <NavLink to="/todo">todo</NavLink>*/}
          {/*    <NavLink to="/home">Home</NavLink>*/}
          {/*    <NavLink to="/about">About</NavLink>*/}
          {/*    <NavLink to="/add">Add</NavLink>*/}

          {/*</header>*/}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">StudentOA</a>
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
