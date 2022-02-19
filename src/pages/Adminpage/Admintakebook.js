import React from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import UserService from "../../services/userservice";
import alertify from "alertifyjs";
export default function Admintakebook() {

  const [studentNumber, setstudentNumber] = useState([]);

  
  async function takebook(e) {
    e.preventDefault();
    let userService = new UserService();
    let value=userService.AdminTakeBorrowedBooks(Number(studentNumber));
    if (value.data== null) {
      alertify.success("Kitaplar Teslim Alınmıştır");
    } else {
      alertify.error("Kitap Teslim Alma İşlemi Başarısız");
    }
  }
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Öğrenci Kitap Teslim Alma
        </h1>
        <Row className="mt-5">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={takebook}>
              <Form.Group>
                <Form.Label>Öğrenci Numarası</Form.Label>
                <Form.Control
                  onChange={(e) => setstudentNumber(e.target.value)}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <button
                  style={{ marginTop: "10px" }}
                  className="btn btn-success"
                >
                  Teslim Al
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}
