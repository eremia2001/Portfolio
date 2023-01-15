import reactLogo from '../media/reactLogo.png';
import '../styles/About.css';
import SideMenu from '../components/SideMenu';
import { Container, Col, Row } from 'react-bootstrap';
import portrait from '../media/Portrait.jpeg';
import horLine from '../media/LineHorizontal.png';
import skillImage from '../media/skillImage.png';
import verLine from '../media/verticalLine.png';
import skillImage2 from '../media/skillImageVert.png';
function About() {
  return (
    <div className=" About " id="about">
      <SideMenu page="about" />
      <div className="aboutContainer">
        <div className="phoneTitle">
          <img src={horLine} className="horLine2" />
          <h1 className="primaryColor">Über mich</h1>
        </div>
        <div className="imageContainer">
          <img src={portrait} className="portraitImage" />
        </div>
        <img src={verLine} className="verLine" />

        <div className="content">
          <div className="titleContainer">
            <h1 className="primaryColor aboutTitle">Über mich</h1>
            <img src={horLine} />
          </div>
          <div className="textContainer">
            <p className="text-white aboutMeText">
              Ich bin Eremiya Rifat, ein <strong>Informatikstudent</strong> an
              der Martin-Luther-Universität in Halle. Ich habe mich auf die
              Entwicklung von Websites spezialisiert und verfüge über Kenntnisse
              in verschiedenen Technologien wie WordPress, JavaScript, HTML,
              CSS, React und Bootstrap. Ich habe Erfahrung darin, Websites zu
              erstellen, die sowohl attraktiv als auch benutzerfreundlich sind.
              Ich bin immer bestrebt, meine Fähigkeiten zu verbessern und neue
              Herausforderungen anzunehmen, um in meiner Karriere als
              Webentwickler voranzukommen.
            </p>
          </div>
          <img src={skillImage} className="skillImage" />
        </div>
      </div>
      <div className="skillImageContainer">
        <img src={skillImage2} className="skillImage2" />
      </div>
      <img src={reactLogo} className=" reactLogo2" />
    </div>
  );
}

export default About;
