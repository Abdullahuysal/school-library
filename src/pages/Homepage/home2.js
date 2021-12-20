import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";
export default function Homepage() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  var searchedBook;

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((result) => setBooks(result.data.data));
  }, []);

  function searchBook(e) {
    e.preventDefault();
    if (search) {
      searchedBook = books.filter((book) => {
        let bookname = book.bookName;

        return bookname.includes(search) === true;
      });
      console.log(searchedBook);
    }
  }
  console.log(searchedBook);

  return (
    <div>
      <Navi />

      <Form onSubmit={searchBook}>
        <Input
          placeholder="Tüm Kütüphanede ara..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginTop: "5rem", width: "50%", marginLeft: "400px" }}
          bsSize="lg"
          type="search"
        ></Input>
        <Button>Tıkla</Button>
      </Form>

      {searchedBook ? (
        searchedBook.map((book) => (
          <Card
            style={{ marginTop: "2rem", width: "50%", marginLeft: "25%" }}
            className="text-center"
            key={book.id}
          >
            <Card.Body>
              <Card.Title>{book.BookName}</Card.Title>
              <Card.Text>Kitap Yazarı:{book.Author}</Card.Text>
              <Card.Text>
                Sayfa Sayısı:{book.Pages}
                Kütüphane Adedi:{book.unitsInLibrary}
              </Card.Text>
              <Button variant="success">Kitabı incele</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}
