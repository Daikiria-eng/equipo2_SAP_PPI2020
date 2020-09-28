import React from 'react';
import Imgs from '../../imgs'
import {Link} from 'react-router-dom';

function SignUp() {
    return (
        <>
        <h1>Información Básica</h1>
        <div className="sign_up">
            <input className="sign_input" id="SItem1" type="text" placeholder="Nombres"/>
            <input className="sign_input" id="SItem2" type="text" placeholder="Apellido"/>
            <input className="sign_input" id="SItem4" type="text" placeholder="example@email.com"/>
            <input className="sign_input" id="SItem5" type="password" placeholder="Cree una contraseña"/>
            <input className="sign_input" id="SItem6" type="password" placeholder="Confirme su contraseña"/>
            <input className="sign_inputc" type="checkbox" id="confirm_form"/>
            <label for="confirm_form" id="redmesssage">
                * Confirmo ya he leído los términos y políticas,
                y soy consciente que al registrarme,
                estoy de acuerdo con ellas.
            </label>
            <Link to="/segundo">
                <button className="r">Registrarme</button>
            </Link>
        </div>
        <hr id="divider_sign"/>
        <div className="Alternativas">
            <button><img src={Imgs[2].img} alt="Registrarse con google" id="google_logo"/></button>
            <button><img src={Imgs.[3].img} alt="Registrarse con Facebook" id="facebook_logo"/></button>
        </div>
        </>
    )
}
export default SignUp;