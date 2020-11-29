import React from 'react';
import Header from '../atoms/header_user';
import Footer from '../atoms/footer';
import Account from '../atoms/account/account';

class account extends React.Component{
    render(){
        return(
            <>
                <Header />
                <Account />
                <Footer />
            </>
        )
    }
}
export default account;