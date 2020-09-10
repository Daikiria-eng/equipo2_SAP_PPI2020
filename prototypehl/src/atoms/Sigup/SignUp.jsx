import React from 'react';

function SignUp() {
    return (
        <div className="sign_up">
        <label for="SItem1">Nombres</label>
        <input className="sign_input" id="SItem1" type="text" placeholder="Nombres"/>
        <label for="SItem2">Primer apellido</label>
        <input className="sign_input" id="SItem2" type="text" placeholder="Apellido"/>
        <label for="SItem2">Segundo apellido</label>
        <input className="sign_input" id="SItem3" type="text" placeholder="Segundo Apellido"/>
        <label for="SItem4">Correo</label>
        <input className="sign_input" id="SItem4" type="text" placeholder="example@email.com"/>
        <label for="SItem5">Contraseña</label>
        <input className="sign_input" id="SItem5" type="password" placeholder="*****"/>
        <label for="SItem6">Confirme su contraseña</label>
        <input className="sign_input" id="SItem6" type="password" placeholder="*****"/>
        <input className="sign_input" type="checkbox" id="confirm_form"/>
        <label for="confirm_form" id="redmessage">
            * Confirmo ya he leído los términos y políticas,
            y soy consciente que al registrarme,
            estoy de acuerdo con ellas. 
        </label>
        <button>Enviar</button>
        </div>
    )
}
export default SignUp;