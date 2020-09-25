import React from 'react';
import Body from '../atoms/product/singleProduct';
import Footer from '../atoms/footer';
import Header from '../atoms/header';
/*import { render } from '@testing-library/react';*/

function to_buy() {
    return (
        <>
            <Header />
            <Body
                comments={[
                    {
                        name: "Joaquín",
                        quality: "Calidad",
                        comment: "Me parece un buen servicio"
                    },
                    {
                        name: "Juan",
                        quality: "Buena",
                        comment: "Cualquier parecido con la realidad es pura coincidencia"
                    },
                    {
                        name: "Pepito",
                        quality: "Media",
                        comment: "Me parece un buen servicio, pero deberían quitar los comentarios en esta sesión"
                    }
                ]}
                relations={[
                    {
                        cart: "limpieza",
                        price: "$20.0",
                        button: "Comprar/ver"
                    },
                    {
                        cart: "Comida",
                        price: "20.0",
                        button: "Comprar/ver"
                    },
                    {
                        cart: "Pasabocas",
                        price: "30.0",
                        button: "Comprar/ver"
                    }
                ]}
            />
            <Footer />
        </>
    )
}
export default to_buy;