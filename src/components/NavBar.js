import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import RifatLogo from '../media/Logo.png';
import '../styles/navbar.css';

function NavBar() {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container fluid className="NavContainer">
          <Navbar.Brand>
            <img src={RifatLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navHeader">
              <Nav.Link>
                <p className="nav-menu">Über mich</p>
              </Nav.Link>
              <Nav.Link>
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

/*
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



*/
