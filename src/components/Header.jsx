import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { BiHomeAlt2, BiUser, BiBriefcaseAlt, BiCog, BiGridAlt } from 'react-icons/bi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add("header-navbar");
    } else {
      document.body.classList.remove("header-navbar");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <Link to="/" className='logo'>
            <img src="/icon-logo.png" alt="LOGO DE FISIONFULNESS" />
          </Link>
          
          <div className='navbar'>
            <ul>
              <div className="text-zinc-500 font-bold text-xs uppercase mt-[16px] mb-[12px] hide-for-desktop">Menú</div>

              <NavLink 
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <div className="icon hide-for-desktop">
                  <BiHomeAlt2 />
                </div>
                Inicio
              </NavLink>

              <NavLink 
                to="/quienes-somos"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <div className="icon hide-for-desktop">
                  <BiUser />
                </div>
                Quiénes Somos
              </NavLink>
            
              <NavLink 
                to="/servicios"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <div className="icon hide-for-desktop">
                  <BiCog />
                </div>
                Servicios
              </NavLink>
            
              <NavLink 
                to="/trabaja-con-nosotros"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <div className="icon hide-for-desktop">
                  <BiBriefcaseAlt />
                </div>
                Trabaja con Nosotros
              </NavLink>
            
              <NavLink 
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <div className="icon hide-for-desktop">
                  <BiGridAlt />
                </div>
                Blog
              </NavLink>
            </ul>
          </div>

          {/* ham-burger */}

          <button className={`ham-burger hide-for-desktop ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header;
