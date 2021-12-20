import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import UserService from "../../services/userservice";
import alertify from "alertifyjs";
export default function Signuppage() {
  const [number, setNumber] = useState([]);
  const [email, setEmail] = useState([]);
  const [name,setName]=useState([]);
  const [lastname,setLastname]=useState([]);
  const [password, setPassword] = useState([]);
  async function register(e) {
    e.preventDefault();
    let userService = new UserService();
    var userRegister={
      "StudentNumber":Number(number),
      "StudentName":name,
      "StudentLastName":lastname,
      "StudentEmail":email,
      "StudentPassword":password,
    }
    let value=await userService.register(userRegister);
    if(value.data!=null)
    { 

      alertify.success('Kullanıcı eklenmiştir Giriş Yap Sayfasına giderek giriş yapabilirsiniz');
    }
    else{
      alertify.error('Kayıt olma işlemi başarısız '); 
    }
  }
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Kütüphane Sistemi Kayıt Ol
        </h1>
        <Row className="mt-5">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={register}>
              <Form.Group>
                <Form.Label>Okul Numaranız</Form.Label>
                <Form.Control
                onChange={(e)=>setNumber(e.target.value)}
                  type="number"
                  placeholder="numaranızı tiresiz şekilde giriniz(17155000)"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ad</Form.Label>
                <Form.Control 
                 onChange={(e)=>setName(e.target.value)}
                type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Soyad</Form.Label>
                <Form.Control
                 onChange={(e)=>setLastname(e.target.value)}
                type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email adres</Form.Label>
                <Form.Control 
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="example@gmail.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Şifre</Form.Label>
                <Form.Control 
                 onChange={(e)=>setPassword(e.target.value)}
                type="password" placeholder="Şifre" />
              </Form.Group>

              <Form.Group>
              <button style={{marginTop:"10px"}} className="btn btn-success"  >Kayıt Ol</button>
                <Form.Group>
                  <Form.Label>Hesabınız var mı?</Form.Label>
                </Form.Group>
                <Form.Group>
                  <Link onClick to="/Loginpage" className="btn btn-success">
                    Giriş Yap
                  </Link>
                </Form.Group>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
