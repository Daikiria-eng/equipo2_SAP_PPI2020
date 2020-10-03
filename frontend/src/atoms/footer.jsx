import React from 'react';
import Icons from '../icons';
import { Link } from 'react-router-dom';

function foot() {
    return (
        <div className="down">
            <h1 id="cers">Contáctanos en redes sociales</h1>
            <Link to="/Políticas"><h3>Políticas y condiciones</h3></Link>
            <div className="socialR">
                <p>Encuentranos también en:</p>
                <img src={Icons[0].img} alt="Google"/>
                <img src={Icons[1].img} alt="Facebook"/>
            </div>
        </div>
    )
}
export default foot;