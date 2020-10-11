import React from 'react';

function abarrote(){
	return(
		<>
			<div className="abarrote">
				<form className="info_abarrote">
					<input className="ciudad" type="text" placeholder="Ciudad"/><br/>
					<input className="barrio" type="text" placehoder="barrio"/>
					<input className="Nombre" type="text" placeholder="Nombre"/>
					<button className="entrar">Enviar</button>
				</form>
			</div>
		</>
	)
}
export default abarrote; 