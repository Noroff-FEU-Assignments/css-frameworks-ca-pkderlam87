import React from 'react';
import InfoContact from './InfoContact';
import TitlePage from './../TitlePage';
import FormContact from './FormContact';
import Footer from './../Footer';

function Contact() {
    return (
        <div className="App">
            <InfoContact />
            <TitlePage content="Submit your details" />
            <FormContact />
            <Footer />
        </div>
    );
}

export default Contact;