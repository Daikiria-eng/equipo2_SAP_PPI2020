import React from 'react';
import Imgs from '../../imgs';

function info(){
    return(
        <div className="weare">
            <h1>Quienes somo?</h1>
            <p id="infor">Somos un grupo de personas, que 
            quiere benficiar a los dueños de los abarrotes,
            y a las personas vulnerables, drante una pandemia
            problemas para el abastecimiento. Y con este proyecto,
             lo que haremos es beneficiar a todas estas
            gentes.</p>
            <img src={Imgs[1].img} alt="Logo"/>
        </div>
    )
}
export default info;