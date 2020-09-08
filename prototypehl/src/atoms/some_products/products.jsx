import React from 'react';
function some_products(props) {
    return (
        <div className="prods">
            <h1>Algunos productos</h1>
            {props.cs.map((item, prp) => {
                return (
                    <div key={prp} className="card">
                        <h2>{item.names}</h2>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                )
            })}
        </div>
    )
}
export default some_products;