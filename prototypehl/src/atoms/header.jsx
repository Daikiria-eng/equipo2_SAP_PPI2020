import React from 'react';
import '../../src/style.css';
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <>
      <header>
        <div className="headernav">
          <input type="checkbox" id="buttonnav" />
          <label for="buttonnav"><img src="" alt="Desplegar" /></label>
          <nav className="bar">
            <ul id="items">
              <li id="image_RANK"><img src="" alt="RANK!RANK!RANK!" /></li>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/quienes">
                <li>Quienes somos</li>
              </Link>
              <Link to="/productos">
                <li>Productos</li>
              </Link>
              <Link to="/contactanos">
                <li>Contáctanos</li>
              </Link>
              <Link to="/Registrate">
                <li>Registrarse</li>
              </Link>
              <li>Iniciar sesión</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default navbar;