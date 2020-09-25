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
                        name: "Producto1",
                        desc: "util",
                        button: "comprar"
                    },
                    {
                        name: "producto2",
                        desc: "también útil",
                        button: "comprar"
                    },
                    {
                        name: "producto3",
                        desc: "igualmente útil",
                        button: "comprar"
                    }
                ]}
                button="Comprar"
            />
            <Foot />
        </div>
    )
}
export default app;