import SideMenu from '../components/SideMenu';
import '../styles/Projects.css';
import reactLogo from '../media/reactLogo.png';
import CardElement from '../components/CardElement';

function Projects() {
  return (
    <div className="page Projects" id="projects">
      <SideMenu page="projects" />
      <div className="projectContainer">
        <div className="projectsTitle">
          <h1 className="title primaryColor">Projekte</h1>
          <h4 className="text-white">meine Zeitreise der Neugier</h4>
        </div>
        <div className="cardElementContainer">
          <CardElement />
          <CardElement />
        </div>
      </div>
      <img src={reactLogo} className=" reactLogo reactLogo2" />
    </div>
  );
}

export default Projects;
