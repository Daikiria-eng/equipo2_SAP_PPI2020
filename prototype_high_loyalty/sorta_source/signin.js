'use strict';
document.querySelector('#logg').innerHTML= 'Log In';
//space
const siggn=document.querySelector('#siggn');
const siggnAlert=()=>alert('Registro exitoso: confirme su correo');
siggn.addEventListener('click', siggnAlert);
//space
const googLe=document.querySelector('#gl');
const googleAlert=()=>alert('se ha realizado su registro con éxito');
googLe.addEventListener('click', googleAlert);
//space
const faceBook=document.querySelector('#fb');
const faceBookAlert=()=>alert('Su registro se ha realizado con éxito');
faceBook.addEventListener('click', faceBookAlert);