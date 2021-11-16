import React from 'react';
import Navigation from './../Nav';
import TitleIndex from './../TitleIndex';
import Paragraph from './../Paragraph';
import Footer from './../Footer';

function Contact() {
    return (
        <div className="App">
            <Navigation />
            <TitleIndex />
            <Paragraph content="CONTACT"></Paragraph>
            <Footer />
        </div>
    );
}

export default Contact;