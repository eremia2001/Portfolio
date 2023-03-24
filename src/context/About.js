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
              Ich bin Eremiya Rifat, ein 22 jähriger Informatikstudent an der
              Martin-Luther-Universität. Ich habe mich neben dem Studium auf die
              professionelle Entwicklung von Websites spezialisiert und verfüge
              über fundierte Kenntnisse in verschiedenen Technologien wie JS
              JavaScript, HTML, CSS, ReactJS, NextJS sowie dem CSS-Framework
              Tailwind und Bootstrap. Diese Kenntnisse konnte ich bereits in
              eigenen Projekten erfolgreich anwenden, einige davon sind auch auf
              meiner Webseite zu finden. Ich suche nun nach einer Möglichkeit,
              meine erlernten Fähigkeiten in der Wirtschaft einzubringen und
              wertvolle Erfahrungen zu sammeln. Dabei bin ich motiviert,
              teamfähig und bringe eine große Lernbereitschaft mit. Wenn Sie auf
              der Suche nach einem engagierten und kompetenten Werkstudenten im
              Bereich der Webentwicklung sind, freue ich mich darauf, Sie
              kennenzulernen."
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
