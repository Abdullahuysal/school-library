import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  let searchedBook=null;
  console.log(search);


  if (search) {
    searchedBook = books.filter((book) => {
      let bookname = book.bookName;
      return bookname.includes(search) === true;
    });
  } else {
      
  }

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((result) => setBooks(result.data.data));
  }, []);
  console.log(searchedBook);
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
            <Card  style={{ marginTop: "2rem", width: "50%", marginLeft: "25%" }}className="text-center" key={book.bookId}>
              <Card.Body>
                <Card.Title>{book.bookName}</Card.Title>
                <Card.Text>Kitap Yazarı:{book.bookAuthor}</Card.Text>
                <Card.Text>
                  Sayfa Sayısı:{book.bookPageCount}
                  Kütüphane Adedi:{book.bookStockInLibrary}
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