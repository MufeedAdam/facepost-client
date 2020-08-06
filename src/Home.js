import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from "./components/posts";
import AddPosts from "./components/addPosts";
import { Container,Row,Col,Button } from 'react-bootstrap';

function Home() {
    const [name, setName] = useState("");
    
    useEffect(() => {
      if(localStorage.getItem('myValueInLocalStorage')){
        setName(localStorage.getItem('name'))
        
      }
      else{
        alert("Please Sign in")
        window.location = '/'
        
      }

    },[]);

    const handleLogout = () => {
      
      localStorage.removeItem('myValueInLocalStorage');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.clear();
      window.location = '/'
    }
  return (
    <div className="App">
     <Container fluid >
        <Row className="top">
            <Col xs={6} className="title">fp</Col>
            <Col xs={6} className="mt-3 texter">Welcome {name}.  <Button variant="outline-light" onClick={handleLogout}>Logout</Button>{' '}</Col>
        </Row> 
        <Row className="bottom">
            <Col md={{ span: 6, offset: 3 }}><AddPosts/><Posts/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
