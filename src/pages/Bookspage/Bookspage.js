// import React, { useEffect, useState } from "react";
// import Navi from "../../layouts/Navi/Navi";
// import BookService from "../../services/bookService";
// import Table from 'react-bootstrap/Table'
// export default function Bookspage() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     let bookService = new BookService();
//     bookService.getBooks().then((result) => setBooks(result.data.data));
//   }, []);

//   return (
//     <>
//       <Navi />

//       <div style={{ marginTop: "2rem" ,width: "80%", marginLeft: "10%" }}>
//         <Table  striped bordered hover variant="dark">
//           <thead >
//             <tr>
//               <th scope="col">Kitap Adı</th>
//               <th scope="col">Kitap Yazarı</th>
//               <th scope="col">Kitap Sayfa Sayısı</th>
//               <th scope="col">Kitap Kütüphanede mi?</th>
//             </tr>
//           </thead>

//             <tbody >
//             {books.map((book) => (
//               <tr style={{marginTop:"50px"}} key={book.bookId}>
//                 <td>{book.bookName}</td>
//                 <td>{book.bookAuthor}</td>
//                 <td>{book.bookPageCount}</td>
//                 <td>{book.bookavailability?"Kütüphanede":"Öğrencide"}</td>
//               </tr>

//           ))}
//              </tbody>
//         </Table>
//       </div>
//     </>
//   );
// }

/*


*/
import React, { useEffect, useState } from "react";
import icon from "../../images/book.jpg";
import Navi from "../../layouts/Navi/Navi";
import BookService from "../../services/bookService";
export default function Bookspage() {
  
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
            <div key={book.bookId} style={{marginTop:"1rem"}} className="col-md-4 border-right">
              <div className="card "  >
                
                <img 
                  style={{ width: "100px", height: "100px" }}
                  
                  className="card-img-top mx-auto"
                  src={icon}
                  alt="Card"
                ></img>
                <div className="card-body  ">
                  <h2 className="card-title" style={{textAlign:"center"}}>{book.bookName}</h2>
                  
                  <h3 className="card-text ">Kitap Yazarı:{book.bookAuthor}</h3>
                  <h3 className="">Kitap Sayfa Sayısı:{book.bookPageCount}</h3>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
