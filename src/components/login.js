import React, { useState,useEffect } from "react";
import { Form,Button } from 'react-bootstrap';
import axios from "axios";
require("dotenv").config();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_ENDPOINT = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if(localStorage.getItem('myValueInLocalStorage'))
    {
      window.location = '/Home'
    }
    else{
    }
      
      
  },[]);

  const handleLogin = (e) => {
    e.preventDefault()
    if(email && password){
      const body ={
        email:email,
        password:password
      }
      axios.post(`${API_ENDPOINT}/login`,  body)
            .then(function (response) {
            console.log(response);
            alert(response.data.message)
            
            if(response.data.status){
              localStorage.setItem('myValueInLocalStorage', response.data.token);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('email', response.data.email);
            window.location = '/Home'
            setEmail("")
            setPassword("")
            }
            
            
            
            })
            .catch(function (error) {
            console.log(error);
            })
            .finally(function () {
            // always executed
            }); 

    
      
    }
  }

    return(
  <Form inline className="mt-3">
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Email
  </Form.Label>
  <Form.Control size="sm" type="email"
    className="mb-2 mr-sm-2"
    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Password
  </Form.Label>
  <Form.Control size="sm" type="password"
    className="mb-2 mr-sm-2"
    placeholder="password"
    onChange={(e) => setPassword(e.target.value)}
    required
  />
 
  
  <Button size="sm" type="submit" className="mb-2" onClick={(e) => handleLogin(e)}>
    Login
  </Button>
</Form>)

}

export default Login;