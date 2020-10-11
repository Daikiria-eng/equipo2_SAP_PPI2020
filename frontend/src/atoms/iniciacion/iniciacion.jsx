import React from 'react';
import Img from '../../imgs';

function Log_in(){
    return(
        <>
            <center/><div className="page">
                <div className="info_log">
                    
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