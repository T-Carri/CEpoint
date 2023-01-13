import React, {useContext} from 'react'
import UiContext from '../../context/UiContext'
import AsignacionContext from '../../context/AsignacionContext'
import { Card, Button } from 'react-bootstrap'
import { FormActualizador } from './FormActualizador'


export const CardAsignacion = ({prop}) => {
    
    const {getProyecto, fetchChecadorAsignadoUser, setIdProyecto}=useContext(AsignacionContext)

    const{  show4, 
        setShow4, 
        handleClose4,  
        handleShow4  }= useContext(UiContext)

console.log(prop)

  return (
    <Card  className='proyecto' >
    <Card.Body>
    <h6><strong>Proyecto</strong></h6>
    <br/>
    <Card.Title>{prop.presupuesto}</Card.Title>
    <br/>
    <Card.Title><strong>{prop.obra}</strong></Card.Title>
    <br/>
    <Card.Title>Ubicacion: {prop.ubicacion}</Card.Title>
    <Card.Title> {prop.id}</Card.Title>
   
     <br />
     <br />
     <Button className='1a' variant='warning' size='md' onClick={()=>{
        handleShow4()

       
        fetchChecadorAsignadoUser(prop.residenteUid)
        getProyecto(prop.id)
        setIdProyecto(prop.id)




}} >Actualizar</Button>
  
     
    
    
    </Card.Body>
     
 <FormActualizador />
   
     </Card>
  )
}







