import React from 'react';
import Prod from '../atoms/some_products/products';
import Footer from '../atoms/footer';
import Header from '../atoms/header_user';

function some(){
    return(
        <div>
            <Header />
            <Prod 
                cs={[
                    {
                        names: "Limpieza",
                        description: "útil",
                        button: "Comprar/Ver"
                    },
                    {
                        names: "Comida",
                        description: "igualmente útil",
                        button: "Comprar/Ver"
                    },
                    {
                        names: "Pasabocas",
                        description: "también útil",
                        button: "Comprar/Ver"
                    },
                    {
                        names: "aseo personal",
                        description: "resulta útil",
                        button: "Comprar/Ver"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}
export default some;