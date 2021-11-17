import CarouselNews from './Carousel';
import TitlePage from './../TitlePage';
import Paragraph from './../Paragraph';
import TabsIndex from './Tabs';
import Footer from './../Footer';


function Home() {
    return (
        <div className="App">
            <CarouselNews />
            <TitlePage content="We do YAY things" />
            <Paragraph content="Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa."></Paragraph>
            <TabsIndex />
            <Footer />
        </div>
    );
}

export default Home;