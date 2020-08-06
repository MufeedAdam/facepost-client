import React, { useState,useEffect } from "react";
import { Row,Col, Container,Image,Spinner } from 'react-bootstrap';
import moment from 'moment'
import axios from "axios";
require("dotenv").config();
const Posts = () => {
    const [post, setPost] = useState();
    const [empty,setEmpty] = useState(true)
    const [loading,setLoading] = useState(true)
    const API_ENDPOINT = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        
        axios
        .get(`${API_ENDPOINT}/viewPost`)
        .then(function(response) {
          // handle success
          
          setPost(response.data);
          setLoading(false);
          //console.log(response.data.data);
          if(response.data.data.length>0)
            setEmpty(false)
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }, []);
    if(loading){
        return (<Spinner animation="border" variant="primary" role="status" className="mt-5">
        <span className="sr-only">Loading...</span>
      </Spinner>)
    }

    if(empty){
        return <Container className="mt-5">No Post</Container>
    }

    return(
    <Container className="mt-5">
        
        {post && post.data.map(p => (
            <Container  className="layBorderrow mt-3 p-3">
            <Row>
            <Col className="text-left font-weight-bold">
                <Image src="https://s3.amazonaws.com/prod.skimble/photos/29359/hstzsdw4avx_large.gif" roundedCircle className="ima"/>
               <span className="ml-2">{p.name}</span> 
                </Col>
          </Row>
          <Row>
        <Col className=" mt-2 ml-5 mr-5 badge badge-primary text-wrap">{moment(p.created_at, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").add(330,'m').fromNow()}</Col>
      </Row>
      <Row >
      <Col className="text-left mt-2">{p.post}</Col>
    </Row>
  </Container> 
         
        ))}
      
    </Container>)
  
}

export default Posts;