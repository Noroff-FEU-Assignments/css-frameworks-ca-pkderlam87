
import Navigation from './../Nav';
import CarouselNews from './../Carousel';
import TitleIndex from './../TitleIndex';
import Paragraph from './../Paragraph';
import TabsIndex from './../Tabs';
import Footer from './../Footer';
import { Routes, Route, Link } from "react-router-dom";
import News from './../News/News';
import Contact from './../Contact/Contact';

function App() {
    return (
        <div className="App">
            <Navigation />
            <CarouselNews />
            <TitleIndex />
            <Paragraph content="Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa."></Paragraph>
            <TabsIndex />
            <Footer />
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default App;