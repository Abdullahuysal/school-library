import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoBook } from "react-icons/io5";
import { ImExit } from "react-icons/im";
export default function Navi() {
  function exit(){
    localStorage.clear();
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Homepage" style={{ color: "white" }}>
            Kütüphane
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{ color: "white", marginLeft: "4rem" }}
                href="/Bookspage"
              >
                Kitaplar
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown    id="nav-dropdown" title={localStorage.getItem('studentName')} >
                <NavDropdown.Item href="/UserInfo" >
                  Bilgilerim <BsFillInfoCircleFill/>
                  </NavDropdown.Item>
              
                <NavDropdown.Item href="/Userbook">
                  Kitaplarım <IoBook/>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={exit} href="/Loginpage">
                  Çıkış Yap <ImExit/>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
