import React, { useState } from "react";
import { Col, Container, Form, Row, Alert } from "react-bootstrap";
import UserService from "../../services/userservice";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function Loginpage() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState(false);
  
  let navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    let userService = new UserService();
    let value = await userService.getUsers().then();

    if (email===value.data[0].Useremail && password === value.data[0].UserPassword) {
      const userdata=value.data[0].UserName;
      localStorage.setItem("Userinfo",userdata)
      navigate("/Homepage");
    } else {
      setError(true);
    }
  }
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Kütüphane Sistemi Giriş Yap
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
                <Form.Label>Email adres</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="example@gmail.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Şifre</Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Şifre"
                />
              </Form.Group>
              <button style={{marginTop:"10px"}} className="btn btn-success"  >Giriş Yap</button>

              <Link onClick to="/Signuppage" className="btn btn-success" style={{marginLeft:"10px" ,marginTop:"10px"}}>
                   Kayıt Ol
                  </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
