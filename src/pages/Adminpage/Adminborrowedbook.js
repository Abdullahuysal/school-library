import React from 'react'
import { useState } from 'react';
import UserService from "../../services/userservice";
import { Col, Container, Form, Row } from 'react-bootstrap';
import alertify from "alertifyjs";

export default function Adminborrowedbook() {
    const [bookName, setbookName] = useState([]);
    const [studentNumber, setstudentNumber] = useState([]);
    const [deliverytime,setdeliveryTime ] = useState([]);
    const [borrowedtime,setborrowedTime ] = useState([]);

    async function givebook(e){
      e.preventDefault();
      let userService=new UserService();
      let userInfo= await userService.getUserInfobynumber(Number(studentNumber));
      let userId=userInfo.data;
      var borrowedbook={
        "StudentId":userId,
        "BookName":bookName,
        "DeliveryTime":deliverytime,
        "BorrowedTime":borrowedtime
      };
      let value=await userService.AdminaddBorrowedBooks(borrowedbook);
      if (value.data!= null) {
        alertify.success("Kitap Başarılı Bir Şekilde Ödünç verilmiştir");
      } else {
        alertify.error("Kitap Ödünç Verme İşlemi Başarısız");
      }

    }
    return (
        <>
        <Container>
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
            Kitap Ödünç Verme
          </h1>
          <Row className="mt-5">
            <Col
              lg={7}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <Form onSubmit={givebook}>
                <Form.Group>
                  <Form.Label>Kitap Adı</Form.Label>
                  <Form.Control
                    onChange={(e) => setbookName(e.target.value)}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Öğrenci Numarası</Form.Label>
                  <Form.Control
                    onChange={(e) => setstudentNumber(e.target.value)}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kitap Ödünç Alma Tarihi</Form.Label>
                  <Form.Control
                    placeholder='tarihi yyyy-mm-dd formatında girin Örnk:2022-02-10'
                    onChange={(e) => setborrowedTime(e.target.value)}
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kitap Teslim Etme Tarihi</Form.Label>
                  <Form.Control
                  placeholder='tarihi yyyy-mm-dd formatında girin Örnk:2022-02-10'
                    onChange={(e) => setdeliveryTime(e.target.value)}
                    type="text"
                  />
                </Form.Group>
  
                <Form.Group>
                  <button
                    style={{ marginTop: "10px" }}
                    className="btn btn-success"
                  >
                    Onayla
                  </button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
        
    )
}
