import SideMenu from '../components/SideMenu';
import '../styles/Price.css';
import reactLogo from '../media/reactLogo.png';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="page Contact" id="contact">
      <SideMenu page="contact" />
      <div className="contactContainer">
        <h1 className="title primaryColor">Kontakt</h1>
        <h4 className="text-white">so könnt ihr mich erreichen</h4>
      </div>
      <img src={reactLogo} className=" reactLogo" />
    </div>
  );
}

export default Contact;
