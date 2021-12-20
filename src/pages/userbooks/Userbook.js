import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Navi from "../../layouts/Navi/Navi";
import UserService from "../../services/userservice";

export default function Userbook() {
const [loanBooks, setLoanBooks] = useState([]);
  useEffect(() => {
    let userService = new UserService();
    userService.getUserLoanBooks().then((result) => setLoanBooks(result.data));
  }, []);
  return (
    <div>

      <Navi />
        
      {loanBooks.map((book) => 
      <Card  style={{ marginTop: "2rem", width: "50%", marginLeft: "25%" }} key={book.id} >
        <Card.Body>
          <Card.Title>{book.BookName + "-- " +book.Author}</Card.Title>
          <Card.Text>
           Son teslim Etme Tarihi     {book.DeliveryDate}
          </Card.Text>
        </Card.Body>
      </Card>
      )}
    </div>
  );
}
