import React from 'react';
import { Link } from 'react-router-dom';

function search() {
    return (
        <> 
            <div className="search_buttons">
                <h1>Buscar por ...</h1>
                <Link to="/buscar_abarrote">
                    <button className="search_button">Abarrote</button><br/>
                    </Link>
                <Link to="/buscar_domiciliario">
                    <button className="search_button">Domiciliario</button><br/>
                </Link>
                <Link to="/buscar_carrito">
                    <button className="search_button">Carrito</button>
                </Link>
            </div>
        </>
    )
}
export default search;