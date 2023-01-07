import '../styles/sidemenu.css';
import vertLine from '../media/verticalLine.png';
import { Nav } from 'react-bootstrap';

function SideMenu() {
  return (
    <div className="SideMenu">
      <img src={vertLine} className="vertLine" />
      <Nav className="flex-column nav">
        <Nav.Item></Nav.Item>
        <Nav.Link className="side-menu">Home</Nav.Link>
        <Nav.Link className="side-menu-active">Über mich</Nav.Link>
        <Nav.Link className="side-menu">Projekte</Nav.Link>
        <Nav.Link className="side-menu">Leistungen</Nav.Link>
        <Nav.Link className="side-menu">Kontakt</Nav.Link>
        <Nav.Item></Nav.Item>
      </Nav>
      <img src={vertLine} className="vertLine" />
    </div>
  );
}

export default SideMenu;
