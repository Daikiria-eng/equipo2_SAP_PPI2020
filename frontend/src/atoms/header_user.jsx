import React, { Component } from 'react';
import Rank from '../assets/RenderLogoWhite.png';
import '../../src/style.css';
import { Link } from 'react-router-dom';

class navbar extends Component {
  render() {
    return (
      <>
        <header>
          <div className="headernav">
            <input type="checkbox" id="buttonnav" />
            <label for="buttonnav"><img src="" alt="Desplegar" id="buttonNav" /></label>
            <nav className="bar">
              <ul id="items">
                <Link className="li" to="/principal">
                  <li id="image_RANK"><img src={Rank} alt="RANK!RANK!" id="navLogo" /></li>
                </Link>
                <Link className="li" to="/principal">
                  <li>Home</li>
                </Link>
                <Link className="li" to="/quienes">
                  <li>Quienes somos</li>
                </Link>
                <Link className="li" to="/productos">
                  <li>Productos</li>
                </Link>
                <Link className="li" to="/contactanos">
                  <li>Contáctanos</li>
                </Link>
                <Link to="/Busqueda">
                  <li>Buscar</li>
                </Link>
                <Link to="/perfil">
                  <li id="enter">perfil</li>
                </Link>
                <Link to="/">
                  <li>Cerrar sesion</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="LogIn">
            <div className="infoLog">
              <label for="NameLog">Nombre de usuario</label>
              <input type="text" className="NameLog" />
              <label for="passLog">Contraseña</label>
              <input type="password" className="passLog" />
              <p>¿Has olvidado la contraseña?</p>
              <button id="enterLog">Iniciar</button>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default navbar;

/*let enterto= document.querySelector('#enter').addEventListener("click", function() {
  document.querySelector('#LogIn').style.display="block";
});
style={{marginRight: spacing + 'em'}}*/