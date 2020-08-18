'use strict';
document.querySelector('#logg').innerHTML= 'Log In';
//divider
const siggn=document.querySelector('#siggn');
const siggnAlert=()=>alert('Registro exitoso: confirme su correo');
siggn.addEventListener('click', siggnAlert);