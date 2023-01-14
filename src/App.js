import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ContactBar from './components/ContactBar';
import Home from './context/Home';
import About from './context/About';
import Projects from './context/Projects';
import Price from './context/Price';
import Contact from './context/Contact';

function App() {
  return (
    <div fluid className="App  ">
      <Home />
      <About />
      <Projects />
      <Contact />
      <ContactBar />
    </div>
  );
}

export default App;

/* 

.formField
{
    background-color: #363F42;
    box-shadow: 5px 5px 4px rgba(9, 9, 9, 25%) ;
    font-family: Roboto Mono;
    border: none;
    color: #B2BEC3;
}
.formField:focus
{
    background-color: #363F42;
    color: #B2BEC3;
    border: none;
}
.formText
{
    color:#B2BEC3 ;
    font-family: Roboto;
    font-weight: 300;
}


.button
{
    background-color:transparent;
    border: 1px solid #B2BEC3 ;
    font-size: 1.2vw;
    transition: 0.8s;
}


*/
