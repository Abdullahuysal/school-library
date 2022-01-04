import React, { useEffect, useState } from "react";
import Navi from "../../layouts/Navi/Navi";
import bookimage  from "../../images/book3.jpg";
import BookService from "../../services/bookService";
export default function BookDetailspage() {
  const [bookDetails, setBookDetails] = useState([]);
  useEffect(() => {
    let bookService = new BookService();
    bookService
      .getBookDetails(localStorage.getItem("BookName"))
      .then((result) => setBookDetails(result.data.data));
  }, []);
  return (
    <div>
      <Navi />
      <div className="container rounded bg-white mt-5 mb-5">
        {bookDetails.map((book) => (
          <div key={book.bookId} className="row">
            <div className="col-md-4 border-right">
            <img style={{maxWidth:"100%",paddingTop:"20px"}} alt="profile" src={bookimage}></img>
            </div>
            <div style={{maxWidth:"100%",paddingTop:"90px"}} className="col-md-8 border-right" >
            <div style={{fontSize:"30px",fontFamily:"initial"}} >Kitap Adı:{book.bookName}</div>
            <div style={{fontSize:"30px",fontFamily:"initial",paddingTop:"30px"}} >Kitap Yazarı:{book.bookAuthor}</div>
            <div style={{fontSize:"30px",fontFamily:"initial",paddingTop:"30px"}} >Kitap Özeti</div>
            <div style={{fontSize:"20px",fontFamily:"initial",paddingTop:"30px"}} >{book.bookDetails}</div>
            {console.log(book)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
