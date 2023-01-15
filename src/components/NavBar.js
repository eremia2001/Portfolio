import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Offcanvas,
  Button,
  Form,
  NavDropdown,
} from 'react-bootstrap';
import RifatLogo from '../media/Logo.png';
import '../styles/navbar.css';
import horLine from '../media/LineHorizontal.png';

function NavBar() {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container fluid className="NavContainer">
          <Navbar.Brand>
            <img src={RifatLogo} className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
            className="offCanvas2"
            data-bs-scroll="true"
            data-bs-backdrop="false"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-sm`}
                className="text-white"
              >
                Menü
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="navHeader justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link href="#about">
                  <p className="nav-menu">Über mich</p>
                </Nav.Link>

                <Nav.Link href="#projects">
                  <p className="nav-menu">Projekte</p>
                </Nav.Link>
                <Nav.Link>
                  <p className="nav-menu">Kontakt</p>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

/*
 */
