import React from 'react';
import InfoContact from './InfoContact';
import TitleIndex from './../TitleIndex';
import FormContact from './FormContact';
import Footer from './../Footer';

function Contact() {
    return (
        <div className="App">
            <InfoContact />
            <TitleIndex content="Submit your details" />
            <FormContact />
            <Footer />
        </div>
    );
}

export default Contact;