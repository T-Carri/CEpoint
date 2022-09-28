import React, {useState} from 'react'
import { Card, Container, Toast, Button} from 'react-bootstrap'
import './Asignador.css'
export const Asignadorendiseño = () => {
  
  const [show, setShow] = useState(false);
  
  return (
    
    <Container className="cardContenedora" style={{ width: '70em', height:'45em'}}>
    <Card.Body>
      <Card.Title>Asignador</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para asignar a residentes proyectos</Card.Subtitle>
    
    
     <div className="asignador" >

    <Card className='formAsignacion' style={{ display:'inline-block', width: '45em', height:'30em'}}>
   
    
    </Card>

 <Card className='asignaciones' style={{display:'inline-block', width: '15em', height:'30em'}}>

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  

  )
}

//TODO: crear area de creacion de asignacion y asignaciones 

//-Al crear form{obra, ubicacion, residente, no. semana por itineracion automatico}
//{}