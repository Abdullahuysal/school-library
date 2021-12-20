import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Navi from "../../layouts/Navi/Navi";
import UserService from "../../services/userservice";
import axios from "axios";
export default function UserInfo() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    let userService = new UserService();
    userService
      .getUserInfo(Number(localStorage.studentId))
      .then((result) => setUserInfo(result.data));
    console.log(userInfo);
  },[]);

  return (
    <div>
      <Navi />

      <Card style={{ marginTop: "10rem", width: "50%", marginLeft: "25%" }} key={userInfo.studentId} bg="light">
        <Card.Header>Öğrenci Bilgileri</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>Okul Numarası:{userInfo.studentNumber}</Card.Text>
          <Card.Text>İsim:{userInfo.studentName}</Card.Text>
          <Card.Text>Soyisim:{userInfo.studentLastName}</Card.Text>
          <Card.Text>Mail Adres:{userInfo.studentEmail}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
