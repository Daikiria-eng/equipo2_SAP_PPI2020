import React from 'react';
import { Link } from 'react-router-dom';

function foot() {
    return (
        <div className="down">
            <h1 id="cers">Contáctanos en redes sociales</h1>
            <Link to="/Políticas"><h3>Políticas y condiciones</h3></Link>
            <div className="socialR">
                <p>Encuentranos también en:</p>
                <img src="" alt="Google"/>
                <img src="" alt="Facebook"/>
            </div>
        </div>
    )
}
export default foot;