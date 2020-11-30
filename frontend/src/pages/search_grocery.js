import React from 'react';
import Header from '../atoms/header_user';
import Footer from '../atoms/footer';
import Search from '../atoms/search/search_grocery';

function search_grocery() {
    return (
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
export default search_grocery;