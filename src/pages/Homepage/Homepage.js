import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  let searchedBook;
  console.log(search);

  if (search) {
    searchedBook = books.filter((book) => {
      let bookname = book.BookName;
      return bookname.includes(search) === true;
    });
  } else {
  }

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((result) => setBooks(result.data));
  }, []);
  return (
    <div>
      <Navi />
      <Input
        placeholder="Tüm Kütüphanede ara..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: "5rem", width: "50%", marginLeft: "25%" }}
        bsSize="lg"
        type="search"
      />

  
        {searchedBook ? (
          searchedBook.map((book) => (
            <Card  style={{ marginTop: "2rem", width: "50%", marginLeft: "25%" }}className="text-center" key={book.id}>
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

/*
<Card style={{ marginTop: "5rem", width: "50%", marginLeft: "25%" }}>
<Card.Header>Featured</Card.Header>
<Card.Body>
  <Card.Title>Special title treatment</Card.Title>
  <Card.Text>
    With supporting text below as a natural lead-in to additional
    content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
*/
