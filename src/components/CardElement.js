import Placeholder from 'react-bootstrap/Placeholder';
import cafeImg from '../media/ProjektImg.png';
import horLine from '../media/LineHorizontal.png';
import '../styles/CardStyle.css';
import { Github } from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';

function CardElement() {
  return (
    <div className="cardContainer">
      <div className="ImgContainer2">
        <img
          src="https://picsum.photos/200
"
          className="cardImg"
        />
      </div>
      <div className="cardNumber">
        <p>02</p>
      </div>
      <div className="contentContainer">
        <h2 className="cardTitle">Reileins</h2>
        <p className="cardInfo">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At
        </p>
        <div>
          <h4 className="linkPage">
            <a href="#home">Besuche die Webseite </a>
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
