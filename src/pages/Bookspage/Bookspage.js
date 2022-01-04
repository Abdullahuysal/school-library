import React, { useEffect, useState } from "react";
import icon from "../../images/book2.jpg";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";
import { useNavigate } from "react-router-dom";
export default function Bookspage() {
  let navigate = useNavigate();
  function goDetailsPage(bookName) {
  
    localStorage.setItem("BookName",bookName);
    navigate("/BookDetailspage");
  }
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let bookService = new BookService();
    bookService.getBooks().then((result) => setBooks(result.data.data));
  }, []);

  return (
    <div>
      <Navi />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          {books.map((book) => (
            <div
              key={book.bookId}
              style={{ marginTop: "1rem" }}
              className="col-md-4 border-right"
            >
              <div className="card ">
                <img
                  style={{ width: "100px", height: "100px" }}
                  className="card-img-top mx-auto"
                  src={icon}
                  alt="Card"
                ></img>
                <div className="card-body  ">
                  <h2 className="card-title" style={{ textAlign: "center" }}>
                    {book.bookName}
                  </h2>

                  <h3 className="card-text ">Kitap Yazarı:{book.bookAuthor}</h3>
                  <h3 className="">Kitap Sayfa Sayısı:{book.bookPageCount}</h3>

                  <button
                    onClick={() => goDetailsPage(book.bookName)}
                    style={{ marginTop: "10px" }}
                    className="btn btn-success"
                  >
                    kitap İncele
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
