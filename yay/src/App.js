
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import GlobalStyle from './styles/GlobalStyle';

const theme = {
  primaryColour: "#E92569",
  secondaryColour: "#FFFFFF",
  lightGray: "#EFEFEF",
  darkGray: "#767676",
  mediumGray: "#C7C7C7",
  blackColour: "#0A0A0A",
  backgroundColour: "radial-gradient(#FFFFFF,#E5E5E5)",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
