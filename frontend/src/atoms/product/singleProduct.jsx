import React from 'react';
import {Link} from 'react-router-dom';

function buying(props) {
    return (
        <>
            <div className="product_to">
                <div className="visualP">
                    <img src="" alt="Producto" />
                    <h2>Nombre del Carrito</h2>
                </div>
                <div className="buy_report">
                    <button>Comprar</button>
                    <Link to="/Contactanos"><button>Reportar</button></Link>
                </div>
                {props.comments.map((item, comms) => {
                    return (
                        <>
                            <div key={comms} className="comments">
                                <h3>{item.name}</h3>
                                <h4>{item.quality}</h4>
                                <p>{item.comment}</p>
                            </div>
                        </>
                    )
                })}
                {props.relations.map((item, relt) => {
                    return (
                        <>
                            <div key={relt} className="Relations_carts">
                                <h3>{item.cart}</h3>
                                <h4>{item.price}</h4>
                                <button>{item.button}</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default buying;