import React, { useEffect, useReducer } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { CardAsignacion } from './CardAsignacion';
import { db } from '../../firebase/firebase';
import { query, collection, onSnapshot,  where  } from 'firebase/firestore';
import { GlobalState, TYPES } from '../../redux/GlobalState';
export const ProyectosDesactivados = (props) => {

    const [state, dispatch] = useReducer(GlobalState,  {asignacionesDD: ''});



  useEffect( 
    ()=>{
        const getProyectosDesactivados =async()=>{
            const q = query(collection(db, "asignaciones"), where("activa","==", false))
            await onSnapshot(q, (query)=>{
             const data=[]
             query.forEach((doc)=>{
               data.push({...doc.data(), id:doc.id})
               console.log('ids: ', doc.id)
             })
             //console.log("datossss", data)
             //setAsigndesactivados(data)
             dispatch({type:TYPES.CALL_PROYECTOS_DESACTIVADOS, data: data })
            })
            
          } 
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
