import React from 'react';

function SignUp() {
    return (
        <div className="sign_up">
            <input id="SItem1" type="text" placeholder="Nombres">Nombres</input>
            <input id="SItem2" type="text" placeholder="Apellido">Primer apellido</input>
            <input id="SItem3" type="text" palaceholder="Segundo Apellidp">Segundo apellido</input>
            <input id="SItem4" type="text" placeholder="Correo">example@email.com</input>
            <input id="SItem6" type="password" placeholder="*****">Contraseña</input>
            <input id="SItem7" type="password=" placeholder="****">Confirmar contraseña</input>
            <input id="SItem8" type="checkbox"></input>
            <label for="SItem9">
                *Confirmo que este comentario no es despectivo
                y ya he leído los términos y políticas
            </label>
            <button>Enviar</button>
        </div>
    )
}
export default SignUp;