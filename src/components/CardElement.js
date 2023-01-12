import Placeholder from 'react-bootstrap/Placeholder';
import cafeImg from '../media/ProjektImg.png';
import horLine from '../media/LineHorizontal.png';
import '../styles/CardStyle.css';
import { Github } from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';

function CardElement(props) {
  return (
    <div className="cardContainer">
      <div className="ImgContainer2">
        <img src={props.img} className="cardImg" />
      </div>
      <div className="cardNumber">
        <p>0{props.id}</p>
      </div>
      <div className="contentContainer">
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardInfo">{props.info}</p>
        <div>
          <h4 className="linkPage">
            <a href={props.link}>Besuche die Webseite </a>
          </h4>
          <img src={horLine} className="cardLine" />
        </div>
      </div>

      <div className="tagsContainer">
        <ul className="listContainer">
          <li>React</li>
          <li>JavaScript</li>
          <li>Styled Components</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default CardElement;

/*
<Github className="githubLink" />


*/
