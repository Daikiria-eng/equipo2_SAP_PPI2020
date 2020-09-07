import React from 'react';
import Header from '../atoms/header';
import Corpse from '../atoms/corpse';
//divider
function app() {
    return (
        <div>
            <Header />
            <Corpse
                title="Algunos productos"
                cards={[
                    {
                        name:"Producto1",
                        desc:"util"
                    },
                    {
                        name:"producto2",
                        desc:"también útil"
                    },
                    {
                        name:"producto3",
                        desc:"igualmente útil"
                    }
                ]}
                button="Comprar"
            />
        </div>
    )
}
export default app;