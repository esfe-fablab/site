import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './_navbar.css'; // Asegúrate de ajustar el nombre del archivo CSS según tu configuración

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`bg-modal ${isOpen ? 'bg-modal-active' : ''}`}></div>
      <header id="header-1">
        {/* Aquí puedes agregar contenido adicional para el encabezado si es necesario */}
      </header>
      <nav className={`navbar z-10 ${isOpen ? 'navbar-active' : ''}`}>
        <img src="/img/logo/esfe-logo.png" alt="logo-esfe" />
        <ul>
          <NavLink exact to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/aprende">Aprende</NavLink>
          {/* <a className="butn" href="#">Login</a>
          <a className="butn butn-i" href="#">Register</a> */}
        </ul>

        <label className={`hamburger ${isOpen ? 'hamburger-active' : ''}`} onClick={toggleMenu}>
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
