import Toast from 'react-bootstrap/Toast';
import '../styles/popUpStyle.css';
import partyEmoji from '../media/partyEmoji.png';
import { useEffect, useState } from 'react';

function PopUp(props) {
  return (
    <div position="top-end" className="popUpContainer">
      <Toast onClose={props.close} show={props.showPop} delay={3000} autohide>
        <Toast.Header>
          <p className="emoji m-0 me-2">🎉</p>
          <strong className="me-auto">Glückwunsch !</strong>
        </Toast.Header>
        <Toast.Body>deine Nachricht wurde erfolgreich verschickt ! </Toast.Body>
      </Toast>
    </div>
  );
}

export default PopUp;
