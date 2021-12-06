import React, { useEffect, useState } from "react";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";

export default function Bookspage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((result) => setBooks(result.data));
  }, []);

  console.log(books);
  return (
    <>
      <Navi />

      <div style={{ marginTop: "2rem" }}>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Kitap Adı</th>
              <th scope="col">Kitap Yazarı</th>
              <th scope="col">Kitap Sayfa Sayısı</th>
              <th scope="col">Kütüphane Adedi</th>
            </tr>
          </thead>
          {books.map((book) => (
            <tbody key={book.id} >
              <tr>
                <td>{book.BookName}</td>
                <td>{book.Author}</td>
                <td>{book.Pages}</td>
                <td>{book.unitsInLibrary}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

/*
      <Table style={{width:"80%",marginLeft:"200px"}} striped bordered hover>
              <thead>
                <tr>
                  <th>Kitap Adı</th>
                  <th>Kitap Yazarı</th>
                  <th>Kitap Türü</th>
                  <th>Sayfa Sayısı</th>
                </tr>
              </thead>
              {books.map((book) => (
                <tbody>
                  <tr>
                    <td>{book.BookName}</td>
                    <td>{book.Author}</td>
                    <td>{book.categoryName}</td>
                    <td>{book.Pages}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
        

*/
