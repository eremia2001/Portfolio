import horLine from '../media/LineHorizontal.png';
import { Github, Instagram, EnvelopeAtFill } from 'react-bootstrap-icons';
import '../styles/contactBar.css';
function ContactBar() {
  return (
    <div className="socialMediaContainer" id="socialMediaBar">
      <div className="socialIconContainer">
        <a href="https://github.com/eremia2001">
          <Github size={45} color="#B2BEC3" />
        </a>
        <a href="#contact">
          <EnvelopeAtFill size={45} color="#B2BEC3" />
        </a>
      </div>
      <img src={horLine} className="horLine" />
    </div>
  );
}

export default ContactBar;
