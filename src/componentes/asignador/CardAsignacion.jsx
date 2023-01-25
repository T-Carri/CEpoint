import React, {useContext} from 'react'
import UiContext from '../../context/UiContext'
import { Card, Button } from 'react-bootstrap'
import { FormActualizador } from './FormActualizador'
import { TYPES } from '../../redux/Types'
import CEpointContext from '../../context/CEpointContext'
export const CardAsignacion = ({prop}) => {


    
   
    const {dispatch, state, getProyecto, fetchChecadorAsignadoUser} = useContext(CEpointContext)
    const{handleShow4} = useContext(UiContext)

console.log(prop)


const handleClick= () =>{
  handleShow4()
  fetchChecadorAsignadoUser(prop.residenteUid)
  getProyecto(state.IdProyectoDetail)
  }
  




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
       dispatch({types:TYPES.ID_PROYECTO, payload:prop.id})
       handleClick()
       
       }} >Actualizar</Button>
         
            <Button variant='danger'>Desactiva</Button>
           
       
           
           </Card.Body>
            
        <FormActualizador /> 
          
            </Card>
         )
       }

       
    
       






