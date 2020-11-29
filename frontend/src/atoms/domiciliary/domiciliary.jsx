import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class domiciliary extends React.Component{
    constructor(props){
        super(props)
        this.state={domiciliary: [], boolean: false}
    }
    domiPost=async()=>{
        let town=document.querySelector('#town');
        let name=document.querySelector('#name');
        let grocery=document.querySelector('#grocery');
        const domiciliari={
            Barrio: town.value,
            nombre: name.value,
            abarrote: grocery.value
        };
        await axios.post(`http://localhost:4001/domiciliario/domiciliario`, domiciliari)
        .then(response=>{
            this.setState({boolean: true})
        }).catch (err=>{
            if(err){
                console.log(err);
            }
        });
    }
    render(){
        return(
            <>
				<div className="abarrote">
					<form className="info_abarrote">
						<h1>la información</h1>
						<input className="barrio" type="text" placeholder="Barrio" id="town" /><br />
						<input className="Nombre" type="text" placeholder="Nombre" id="name" /><br />
                        <input className="abarrote" type="text" placeholder="a qué abarrote perteneces?" id="grocery" /><br />
                        <label for="grocery">Si no perteneces a ninguno, dejalo en blanco</label>
						<button className="entrar" onClick={() => this.domiPost()}>Enviar</button>
					</form>
			</div>{this.state.boolean && <Redirect to="/" />}
            </>
        )
    }
}
export default domiciliary;