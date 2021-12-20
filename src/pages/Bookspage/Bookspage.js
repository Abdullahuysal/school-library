import React, { useEffect, useState } from "react";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";
import Table from 'react-bootstrap/Table'
export default function Bookspage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((result) => setBooks(result.data.data));
  }, []);

  console.log(books);
  return (
    <>
      <Navi />

      <div style={{ marginTop: "2rem" ,width: "80%", marginLeft: "10%" }}>
        <Table  striped bordered hover variant="dark">
          <thead >
            <tr>
              <th scope="col">Kitap Adı</th>
              <th scope="col">Kitap Yazarı</th>
              <th scope="col">Kitap Sayfa Sayısı</th>
              <th scope="col">Kütüphane Adedi</th>
            </tr>
          </thead>
         
            <tbody  >
            {books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookName}</td>
                <td>{book.bookAuthor}</td>
                <td>{book.bookPageCount}</td>
                <td>{book.bookStockInLibrary}</td>
              </tr>
         
          ))}
             </tbody>
        </Table>
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
