import React from 'react';
import Header from '../atoms/header';
import SignLike from '../atoms/signLike/signLike'
import Footer from '../atoms/footer';
import Icons from '../icons';

function select(){
    return(
        <>
            <Header />
            <SignLike 
                options={[
                    {
                        src: Icons[2].img, 
                        title: "Usuario",
                        alt: "Imagen de usuario",
                        descript: "Como usuario, será usted quien pide un domicilio (usa el servivicio)",
                        button: "Ingresar"
                    },{
                        src: Icons[3].img,
                        title: "Dueño de abarrote",
                        alt: "Imagen de abarrote",
                        descript: "Como dueño, usted registrará su abarote para proveer productos a quienes le soliciten",
                        button: "Ingresar"
                    },{
                        src: Icons[2].img,
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