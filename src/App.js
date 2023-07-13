// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Components
import Header from './components/Header/index.js';
import Home from './components/Home/index.js';
import Projects from './components/Projects/index.js';
import About from './components/About/index.js'

// CSS
import './assets/styles.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
