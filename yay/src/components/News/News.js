import React from 'react';
import TitlePage from './../TitlePage';
import Footer from './../Footer';
import Cards from './Cards';
import NavNews from './NavNews';

function News() {
    return (
        <div className="App">
            <TitlePage content="News" />
            <NavNews />
            <Cards />
            <Footer />
        </div>
    );
}

export default News;