import React, { useState } from "react";
import { Alert, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
export default function Adminloginpage() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState(false);
    let navigate = useNavigate();
    async function login(e) {
        e.preventDefault();
        console.log(email,password);
        if(email==="admin" && password==="admin"){
         
          navigate("/Adminpage");
        }
        else{
          setError(true);
        }
      }
    return (
        <>
               <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Kütüphane Personel Giriş Yap
        </h1>
        <Row className="mt-5">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg">
       {error? <Alert variant="danger" > <Alert.Heading>Kullanıcı Adı veya Şifre Hatalıdır</Alert.Heading></Alert>:<p></p>}
          
            <Form onSubmit={login} 
    >
              <Form.Group>
                <Form.Label>Kullanıcı Adı</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  
                
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Şifre</Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                 
                />
              </Form.Group>
              <button style={{marginTop:"10px"}} className="btn btn-success"  >Giriş Yap</button>
            </Form>
          </Col>
        </Row>
      </Container>   
        </>
    )
}
