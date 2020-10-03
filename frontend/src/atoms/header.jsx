import React, { Component } from 'react';
import Imgs from '../imgs';
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
                <Link to="/">
                  <li id="image_RANK"><img src={Imgs[0].img} alt="RANK!RANK!" id="navLogo" /></li>
                </Link>
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
                <li id="enter">Iniciar sesión</li>
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