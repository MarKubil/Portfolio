// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Components
import Header from './components/Header/header';


// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// CSS
import './assets/styles.css'


function App() {
  return <>
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Router>
            <Routes>
              <Route exact path="/" element="" />
              <Route path="about" element=""/>
            </Routes>
        </Router>
      </Row>
    </Container>
  </>;
}

export default App;
