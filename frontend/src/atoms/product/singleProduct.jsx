import React from 'react';
import { Link } from 'react-router-dom';

function buying(props) {
    return (
        <>
            <div className="product_to">
                <div className="visualP">
                    <div className="visual">
                        <h2>Nombre del Carrito</h2>
                    </div>
                    <hr id="hr" />
                </div>
                <div className="buy_report">
                    <div className="buttons_s">
                        <button>Comprar</button><br />
                        <Link className="Link" to="/Contactanos"><button>Reportar</button></Link>
                    </div>
                    <hr />
                </div>
                <div>
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
                </div>
                <div className="relation_carts">
                    {props.relations.map((item, relt) => {
                        return (
                            <>
                                <div key={relt} className="Relations_carts">
                                    <h3>{item.cart}</h3>
                                    <h4>{item.price}</h4>
                                    <center><button>{item.button}</button></center>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default buying;