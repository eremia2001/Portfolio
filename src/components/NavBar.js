import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navHeader">
              <Nav.Link href="#about">
                <p className="nav-menu">Über mich</p>
              </Nav.Link>
              <Nav.Link href="#projects">
                <p className="nav-menu">Projekte</p>
              </Nav.Link>
              <Nav.Link>
                <p className="nav-menu">Leistungen</p>
              </Nav.Link>
              <Nav.Link>
                <p className="nav-menu">Kontakt</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
