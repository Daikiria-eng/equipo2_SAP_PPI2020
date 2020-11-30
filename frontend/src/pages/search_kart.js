import React from 'react';
import Header from '../atoms/header';
import Search from '../atoms/search/search_kart';
import Footer from '../atoms/footer';

function search_kart(){
    return(
        <>
            <Header />
            <Search
                    cards={[
                        {
                            name: "Carrito 1",
                            desc: "Limpieza",
                            button: "comprar/ver"
                        }, {
                            name: "Carrito 2",
                            desc: "Dulces",
                            button: "comprar/ver"
                        },
                        {
                            name: "Carrito 3",
                            desc: "Comidas",
                            button: "comprar/ver"
                        }, {
                            name: "Crear",
                            desc: "crea tu carrito",
                            button: "Crear"
                        }
                    ]}
                    title="Resultados de busqueda"
                    button="Comprar"
                />
            <Footer />
        </>
    )
}
export default search_kart;