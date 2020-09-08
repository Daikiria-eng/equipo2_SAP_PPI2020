import React from 'react';
import Prod from '../atoms/some_products/products';
import Footer from '../atoms/footer';
import Header from '../atoms/header';

function some(){
    return(
        <div>
            <Header />
            <Prod 
                cs={[
                    {
                        names: "producto1",
                        description: "útil",
                        button: "Comprar"
                    },
                    {
                        names: "producto2",
                        description: "igualmente útil",
                        button: "Comprar"
                    },
                    {
                        names: "producto3",
                        description: "también útil",
                        button: "Comprar"
                    },
                    {
                        names: "producto4",
                        description: "resulta útil",
                        button: "Comprar"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}
export default some;