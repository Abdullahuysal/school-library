// import React, { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";
// import Navi from "../../layouts/Navi/Navi";
// import UserService from "../../services/userservice";
// export default function UserInfo() {
//   const [userInfo, setUserInfo] = useState([]);
//   useEffect(() => {
//     let userService = new UserService();
//     userService
//       .getUserInfo(Number(localStorage.studentId))
//       .then((result) => setUserInfo(result.data));
//     console.log(userInfo);
//   },[]);

//   return (
//     <div>
//       <Navi />

//       <Card style={{ marginTop: "10rem", width: "50%", marginLeft: "25%" }} key={userInfo.studentId} bg="light">
//         <Card.Header>Öğrenci Bilgileri</Card.Header>
//         <Card.Body>
//           <Card.Title></Card.Title>
//           <Card.Text>Okul Numarası:{userInfo.studentNumber}</Card.Text>
//           <Card.Text>İsim:{userInfo.studentName}</Card.Text>
//           <Card.Text>Soyisim:{userInfo.studentLastName}</Card.Text>
//           <Card.Text>Mail Adres:{userInfo.studentEmail}</Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }
import React , { useEffect, useState }from "react";
import {  Form} from "react-bootstrap";
import profile from "../../images/profile2.png";
import Navi from "../../layouts/Navi/Navi";
import UserService from "../../services/userservice";
export default function UserInfo() {
   const [userInfo, setUserInfo] = useState([]);
   useEffect(() => {
     let userService = new UserService();
     userService
       .getUserInfo(Number(localStorage.studentId))
       .then((result) => setUserInfo(result.data));
  },[]);

  return (
    <div>
       <Navi />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
        <div className="col-md-2 border-right">
          </div>
          <div className="col-md-4 border-right">
            <img style={{maxWidth:"100%"}} alt="profile" src={profile}></img>
          </div>
          <div className="col-md-4 border-right" >
          <div>
            <Form.Group>
              <Form.Label style={{color:"#017D89",fontSize:"20px",fontWeight:"bold",marginTop:"20px"}} >Öğrenci Okul Numarası</Form.Label>
              <Form.Control style={{backgroundColor:"white",fontWeight:"bold"}} type="text" placeholder={userInfo.studentNumber} readOnly />
              <Form.Label style={{color:"#017D89",fontSize:"20px",fontWeight:"bold",marginTop:"20px"}} >Öğrenci Ad</Form.Label>
              <Form.Control style={{backgroundColor:"white",fontWeight:"bold"}} type="text" placeholder={userInfo.studentName} readOnly />
              <Form.Label style={{color:"#017D89",fontSize:"20px",fontWeight:"bold",marginTop:"20px"}} >Öğrenci Soyad</Form.Label>
              <Form.Control style={{backgroundColor:"white",fontWeight:"bold"}} type="text" placeholder={userInfo.studentLastName} readOnly />
              <Form.Label style={{color:"#017D89",fontSize:"20px",fontWeight:"bold",marginTop:"20px"}} >Öğrenci E-mail</Form.Label>
              <Form.Control style={{backgroundColor:"white",fontWeight:"bold"}} type="text" placeholder={userInfo.studentEmail} readOnly />
              {/* <Form.Label style={{color:"#017D89",fontSize:"20px",fontWeight:"bold",marginTop:"20px"}} >Öğrenci Şifresi</Form.Label>
              <Form.Control style={{backgroundColor:"white",fontWeight:"bold"}} type="password"  defaultValue={userInfo.studentPassword}  /> */}
            </Form.Group></div>
          </div>
        </div>
      </div>
    </div>
  );
}
