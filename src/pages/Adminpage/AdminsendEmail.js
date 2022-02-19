import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import UserService from '../../services/userservice';
import alertify from "alertifyjs";
export default function AdminsendEmail() {
    const [studentNumber, setstudentNumber] = useState([]);
    async function sendEmail(e){
      e.preventDefault();
      let userService=new UserService();
      var studentnumber=studentNumber;
        let value=await userService.AdminsendEmail(studentnumber);
        if (value.data!= null) {
          alertify.success("Mail Başarılı bir şekilde gönderildi");
        } else {
          alertify.error("Mail Gönderme İşlemi Başarısız");
        }
    }
    return (
        <div>
             <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Öğrenci Mail Gönder
        </h1>
        <Row className="mt-5">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={sendEmail}>
              <Form.Group>
                <Form.Label>Öğrenci numarası</Form.Label>
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
                  Mail Gönder
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
        </div>
    )
}
