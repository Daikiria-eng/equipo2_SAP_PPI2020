import React from 'react';
import Header from '../atoms/header';
import SignLike from '../atoms/signLike/signLike'
import Footer from '../atoms/footer';
import User from '../assets/icons/user_image.png';
import Grocery from '../assets/icons/grocery_user.png';

function select(){
    return(
        <>
            <Header />
            <SignLike 
                options={[
                    {
                        src: User, 
                        title: "Usuario",
                        alt: "Imagen de usuario",
                        descript: "Como usuario, será usted quien pide un domicilio (usa el servivicio)",
                        button: "Ingresar",
                        link: "/iniciar"
                    },{
                        src: Grocery,
                        title: "Dueño de abarrote",
                        alt: "Imagen de abarrote",
                        descript: "Como dueño, usted registrará su abarote para proveer productos a quienes le soliciten",
                        button: "Ingresar",
                        link: "/abarrote"
                    },{
                        src: User,
                        title: "Domiciliario",
                        alt: "Imagen de domiciliario",
                        descript: "Como domiciliario, usted se encarga de entregar los domicilios",
                        button: "Ingresar",
                        link: "/domiciliario"                       
                    }
                ]}
            />
            <Footer />
        </>
    )
}
export default select;