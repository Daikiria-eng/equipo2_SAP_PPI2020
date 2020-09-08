import React from 'react';

function suggest(){
    return(
        <form className="f_form">
            <input id="Item1" type="text" placeholder="Nombres">Nombres</input>
            <input id="Item2" type="text" placeholder="Apellido">Primer apellido</input>
            <input id="Item3" type="text" palaceholder="Segundo Apellidp">Segundo apellido</input>
            <input id="Item4" type="text" placeholder="Correo">example@email.com</input>
            <input id="Item5" type="text" placeholder="Comentario">Ingrese su comentario</input>
            <input type="checkbox" id="confirm_form"/>
            <label for="confirm_form" id="redmessage">
                *Confirmo que este comentario no es despectivo
                y ya he leído los términos y políticas
            </label>
        </form>
    )
}
export default suggest;