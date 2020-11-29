import React from 'react';
import {Link} from 'react-router-dom';

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
                            <Link to="/productos"><button>{item.button}</button></Link>
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
                            <Link to="/productos"><button>{item.button}</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Coffin;