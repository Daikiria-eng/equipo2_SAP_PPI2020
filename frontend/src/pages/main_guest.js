import React from 'react';
import Header from '../atoms/header';
import Corpse from '../atoms/app/corpse';
import Foot from '../atoms/footer';
function app() {
    return (
        <div>
            <Header />
            <Corpse
                title="Cotidianos"
                cards={[
                    {
                        name: "Carrito 1",
                        desc: "Limpieza",
                        button: "comprar/ver"
                    },{
                        name: "Carrito 2",
                        desc: "Dulces",
                        button: "comprar/ver"
                    },
                    {
                        name: "Carrito 3",
                        desc: "Comidas",
                        button: "comprar/ver"
                    },{
                        name: "Crear",
                        desc: "crea tu carrito",
                        button: "Crear"
                    }
                ]}
                button="Comprar"
            />
            <Foot />
        </div>
    )
}
export default app;