
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Add from './components/Add';

function App() {
 
  return (
    <div className="App">
      <header className="header-box">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/add">Add</NavLink>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit/:id" element={<Add />}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
