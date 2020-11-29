import React from 'react';

function suggest(){
    return(
        <form className="f_form">            
            <input id="Item1" type="text" placeholder="Nombres"/>            
            <input id="Item2" type="text" placeholder="Apellidos"/>            
            <input id="Item4" type="email" placeholder="example@email.com"/>            
            <textarea id="Item5" type="text" rows="8" placeholder="Comentario"/>
            <input type="checkbox" id="confirm_form_comm"/>
            <label for="confirm_form_comm" id="redmessage">
                *Confirmo que este comentario no es despectivo
                y ya he leído los términos y políticas
            </label>
            <button id="Item6">Enviar</button> 
        </form>
    )
}
export default suggest;