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

function App() {
  return (
    <div fluid className="App  ">
      <Home />
      <About />
      <ContactBar />
      <Projects />
      <Price />
    </div>
  );
}

export default App;
