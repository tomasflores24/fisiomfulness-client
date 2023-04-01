import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <nav>
        <Link to="/">
          <img className='logo' src="/icon-logo.png" alt="LOGO DE FISIONFULNESS" />
        </Link>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/trabaja-con-nosotros">Trabaja con Nosotros</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;




