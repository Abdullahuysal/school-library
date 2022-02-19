import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import UserService from "../../services/userservice";
import alertify from "alertifyjs";
export default function Adminadd() {
  const [bookCategory, setbookCategory] = useState([]);
  const [bookName, setbookName] = useState([]);
  const [bookAuthor, setbookAuthor] = useState([]);
  const [BookPageCount, setBookPageCount] = useState([]);
  const [Booksummary, setBookSummary] = useState([]);
  async function bookAdd(e) {
    e.preventDefault();
    let userService = new UserService();
    var newBook = {
      "BookCategory": bookCategory,
      "BookName": bookName,
      "BookAuthor": bookAuthor,
      "BookPageCount":Number(BookPageCount),
      "Bookavailability":true,
      "BookDetails":Booksummary,
    };
    console.log(newBook);
    let value = await userService.AdminaddBooks(newBook);
    if (value.data!= null) {
      alertify.success("Kitap başarılı bir Şekilde eklenmiştir");
    } else {
      alertify.error("Kitap Ekleme İşlemi Başarısız");
    }
  }

  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Kitap Ekle
        </h1>
        <Row className="mt-5">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={bookAdd}>
              <Form.Group>
                <Form.Label>Kitap Kategorisi</Form.Label>
                <Form.Control
                  onChange={(e) => setbookCategory(e.target.value)}
                  type="text"
                  placeholder="Kitap kategorisi(Roman,şiir... vs)"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kitap Adı</Form.Label>
                <Form.Control
                  onChange={(e) => setbookName(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kitap Yazarı</Form.Label>
                <Form.Control
                  onChange={(e) => setbookAuthor(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kitap Sayfa Sayısı</Form.Label>
                <Form.Control
                  onChange={(e) => setBookPageCount(e.target.value)}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kitap Özeti</Form.Label>
                <Form.Control
                  onChange={(e) => setBookSummary(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group>
                <button
                  style={{ marginTop: "10px" }}
                  className="btn btn-success"
                >
                  Kitap Ekle
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
