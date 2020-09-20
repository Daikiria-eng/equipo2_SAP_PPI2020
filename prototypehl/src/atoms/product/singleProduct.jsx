import React from 'react';

function buying(props) {
    return (
        <>
            <div className="product_to">
                <div className="visualP">
                    <img src="" alt="Producto" />
                    <h2>Nombre del producto</h2>
                    <p>owner</p>
                </div>
                <div className="buy_report">
                    <button>Comprar</button>
                    <button>Denunciar</button>
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