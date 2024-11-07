import React from 'react';
import './NavBar.css'; 
function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Mi Aplicación</h1>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
