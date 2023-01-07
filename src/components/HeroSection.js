import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="d-flex flex-column  heroSection">
      <Row className="d-inline">
        <Col className=" text-left">
          <h5 className="text-white bold normalText ">Hallo,mein Name ist</h5>
          <p className="primaryColor title bold">Eremiya Rifatooo</p>
          <h4 className="text-white bold biggerNormalText">Ich bin</h4>
          <p className="primaryColor bigTitle bold md-display-1">Webdesigner</p>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
