import React from 'react';
import { Link } from 'react-router-dom';
function some_products(props) {
    return (
        <>
            <h1>Algunos Carritos</h1><br />
            <div className="prods">
                {props.cs.map((item, prp) => {
                    return (
                        <div key={prp} className="card_S">
                            <h2>{item.names}</h2>
                            <p>{item.description}</p>
                            <Link to="/comprar">
                                <button>{item.button}</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default some_products;