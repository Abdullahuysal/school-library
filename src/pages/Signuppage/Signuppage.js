import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
export default function Signuppage() {
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Kütüphane Sistemi Kayıt Ol
        </h1>
        <Row className="mt-5">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group>
                <Form.Label>Okul Numaranız</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="numaranızı tiresiz şekilde giriniz(17155000)"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ad</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Soyad</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email adres</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Şifre</Form.Label>
                <Form.Control type="password" placeholder="Şifre" />
              </Form.Group>

              <Form.Group>
                <Link to="/Homepage" className="btn btn-success">
                  Kayıt Ol
                </Link>
                <Form.Group>
                  <Form.Label>Hesabınız var mı?</Form.Label>
                </Form.Group>
                <Form.Group>
                  <Link onClick to="/Loginpage" className="btn btn-success">
                    Giriş Yap
                  </Link>
                </Form.Group>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
