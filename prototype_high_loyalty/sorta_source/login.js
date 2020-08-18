'use strict';
document.querySelector('#logg').innerHTML='Log In';
const enter=document.querySelector('#enterto');
const enterAlert=()=>alert('Has iniciado sesión');
enter.addEventListener('click', enterAlert);