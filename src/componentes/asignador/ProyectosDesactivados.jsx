import React, { useEffect, useContext } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { CardAsignacion } from './CardAsignacion';

import CEpointContext from '../../context/CEpointContext';
export const ProyectosDesactivados = (props) => {

    const {state, getProyectosDesactivados}=useContext(CEpointContext)
    



  useEffect( 
    ()=>{
   
          getProyectosDesactivados()
    
    },[])



    
  
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Proyectos desactivados
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          {state.asignacionesDD?state.asignacionesDD.map((da)=>(
       
       
       <CardAsignacion prop={da} />
   
        
        
        
        )):null}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  )
}
