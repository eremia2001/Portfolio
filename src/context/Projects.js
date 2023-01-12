import SideMenu from '../components/SideMenu';
import '../styles/Projects.css';
import reactLogo from '../media/reactLogo.png';
import Carousel from 'react-bootstrap/Carousel';
import CardElement from '../components/CardElement';
import projectData from '../data/projectData.json';

// hanlde Project Data
// -> turns it into readable JSX , that can render on page
const allProjects = projectData.map((element) => {
  return (
    <Carousel.Item className="item">
      <CardElement
        title={element.title}
        info={element.info}
        link={element.link}
        img={element.img}
        id={element.id}
        className="cardItem"
      />
    </Carousel.Item>
  );
});

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
            {allProjects}
          </Carousel>
        </div>
      </div>
      <img src={reactLogo} className=" reactLogo reactLogo2" />
    </div>
  );
}

export default Projects;
