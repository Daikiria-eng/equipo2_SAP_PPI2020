import React from 'react';
import SignUp from '../atoms/Sigup/SignUp';
import Header from '../atoms/header';
import Footer from '../atoms/footer'; 

function signin(){
    return(
        <div>
            <Header />
            <SignUp />
            <Footer />
        </div>
    )
}
export default signin;