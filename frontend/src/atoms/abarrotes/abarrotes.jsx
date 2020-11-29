import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class abarrote extends React.Component {
	constructor(props) {
		super(props);
		this.state = { domiciliario: [], boolean: false }
	}
	groceryPost = async () => {
		let town = document.querySelector('#town');
		let name = document.querySelector('#name');
		const data = {
			Barrio: town.value,
			nombre: name.value
		};
		await axios.post(`http://localhost:4001/abarrote/registrar_abarrote/`, data)
			.then(response => {
				this.setState({ boolean: true });
			}).catch(err => {
				if (err) {
					console.log(err);
				}
			});
	}
	render() {
		return (
			<>
				<div className="abarrote">
					<form className="info_abarrote">
						<h1>la información</h1>
						<input className="barrio" type="text" placeholder="Barrio" id="town" /><br />
						<input className="Nombre" type="text" placeholder="Nombre" id="name" /><br />
						<button className="entrar" onClick={() => this.groceryPost()}>Enviar</button>
					</form>
			</div>{ this.state.boolean && <Redirect to="/" /> }
			</>
		)
	}
}
export default abarrote; 