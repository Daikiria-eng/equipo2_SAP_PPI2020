import React from 'react';
import Footer from '../atoms/footer';
import Header from '../atoms/header_user';
import Search from '../atoms/search/search';

class search extends React.Component {
    render() {
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
}
export default search;