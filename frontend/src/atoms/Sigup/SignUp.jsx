import React from 'react';
import { Redirect } from 'react-router-dom';
import Facebook from '../../assets/icons/facebook_s.png';
import Google from '../../assets/icons/google_s.png';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { usuarios: [], boolean: false };
    }
    postUsuario = async () => {
        let nick = document.querySelector('#SItem1');
        let town = document.querySelector('#SItem2');
        let email = document.querySelector('#SItem4');
        let direccion = document.querySelector('#SItem8');
        let password = document.querySelector('#SItem6');
        const any = {
            nombre: nick.value,
            Barrio: town.value,
            correo: email.value,
            contraseña: password.value,
            direccion: direccion.value
        };
        await axios.post(`http://localhost:4001/usuarios/registrarse`, any)
            .then(response => {
                this.setState({ boolean: true })
            }).catch (err=>{
                if(err){
                    console.log(err);
                }
            });
    }
    render() {
        return (
            <>
                <h1>Información Básica</h1>
                <div className="sign_up">
                    <input className="sign_input" id="SItem1" type="text" name="nombre" placeholder="Nick" />
                    <input className="sign_input" id="SItem2" type="text" name="Barrio" placeholder="Barrio" />
                    <input className="sign_input" id="SItem4" type="email" name="correo" placeholder="example@email.com" />
                    <input className="sign_input" id="SItem8" type="text" name="direccion" placeholder="dirección" />
                    <input className="sign_input" id="SItem5" type="password" placeholder="Cree una contraseña" />
                    <input className="sign_input" id="SItem6" type="password" name="contraseña" placeholder="Confirme su contraseña" />
                    <input className="sign_inputc" type="checkbox" id="confirm_form" />
                    <label for="confirm_form" id="redmesssage">
                        *Confirmo ya he leído los términos y políticas,
                        y soy consciente que al registrarme,
                        estoy de acuerdo con ellas.
                </label>
                    {/*<Link className="Link" style={{ textdecoration: 'none' }} id="Link" to="/segundo">*/}
                    <button className="r" id="SItem7" onClick={() => this.postUsuario()}>Registrarme</button>
                </div>
                <hr id="divider_sign" />
                <div className="Alternativas">
                    <button><img src={Google} alt="Registrarse con google" id="google_logo" /></button>
                    <button><img src={Facebook} alt="Registrarse con Facebook" id="facebook_logo" /></button>
                </div> {this.state.boolean && <Redirect to="/segundo" />}
            </>
        )
    }
}
export default SignUp;