import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBar from './components/ContactBar';
import Home from './context/Home';
import About from './context/About';
import Projects from './context/Projects';
import Contact from './context/Contact';
import FooterTop from './context/Footer-Top';
import Footer from './context/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div fluid className="App  ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eremiya Rifat</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Webentwickler in Halle" />
      </Helmet>
      <Home />
      <About />
      <Projects />
      <Contact />
      <ContactBar />
      <FooterTop />
      <Footer />
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
