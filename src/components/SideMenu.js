import '../styles/sidemenu.css';
import vertLine from '../media/verticalLine.png';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';

function SideMenu(props) {
  function handleClick(event) {
    console.log(event.target.name);
  }
  return (
    <div className="SideMenu">
      <img src={vertLine} className="vertLine lineTop" />
      <Nav className="flex-column nav">
        <Nav.Link onClick={handleClick} className="side-menu" href="#home">
          Home
        </Nav.Link>
        <Nav.Link
          onClick={handleClick}
          href="#about"
          className={props.page == 'about' ? 'side-menu-active' : 'side-menu'}
          name="about"
        >
          Über mich
        </Nav.Link>
        <Nav.Link
          onClick={handleClick}
          href="#projects"
          className={
            props.page == 'projects' ? 'side-menu-active' : 'side-menu'
          }
          name="projects"
        >
          Projekte
        </Nav.Link>
        <Nav.Link
          href="#price"
          className={props.page == 'price' ? 'side-menu-active' : 'side-menu'}
          name="price"
        >
          Leistungen
        </Nav.Link>
        <Nav.Link
          href="#contact"
          className={props.page == 'contact' ? 'side-menu-active' : 'side-menu'}
          name="contact"
        >
          Kontakt
        </Nav.Link>
        <Nav.Item></Nav.Item>
      </Nav>
      <img src={vertLine} className="vertLine lineBot" />
    </div>
  );
}
// TODO: Side nicht fixiert, Sidebar active links sind hardgecoded.
// bei fixierter Sidebar kann man die active links durch Hooks programmieren
export default SideMenu;
