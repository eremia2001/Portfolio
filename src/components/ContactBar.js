import horLine from '../media/LineHorizontal.png';
import { Github, Instagram, EnvelopeAtFill } from 'react-bootstrap-icons';
import '../styles/contactBar.css';
function ContactBar() {
  return (
    <div className="socialMediaContainer">
      <div className="socialIconContainer">
        <Github size={45} color="#B2BEC3" />
        <Instagram size={45} color="#B2BEC3" />
        <EnvelopeAtFill size={45} color="#B2BEC3" />
      </div>
      <img src={horLine} className="horLine" />
    </div>
  );
}

export default ContactBar;
