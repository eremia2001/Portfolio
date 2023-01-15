import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import '../styles/homeContainer.css';
import {
  CodeSquare,
  Github,
  GeoAltFill,
  EnvelopeFill,
  Instagram,
  TelephoneFill,
} from 'react-bootstrap-icons/dist';
import '../styles/footer.css';
import { Container, Row, Col } from 'react-bootstrap/';
function FooterTop() {
  return (
    <div className="footer" id="footer">
      <div className="footerLinksContainer">
        <div className="footerLinks">
          <GeoAltFill className="footerIcon" size={25} />
          <p>Halle (Salle)</p>
        </div>
        <div className="footerLinks">
          <Github className="footerIcon" size={25} />
          <p>
            <a href="https://github.com/eremia2001">github.com/eremia2001</a>
          </p>
        </div>
        <div className="footerLinks">
          <EnvelopeFill className="footerIcon" size={25} />
          <p>eremia2021@gmail.com</p>
        </div>
        <div className="footerLinks">
          <Instagram className="footerIcon" size={25} />
          <p>@rifat.dev</p>
        </div>
        <div className="footerLinks">
          <TelephoneFill className="footerIcon" size={25} />
          <p>0176/24744598</p>
        </div>
      </div>
    </div>
  );
}
export default FooterTop;

/*

.footer
{
    height: 10vh;
    background-color: #242728;
    position: sticky;
    top: 0;
    color: white;
    display: flex;
    flex-direction: column;
}
.footerBottom
{
    height: 5vh;
    background-color:#161515 ;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    color: #83888a;
    font-size: 0.8vw;
}
.footerBottom a
{
    color: inherit;
    padding: 0;
    text-decoration: none;
}
.footerLinks
{
    display: flex;
    align-items: center;
    padding: 0.5vw 0.7vw;
    font-size: 1.2em;
    gap: 0.3em;
    font-family: Roboto Mono;
    font-weight: 400;
}

.footerLinks p 
{
    margin: 0;
}

.footerLinksContainer
{
    display: flex;
    justify-content: space-around;
    padding-top: 1vw;
}

*/
