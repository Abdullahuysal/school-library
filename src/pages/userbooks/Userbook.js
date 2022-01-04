import React , { useEffect, useState } from "react";
import Navi from "../../layouts/Navi/Navi";
import bookimage from "../../images/book.jpg";
import BookService from "../../services/bookService";
import Moment from 'moment';
export default function Userbook() {
  

  const [loanBooks, setLoanBooks] = useState([]);
   useEffect(() => {
     let bookService = new BookService();
     bookService.getBorrowedBooks(localStorage.studentId)
       .then((result) => setLoanBooks(result.data.data));
    
   }, []);
  return (
    <div>
      <Navi />
      <h1 style={{marginLeft:"40%"}} >Öğrenci Teslim Alınan Kitaplar</h1>
      {loanBooks.map((book) => (
      
      <div style={{marginTop:"5px",border: '6px solid whitesmoke',borderRadius: '5px!important'}} key={book.borrowedBookId} className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
          <img style={{ maxWidth: "50%"}} alt="profile" src={bookimage}></img>
          </div>
              <div className="col-md-3 border-right">
               <h2>Kitap Adı</h2> 
              <h3>{book.bookName}</h3>
              </div>
              <div className="col-md-3 border-right">
                <h2> Kitap Ödünç Alma Tarihi</h2>
                <h3>{Moment(book.borrowedTime).format('DD-MM-YYYY')}</h3>
              </div>
              <div className="col-md-3 border-right">
                <h2> Kitap Teslim Etme Tarihi</h2>
                <h3>{Moment(book.deliveryTime).format('DD-MM-YYYY')}</h3>
              </div>
        </div>
   
      </div>
      ))}

    </div>
  );
}
