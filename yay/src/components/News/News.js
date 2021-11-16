import React from 'react';
import TitleIndex from './../TitleIndex';
import Paragraph from './../Paragraph';
import Footer from './../Footer';
import Cards from './Cards';

function News() {
    return (
        <div className="App">
            <TitleIndex content="News" />
            <Cards />
            <Footer />
        </div>
    );
}

export default News;