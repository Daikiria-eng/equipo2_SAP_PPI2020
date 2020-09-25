import React from 'react';
import { Link } from 'react-router-dom';
function some_products(props) {
    return (
        <div className="prods">
            <h1>Algunos Carritos</h1>
            {props.cs.map((item, prp) => {
                return (
                    <div key={prp} className="card">
                        <h2>{item.names}</h2>
                        <p>{item.description}</p>
                        <Link to="/comprar">
                            <button>{item.button}</button>
                        /</Link>
                    </div>
                )
            })}
                    </div>
                )
            }
export default some_products;