import SideMenu from '../components/SideMenu';
import '../styles/Projects.css';
import reactLogo from '../media/reactLogo.png';
import Carousel from 'react-bootstrap/Carousel';
import CardElement from '../components/CardElement';

function Projects() {
  return (
    <div className="page Projects" id="projects">
      <SideMenu page="projects" />
      <div className="projectContainer">
        <div className="projectsTitle">
          <h1 className="title primaryColor title2">Projekte</h1>
          <h4 className="text-white biggerNormalText">
            meine Zeitreise der Neugier
          </h4>
        </div>
        <div className="cardElementContainer">
          <Carousel className="carosell w-100" indicators={false}>
            <Carousel.Item className="item">
              <CardElement className="cardItem" />
            </Carousel.Item>
            <Carousel.Item className="item">
              <CardElement className="cardItem" />
            </Carousel.Item>
            <Carousel.Item className="item">
              <CardElement className="cardItem" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <img src={reactLogo} className=" reactLogo reactLogo2" />
    </div>
  );
}

export default Projects;
