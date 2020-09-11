import React from 'react';

function SignUp() {
    return (
        <div className="sign_up">
            <input className="sign_input" id="SItem1" type="text" placeholder="Nombres" />
            <input className="sign_input" id="SItem2" type="text" placeholder="Apellido" />
            <input className="sign_input" id="SItem3" type="text" placeholder="Segundo Apellido" />
            <input className="sign_input" id="SItem4" type="text" placeholder="example@email.com" />
            <input className="sign_input" id="SItem5" type="password" placeholder="*****" />
            <input className="sign_input" id="SItem6" type="password" placeholder="*****" />
            <input className="sign_input" type="checkbox" id="confirm_form" />
            <label for="confirm_form" id="redmesssage">
                * Confirmo ya he leído los términos y políticas,
                y soy consciente que al registrarme,
                estoy de acuerdo con ellas.
        </label>
            <button className="send">Enviar</button>
        </div>
    )
}
export default SignUp;