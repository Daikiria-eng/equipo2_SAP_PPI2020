import React from 'react';
import Facebook from '../assets/icons/facebook_s.png';
import Google from '../assets/icons/google_s.png';
import { Link } from 'react-router-dom';

function foot() {
    return (
        <div className="down">
            <h1 id="cers">Contáctanos en redes sociales</h1>
            <Link to="/Políticas"><h3>Políticas y condiciones</h3></Link>
            <div className="socialR">
                <p>Encuentranos también en:</p>
                <img src={Google} alt="Google" id="Google_image"/>
                <img src={Facebook} alt="Facebook" id="Facebook-image"/>
            </div>
        </div>
    )
}
export default foot;