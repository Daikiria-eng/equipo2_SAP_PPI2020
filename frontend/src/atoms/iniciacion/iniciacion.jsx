import React from 'react';
import axios from 'axios';

class Log_in extends React.Component {
    constructor(props) {
        super(props)
        this.state = { usuario: [] }
    }
    getUsuario = async () => {
        console.log('q');
        let c = document.getElementById('user');
        await axios.get(`localhost:4001/usuarios/usuarios/${c.value}`)
            .then(res => {
                this.setState({ usuario: res.data });
                this.comprobaciones();
            }).catch(err => {
                if (err) {
                    console.error(err);
                }
            });
    }
    comprobaciones = () => {
        console.log(this.state.usuario);
        if (this.state.usuario.length != 0) {
            let contra = document.getElementById('contra');
            if (contra.value == this.state.usuario[0].contraseña) {

            } else {
                console.log('contraseña incorrecta');
            }
        }
    }
    render() {
        return (
            <>
                <center /><div className="page">
                    <div className="info_log">
                        <h1>Inicia Sesión</h1>
                        <input type="text" placeholder="Usuario o Correo" id="user" />
                        <input type="password" placeholder="Contraseña" id="contra" />
                        <button onClick={() => { this.getUsuario() && <Redirect to="/principal"/>; }}>Ingresar</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Log_in;