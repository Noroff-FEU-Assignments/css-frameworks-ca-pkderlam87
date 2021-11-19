import React from 'react';
import TitlePage from './../TitlePage';
import Footer from './../Footer';
import Cards from './Cards';
import NavNews from './NavNews';
import Container from 'react-bootstrap/Container';

function News() {
    return (
        <div className="App">
            <Container>
                <TitlePage content="News" />
                <NavNews />
                <Cards />
                <NavNews />
            </Container>
            <Footer />
        </div>
    );
}

export default News;