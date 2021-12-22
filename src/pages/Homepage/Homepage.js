import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";
import icon from "../../images/bookicon.jpg";
import available from "../../images/available.png"
import nonavailable from "../../images/nonavailable.png";
export default function Homepage() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  let searchedBook = false;
  console.log(books);

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
          <div   key={book.bookId} style={{marginTop:"5px",border: '5px solid whitesmoke',borderRadius: '5px!important',color:"#212529"}} className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div
                
                className="col-md-4 border-right"
              >
                <img src={icon} alt="a"></img>
              </div>
              <div
               
                style={{ paddingTop: "30px" }}
                className="col-md-4 border-right"
              >
                <h1>{book.bookName}</h1>
                <h2>Kitap Kategorisi:{book.bookCategory}</h2>
                <h2>Kitap Yazarı:{book.bookAuthor}</h2>
                <h2> Sayfa Sayısı:{book.bookPageCount}</h2>
              </div>
              <div
                style={{paddingTop: "30px" }}
                className="col-md-4 border-right"
              >
                <h2>
                <div style={{marginTop:"10px"}} >Şu anda Kitap Kütüphanede mi?</div>
                  {book.bookavailability ?(
                     <img style={{width:"100px",height:"100px",color:"red",marginTop:"20px"}}  src={available} alt="a"></img>
                  ):(
                    <img style={{width:"100px",height:"100px",color:"red",marginTop:"20px"}}  src={nonavailable} alt="a"></img>
                  )
                   
                  }
                  
                 
                 
                </h2>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}
