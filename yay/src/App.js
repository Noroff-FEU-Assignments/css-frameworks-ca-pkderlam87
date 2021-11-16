
import './App.css';
/*import Navigation from './components/Nav';
import CarouselNews from './components/Carousel';
import TitleIndex from './components/TitleIndex';
import Paragraph from './components/Paragraph';
import TabsIndex from './components/Tabs';
import Footer from './components/Footer';*/
import { Routes, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './components/Home/Home'
import News from './components/News/News';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link exact to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link to="./components/News/News" className="nav-link">
              News
            </Nav.Link>
            <Nav.Link to="./components/Contact/Contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./components/News/News" element={<News />} />
        <Route path="./components/Contact/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
