import Axios from 'axios';
import React from 'react';
/*import axios from 'axios';*/

class account extends React.Component{
    constructor(props){
        super(props)
        this.state={nombre: ''};
    }
    handleChange =event=>{
        this.setState({nombre: event.target.value})
    }
    handleConfirm=async()=>{
        await Axios.delete(`http://localhost:4001/usuario/usuario/${nombre}`)
        .then(response=>{
            console.log(response.data);
        }).catch(err=>{
            console.log(err);
        });
    }
    render(){
        /*let change=document.querySelector('.input_change').innerHTML*/
        return(
            <>
                <div className="account_info">
                    <h1>Su información</h1>
                    <input className="input_change" type="text" disabled placeholder="nombre" id="inick"/><br/>
                    <input className="input_change" type="text" disabled placeholder="direccion" id="idirec"/><br/>
                    <input className="input_change" type="text" disabled placeholder="Barrio" id="itown"/><br/><br/>
                    <input className="input_change" type="text" disabled placeholder="abarrote" id="igrocery"/><br/>
                    <button>Editar</button><br/>
                    <hr/><br/>
                    <h1>De otro modo</h1>
                    <h3>Si desea eliminar la cuenta</h3>
                    <input className="input_change" type="text" 
                    onChange={()=>this.handleChange()} placeholder="Nombre de la cuenta"/>
                    <button onClick={()=>this.handleConfirm()}>Eliminar cuenta</button>
                </div>
            </>
        )
    }   
}
export default account;