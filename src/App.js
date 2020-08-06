import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Login from "./components/login";
import Signup from "./components/signup";
function App() {


  
  return (
    <div className="App">
     <Container fluid >
        <Row className="top">
          <Col className="title"  md={6}>facepost</Col>
          <Col md={6}><Login/></Col>
        </Row>
        <Row className="bottom">
          <Col className="bottom1 pt-5 pl-5 texttitle" md={6}>FacePost helps you connect and share with the<br/> people in your life.</Col>
          <Col md={6} className="mt-5" > <span className="title" style={{color: "black"}}>Create an account.</span> <Signup  /> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
