
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
