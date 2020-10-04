import React from 'react';
import Header from '../atoms/header';
import Corpse from '../atoms/app/corpse';
import Foot from '../atoms/footer';
//divider
function app() {
    return (
        <div>
            <Header />
            <Corpse
                title="Algunos productos"
                cards={[
                    {
                        name: "Carrito 1",
                        desc: "Limpieza",
                        button: "comprar/ver"
                    },
                    {
                        name: "Carrito 2",
                        desc: "Dulces",
                        button: "comprar/ver"
                    },
                    {
                        name: "Carrito 3",
                        desc: "Comidas",
                        button: "comprar/ver"
                    }
                ]}
                button="Comprar"
            />
            <Foot />
        </div>
    )
}
export default app;