import React from 'react';
import TitleIndex from './../TitleIndex';
import Paragraph from './../Paragraph';
import Footer from './../Footer';
import Cards from './Cards';
import NavNews from './NavNews';

function News() {
    return (
        <div className="App">
            <TitleIndex content="News" />
            <NavNews />
            <Cards />
            <Footer />
        </div>
    );
}

export default News;