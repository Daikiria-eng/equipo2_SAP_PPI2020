import React from 'react';

function suggest(){
    return(
        <form className="f_form">
            <label for="Item1">Nombres</label>
            <input id="Item1" type="text" placeholder="Nombres"/>
            <label for="Item2">Primer apellido</label>
            <input id="Item2" type="text" placeholder="Apellido"/>
            <label for="Item2">Segundo apeelido</label>
            <input id="Item3" type="text" palaceholder="Segundo Apellidp"/>
            <label for="Item4">Correo</label>
            <input id="Item4" type="text" placeholder="example@email.com"/>
            <label for="Item5">Ingrse su comentario</label>
            <input id="Item5" type="text" placeholder="Comentario"/>
            <input type="checkbox" id="confirm_form"/>
            <label for="confirm_form" id="redmessage">
                *Confirmo que este comentario no es despectivo
                y ya he leído los términos y políticas
            </label>
        </form>
    )
}
export default suggest;