// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



function App() {
  return <>
    <Container fluid>
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
