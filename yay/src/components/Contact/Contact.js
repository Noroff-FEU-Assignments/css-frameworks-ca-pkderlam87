import React from 'react';
import styled from 'styled-components';
import InfoContact from './InfoContact';
import TitlePage from './../TitlePage';
import FormContact from './FormContact';
import Footer from './../Footer';
import { WrapperGrid } from '../../styles/layout';

export const MdPlaces = styled(WrapperGrid)`
    column-gap: 2%;
    margin-bottom: 5%;
    div:nth-child(2){
        grid-column: 1;
        grid-row:1;
    }
    div:nth-child(1){
        grid-column: 2;
        grid-row:2;
    }
    form{
        grid-column: 1;
        grid-row:2;
    }
`


function Contact() {
    return (
        <div className="App">
            <MdPlaces>
                <InfoContact />
                <TitlePage content="Submit your details" />
                <FormContact />
            </MdPlaces>
            <Footer />
        </div>
    );
}

export default Contact;