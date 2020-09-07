import React from 'react';
import '../../src/style.css'
//space
function Coffin(props) {
    return (
        <div className="corpse">
            <h1>{props.title}</h1>
            {props.cards.map((item, index) => {
                return (
                    <div className="cards">
                        <div key={`item-title-${index}`} className="card">
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>
                            <button>{props.button}</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Coffin;