import '../styles/sidemenu.css';
import vertLine from '../media/verticalLine.png';
import { Nav } from 'react-bootstrap';

function SideMenu() {
  return (
    <div className="SideMenu">
      <img src={vertLine} className="vertLine lineTop" />
      <Nav className="flex-column nav">
        <Nav.Item></Nav.Item>
        <Nav.Link className="side-menu" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="side-menu-active">Über mich</Nav.Link>
        <Nav.Link className="side-menu">Projekte</Nav.Link>
        <Nav.Link className="side-menu">Leistungen</Nav.Link>
        <Nav.Link className="side-menu">Kontakt</Nav.Link>
        <Nav.Item></Nav.Item>
      </Nav>
      <img src={vertLine} className="vertLine lineBot" />
    </div>
  );
}

export default SideMenu;
