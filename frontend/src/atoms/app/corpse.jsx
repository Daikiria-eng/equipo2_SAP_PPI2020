import React from 'react';

function Coffin(props) {
    return (
        <div className="corpse">
            <h1 id="head_c">{props.title}</h1>
            <div className="cards">
                {props.cards.map((item, index) => {
                    return (
                        <div key={`item-title-${index}`} className="card">
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>
                            <button>{item.button}</button>
                        </div>
                    )
                })}
            </div>
            <h1 id="head_c">Según tus necesidades</h1>
            <div className="cards">
                {props.cards.map((item, index) => {
                    return (
                        <div key={`item-title-${index}`} className="card">
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>
                            <button>{props.button}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Coffin;