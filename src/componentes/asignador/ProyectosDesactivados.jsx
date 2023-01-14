import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { CardAsignacion } from './CardAsignacion';
export const ProyectosDesactivados = (props) => {

  
  
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Proyectos desactivados
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          {props.datos.map((da)=>(
       
       
       <CardAsignacion prop={da} />
   
        
        
        
        ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  )
}
