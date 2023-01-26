import React, {useEffect, useContext} from 'react'
import './Horario.css'
import {Row, Form, Col, Button, Spinner, Table, Card, Container } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import CEpointContext from '../../context/CEpointContext';
export const Horario = () => {

const navigate = useNavigate(); 


const {getProyectos} =useContext(CEpointContext)
useEffect(()=>{
  getProyectos()
  
},[]) 

  return (
    <Container className="cardContenedora" style={{ width: '60em', height:'30em'}}>
    <Card.Body>
      <Card.Title>Registros de asistencia</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Consulta las asistencias segun el criterio de busqueda </Card.Subtitle>
    
        
     <div className="horario" >

      
  <Button variant="warning" className='semana' onClick={()=>{navigate("semana")}}>Semana</Button>
  <Button variant="warning" className='ubicacion'onClick={()=>{navigate("ubicacion")}}> Ubicacion</Button>
  <Button variant="warning" className='obra' onClick={()=>{navigate("obra")}}> Obra</Button>
  <Button variant="warning" className='trabajador' onClick={()=>{navigate("trabajador")}}> Trabajador </Button>

  <Button variant="success" className='total' onClick={()=>{navigate("presupuesto")}} > Generar reporte</Button>
    <div className='datosHorario'>
    <Outlet/>
    </div> 
      
      

     </div>
      
    </Card.Body>
  </Container>
  

  )
}

