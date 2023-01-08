import SideMenu from '../components/SideMenu';
import '../styles/Projects.css';
import reactLogo from '../media/reactLogo.png';

function Projects() {
  return (
    <div className="page Projects" id="projects">
      <SideMenu />
      <div className="projectContainer">
        <h1 className="title primaryColor">Projekte</h1>
        <h4 className="text-white">meine Zeitreise der Neugier</h4>
      </div>
      <img src={reactLogo} className=" reactLogo" />
    </div>
  );
}

export default Projects;
