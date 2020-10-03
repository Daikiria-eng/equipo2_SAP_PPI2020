import React from 'react';
/*import Imgs from '../../imgs';*/

function select(props) {
    return (
        <>
            <h1>Segundo paso</h1>
            <div className="container" id="option">
                <div className="options">
                    {props.options.map((item, opt) => {
                        return (
                            <>
                                <div key={opt} className="User">
                                <div className="imageuser">
                                    <img src="" alt={item.alt} id="imageuser"/>
                                </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.descript}</p>
                                    <button>{item.button}</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default select;