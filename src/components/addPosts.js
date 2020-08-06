import React, { useState } from "react";
import { Form,Button, Container } from 'react-bootstrap';
import './../App.css';
import axios from "axios";
require("dotenv").config();

const AddPosts = () => {
    const [post,setPost]= useState("")
    const API_ENDPOINT = process.env.REACT_APP_API_KEY;
    const postHandle = (e) =>{
      e.preventDefault()
      const auth=localStorage.getItem('myValueInLocalStorage')
      const headers={
        Authorization:'Bearer '+auth
      }
      const body={
        post:post,
        email:localStorage.getItem('email')

      }
      axios.post(`${API_ENDPOINT}/addPost`,  body,{
    headers: headers
    })
    .then(function (response) {
      console.log(response);
      setPost("")
      alert(response.data.message)
      window.location.reload(false);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });  
      console.log(post)
    }


    return(<Form className="layBorder mt-5">
        <Container className="p-2">
        <Form.Control  className="mt-2" as="textarea" value={post} onChange={(e) => setPost(e.target.value)} placeholder="What's on your mind?" />
      <Button variant="info" size="md"  block type="submit" className="mt-2" onClick={(e) => postHandle(e)}>
        Post
      </Button>
        </Container>
      </Form>)
  
}

export default AddPosts;