import React, {useContext} from 'react'
import UiContext from '../../context/UiContext'
import { Card, Button } from 'react-bootstrap'
import { FormActualizador } from './FormActualizador'
import { TYPES } from '../../redux/Types'
import CEpointContext from '../../context/CEpointContext'
const CardAsignacion = ({prop}) => {


    
   
    const {
      getProyecto, 
      fetchChecadorAsignadoUser, 
      activateProyecto, 
      desactivarProyecto
    } = useContext(CEpointContext)
    const{handleShow4} = useContext(UiContext)



const handleActivador=()=>{
  if(prop.activa){
    desactivarProyecto(prop.id)
  }else{
    activateProyecto(prop.id)
  }
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
       handleShow4()
        getProyecto(prop.id)
        fetchChecadorAsignadoUser(prop.residenteUid)
        
        }} >Actualizar</Button>
          
             <Button variant={prop.activa?'danger':'success'}
             onClick={handleActivador}>{prop.activa?"Desactiva":"Activa"}</Button>
            
        
            
            </Card.Body>
             
         <FormActualizador /> 
           
             </Card>
          )
        }
 
        export default React.memo(CardAsignacion)  
     
        
      
        
        
       
       
    
      






