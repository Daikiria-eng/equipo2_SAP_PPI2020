import React from 'react';
import Footer from '../atoms/footer';
import Header from '../atoms/header_user';
import Search from '../atoms/search/search';

function search() {
    return (
        <>
            <Header />
            <Search />
            <Footer />
        </>
    )
}
export default search;