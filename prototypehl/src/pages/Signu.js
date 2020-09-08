import React from 'react';
import Sign_Up from '../atoms/Sigup/SignUp';
import Header from '../atoms/header';
import Footer from '../atoms/footer'; 

function signin(){
    return(
        <div>
            <Header />
            <Sign_Up />
            <Footer />
        </div>
    )
}
export default signin;