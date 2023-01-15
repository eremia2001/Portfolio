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
              Ich bin Eremiya Rifat, ein erfahrener Webentwickler aus{' '}
              <strong>Halle (Saale)</strong> und Informatikstudent an der
              Martin-Luther-Universität. Ich habe mich auf die professionelle
              Entwicklung von Websites spezialisiert und verfüge über fundierte
              Kenntnisse in verschiedenen Technologien wie WordPress,
              JavaScript, HTML, CSS, React und Bootstrap. Mit meiner Erfahrung
              in der Erstellung von optisch ansprechenden und
              benutzerfreundlichen Websites, bin ich der ideale Partner für
              Unternehmen und Organisationen in Halle und Umgebung, die eine
              erstklassige Online-Präsenz wünschen. Ich bin stets bemüht, meine
              Fähigkeiten und Kenntnisse zu verbessern und nehme gerne neue
              Herausforderungen an, um meine Karriere als erfolgreicher
              Webentwickler in Halle voranzutreiben.
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
