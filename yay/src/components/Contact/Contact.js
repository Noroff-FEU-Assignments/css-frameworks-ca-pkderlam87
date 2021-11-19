import React from 'react';
import InfoContact from './InfoContact';
import TitlePage from './../TitlePage';
import FormContact from './FormContact';
import Footer from './../Footer';
import Container from 'react-bootstrap/esm/Container';

function Contact() {
    return (
        <div className="App">
            <Container>
                <InfoContact />
                <TitlePage content="Submit your details" />
                <FormContact />
            </Container>
            <Footer />
        </div>
    );
}

export default Contact;