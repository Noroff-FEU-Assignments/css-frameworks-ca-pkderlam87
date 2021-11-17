
import './App.css';
import Navigation from './components/Nav';
/*import CarouselNews from './components/Carousel';
import TitlePage from './components/TitlePage';
import Paragraph from './components/Paragraph';
import TabsIndex from './components/Tabs';
import Footer from './components/Footer';*/
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import News from './components/News/News';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
