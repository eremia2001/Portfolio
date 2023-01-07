import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ContactBar from './components/ContactBar';
import Home from './context/Home';
import About from './context/About';

function App() {
  return (
    <div fluid className="App  ">
      <Home />
      <About />
    </div>
  );
}

export default App;
