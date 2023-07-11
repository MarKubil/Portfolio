// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Components
import Header from './components/Header/index.js';
import Home from './components/Home/index.js'


// Bootstrap
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// CSS
import './assets/styles.css'


function App() {
  return <>
    <Container fluid>
        <Router>
          <Row>
            <Header />
          </Row>
          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="about" element={Home} />
          </Routes>
        </Router>
    </Container>
  </>;
}

export default App;
