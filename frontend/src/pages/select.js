import React from 'react';
import Header from '../atoms/header';
import SignLike from '../atoms/signLike/signLike'
import Footer from '../atoms/footer';
import Imgs from '../imgs';

function select(){
    return(
        <>
            <Header />
            <SignLike 
                options={[
                    {
                        title: "Usuario",
                        alt: "Imagen de usuario",
                        descript: "Como usuario, será usted quien pide un domicilio",
                        button: "Ingresar"
                    },
                    {
                        title: "Dueño de abarrote",
                        alt: "Imagen de abarrote",
                        descript: "Como dueño, usted registrará su abarote para proveer productos",
                        button: "Ingresar"
                    },
                    {
                        title: "Domiciliario",
                        alt: "Imagen de domiciliario",
                        descript: "Como domiciliario, usted se encarga de entregar los domicilios",
                        button: "Ingresar"                        
                    }
                ]}
            />
            <Footer />
        </>
    )
}
export default select;