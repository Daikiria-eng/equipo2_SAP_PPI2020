import React from 'react';
import Header from '../atoms/header';
import Iniciacion from '../atoms/log_in/log_in';
import Footer from '../atoms/footer';

function iniciado(){
	return(
		<>
			<Header/>
			<Iniciacion/>
			<Footer/>
		</>
	)
}
export default iniciado;