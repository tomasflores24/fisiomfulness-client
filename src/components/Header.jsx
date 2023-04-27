import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { links } from "../data/dummy"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
    document.body.classList.remove("header-navbar");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("header-navbar", !isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
        setSticky(window.scrollY > 0);
    }

    if (window.scrollY > 0) {
        setSticky(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className={`${sticky ? "header scroll-header" : "header"}`}>
      <div className="container">
        <nav>
          <Link 
            to="/" 
            className='logo' 
            onClick={handleClick}
          >
            <img src="/icon-logo.png" alt="LOGO DE FISIONFULNESS" />
          </Link>
          
          <div className='navbar'>
            <ul>
              <div className="text-zinc-500 font-bold text-xs uppercase mt-[16px] mb-[12px] hide-for-desktop">Menú</div>

              {links.map((link) => (
                <NavLink 
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleClick}
                >
                  <div className="icon hide-for-desktop">
                    {link.icon}
                  </div>
                  {link.text}
                </NavLink>
              ))}
            </ul>
          </div>

          <button className={`ham-burger hide-for-desktop ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header;
