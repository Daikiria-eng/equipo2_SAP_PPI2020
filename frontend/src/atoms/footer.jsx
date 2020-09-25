import React from 'react';
import { Link } from 'react-router-dom';
//space
function foot() {
    return (
        <div className="down">
            <h1 id="cers">Contáctanos en redes sociales</h1>
            <Link to="/Políticas"><h3>Políticas y condiciones</h3></Link>
        </div>
    )
}
export default foot;