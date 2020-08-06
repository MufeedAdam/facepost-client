import React, { useState } from "react";
import { Form,Col,Button} from 'react-bootstrap';
import axios from "axios";
require("dotenv").config();

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [gender,setGender] = useState("Female");
    const API_ENDPOINT = process.env.REACT_APP_API_KEY;
    const handleSignup = (e) => {
        e.preventDefault()
        if(email && name && gender && password){
          const body ={
            name:name,
            email:email,
            password:password,
            gender:gender
          }

          axios.post(`${API_ENDPOINT}/register`,  body)
            .then(function (response) {
            console.log(response);
            alert(response.data.message)
            if(response.data.status){
                setName("")
            setEmail("")
            setPassword("")
            }
            
            })
            .catch(function (error) {
            console.log(error);
            alert(error)
            })
            .finally(function () {
            // always executed
            }); 
          
        }
      }
    return(
        <Form  className="mt-3">
            <Form.Row className="mt-3">
                <Col md={8}>
                <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </Col>
            </Form.Row >
            <Form.Row className="mt-3">
                <Col md={8}>
                <Form.Control type="email" placeholder="Email id" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={8}>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </Col>
            </Form.Row>
            <Form.Row className="mt-3">Gender
                <Col md={7}>
                <Form.Control  as="select" onChange={(e) => setGender(e.target.value)}>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                </Form.Control>
                </Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}>
                <Button variant="success" type="submit" size="lg" onClick={(e) => handleSignup(e)}>
                Sign Up
            </Button>
                </Col>
            </Form.Row>
           
        </Form>)

}

export default Signup;