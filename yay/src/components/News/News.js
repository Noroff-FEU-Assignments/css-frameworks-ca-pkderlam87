import React from 'react';
import Navigation from './../Nav';
import TitleIndex from './../TitleIndex';
import Paragraph from './../Paragraph';
import Footer from './../Footer';

function News() {
    return (
        <div className="App">
            <Navigation />
            <TitleIndex />
            <Paragraph content="NEWS"></Paragraph>
            <Footer />
        </div>
    );
}

export default News;