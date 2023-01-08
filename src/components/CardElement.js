import Placeholder from 'react-bootstrap/Placeholder';
import cafeImg from '../media/ProjektImg.png';
import horLine from '../media/LineHorizontal.png';
import '../styles/CardStyle.css';
import { Github } from 'react-bootstrap-icons';

function CardElement() {
  return (
    <div className="cardContainer">
      <div className="ImgContainer2">
        <img src={cafeImg} className="cardImg" />
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
      <Github size={25} className="githubLink" />
    </div>
  );
}

export default CardElement;
