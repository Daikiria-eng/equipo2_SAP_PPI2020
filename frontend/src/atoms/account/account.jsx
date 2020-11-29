import React from 'react';
import axios from 'axios';

class account extends React.Component{
    constructor(props){
        super(props)
        this.state({usuario: [], boolean: true})
    }
    render(){
        return(
            <>
                <div className="account_info">
                    <input className="input_change" type="text" disabled placeholder="nombre" id="inick"/><br/>
                    <input className="input_change" type="text" disabled placeholder="direccion" id="idirec"/><br/>
                    <input className="input_change" type="text" disabled placeholder="Barrio" id="itown"/><br/>
                    <input className="input_change" type="text" disabled placeholder="abarrote" id="igrocery"/>
                    <button>Editar</button><br/>
                    {let change=document.querySelector('.input_change').innerHTML}
                    <hr/><br/>
                    <button>Eliminar cuenta</button>
                </div>
            </>
        )
    }
}
export default account;