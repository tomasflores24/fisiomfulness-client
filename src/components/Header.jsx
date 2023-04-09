import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  return (
    <header className={`header ${isOpen ? 'active' : ''}`}>
      <div className="container">
        <nav>
          <Link to="/" className='logo'>
            <img src="/icon-logo.png" alt="LOGO DE FISIONFULNESS" />
          </Link>
          
          <div className='navbar'>
            <ul>
              <li>
                <NavLink 
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Inicio
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/quienes-somos"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Quiénes Somos
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to="/servicios"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Servicios
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to="/trabaja-con-nosotros"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Trabaja con Nosotros
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to="/blog"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <button type='button' className={`ham-burger hide-for-desktop ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header;
