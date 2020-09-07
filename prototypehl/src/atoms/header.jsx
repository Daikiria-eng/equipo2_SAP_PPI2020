import React from 'react';
import '../../src/style.css';
import {Link } from 'react-router-dom';
function navbar() {
  return (
    <>
    <header>
      <div className="headernav">
        <input type="checkbox" id="buttonnav"/>
        <label for="buttonnav"><img src="" alt="Desplegar"/></label>
        <nav className="bar">
          <ul id="items">
            <li id="image_RANK">RANK!</li>
            <Link to = "/pagina1">
            <li>Home</li>
            </Link>
            <li>Quienes somos</li>
            <li>Productos</li>
            <li>Contáctanos</li>
            <li>Registrarse</li>
            <li>Iniciar sesión</li>  
          </ul>
        </nav>
      </div>
      </header>
    </>
  );
}
export default navbar;