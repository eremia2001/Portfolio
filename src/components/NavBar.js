import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import RifatLogo from '../media/Logo.png';
import { List } from 'react-bootstrap-icons';

import '../styles/navbar.css';
import horLine from '../media/LineHorizontal.png';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show);
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container fluid className="NavContainer">
          <Navbar.Brand>
            <a href="#home">
              <img src={RifatLogo} className="logo" />
            </a>
          </Navbar.Brand>

          <Nav className="navHeader justify-content-end flex-grow-1 pe-3 ">
            <Nav.Link href="#about">
              <p className="nav-menu">Über mich</p>
            </Nav.Link>

            <Nav.Link href="#projects">
              <p className="nav-menu">Projekte</p>
            </Nav.Link>
            <Nav.Link href="#contact">
              <p className="nav-menu">Kontakt</p>
            </Nav.Link>
          </Nav>
          <List className="hamburgerMenu" onClick={handleShow} />

          <Offcanvas
            show={show}
            onHide={handleClose}
            className="phoneMenu"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="phoneMenuBody">
              <div className="phoneNav">
                <a href="#about" onClick={handleClose}>
                  <p className="nav-menu phoneMenuLinks">Über mich</p>
                </a>
                <a href="#projects" onClick={handleClose}>
                  <p className="nav-menu phoneMenuLinks">Projekte</p>
                </a>
                <a href="#contact" onClick={handleClose}>
                  <p className="nav-menu phoneMenuLinks">Kontakte</p>
                </a>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

/*
 */
