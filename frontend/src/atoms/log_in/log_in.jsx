import React from 'react';
import Img from '../../imgs';

function Log_in(){
    return(
        <>
            <div className="page">
                <div className="info_log">
                    <img src={Img[0].img} alt="Logo"/>
                    <h1>Inicia Sesión</h1>
                    <input type="text" placeholder="Usuario o Correo"/>
                    <input type="password" placeholder="Contraseña"/>
                    <button>Ingresar</button>
                </div>
            </div>
        </>
    )
}
export default Log_in;