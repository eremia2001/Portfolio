import SideMenu from '../components/SideMenu';
import '../styles/Price.css';
import reactLogo from '../media/reactLogo.png';
import '../styles/Contact.css';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import PopUp from '../components/PopUp';

function Contact() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailSend, setEmailSend] = useState(false);

  function handleClick(e) {
    const serviceId = 'service_lehow4p';
    const templateId = 'template_gmnou0h';
    const userId = '1YLlzwIiVK5K-aoaF';

    emailjs
      .send(serviceId, templateId, userData, userId)
      .then((response) => setEmailSend(true))
      .then((error) => console.log(error));

    setUserData({ name: '', email: '', message: '' });
  }

  function handleChange(e) {
    setUserData(() => {
      return {
        ...userData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="page Contact" id="contact">
      <SideMenu page="contact" />
      <div className="contactContainer">
        <div className="contactTitle">
          <h1 className="title primaryColor title2">Kontakt</h1>
          <h4 className="text-white biggerNormalText">
            so könnt ihr mich erreichen
          </h4>
        </div>
        <PopUp
          className="popUp"
          showPop={emailSend}
          close={() => setEmailSend(false)}
        />
        <Form className="formContainer">
          <Form.Group
            className="mb-3 formControl"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formText">Name</Form.Label>
            <Form.Control
              className="formField "
              type="email"
              placeholder="Max Mustermann"
              onChange={handleChange}
              name="name"
              value={userData.name}
            />
          </Form.Group>

          <Form.Group
            className="mb-3  formControl"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="formText">Email</Form.Label>
            <Form.Control
              className="formField "
              type="email"
              placeholder="maxmustermann@beispiel.com"
              onChange={handleChange}
              name="email"
              value={userData.email}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 formControl"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="formText">Nachricht</Form.Label>
            <Form.Control
              className="formField formMessage"
              as="textarea"
              rows={3}
              onChange={handleChange}
              name="message"
              value={userData.message}
            />
          </Form.Group>
          <Button className=" mt-3 w-100 button" onClick={handleClick}>
            Senden
          </Button>
        </Form>
      </div>
      <img src={reactLogo} className=" reactLogo reactLogo2" />
    </div>
  );
}

export default Contact;
