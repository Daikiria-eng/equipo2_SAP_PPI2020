import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Log_in extends React.Component {
    constructor(props) {
        super(props)
        this.state = { usuario: [], boolean: false };
    }
    getUsuario = async () => {
        let c = document.getElementById('user');
        await axios.get(`http://localhost:4001/usuarios/usuarios/${c.value}`)
            .then(res => {
                this.setState({ usuario: res.data});
                this.comprobaciones();
            }).catch(err => {
                if (err) {
                    console.error(err);
                }
            });
    }
    comprobaciones = () => {
        if (this.state.usuario.length !== 0) {
            let contra = document.getElementById('contra');
            if (contra.value === this.state.usuario[0].contraseña) {
                console.log('#$%');
                this.setState({boolean:true });
                <Redirect to="/principal" />
            }else{
                console.log('no existe');
                alert('ha escrito de manera incorrecta sus datos');
            }
        }
    }
    render() {
        return (
            <>
                <div className="page">
                    <div className="info_log">
                        <h1>Inicia Sesión</h1>
                        <input type="text" placeholder="Usuario o Correo" id="user" />
                        <input type="password" placeholder="Contraseña" id="contra" />
                        <button onClick={() => {this.getUsuario();}}>Ingresar</button>
                    </div>{this.state.boolean && <Redirect to="/principal" />}
                </div>
            </>
        )
    }
}
export default Log_in;