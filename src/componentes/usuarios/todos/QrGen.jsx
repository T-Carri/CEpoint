import React,{useContext, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

import UiContext from '../../../context/UiContext';
 

 
 
export const QrGen = ({ show ,onHide, trabajador, QRurl}) => {
    return (
      <Modal
      show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {trabajador}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Descargar codigo QR</h4>
          <img  src={ QRurl }
         />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }