import React, {useEffect, useContext} from 'react'
//import './Horario.css'
import {Row, Form, Col, Button, Spinner, Table, Card } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import CEpointContext from '../../context/CEpointContext';
import Container  from "@mui/system/Container";



export const Horario = () => {

const navigate = useNavigate(); 






  return (
    <Container  /* style={{ width: '60em', height:'30em'}} */ fixed>
    <Card.Body>
      <Card.Title>Registros de asistencia</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Consulta las asistencias segun el criterio de busqueda </Card.Subtitle>
    
        
     <Container fixed>

      
  <Button variant="warning" className='semana' onClick={()=>{navigate("semana")}}>Semana</Button>
  <Button variant="warning" className='ubicacion'onClick={()=>{navigate("ubicacion")}}> Ubicacion</Button>
  <Button variant="warning" className='obra' onClick={()=>{navigate("obra")}}> Obra</Button>
  <Button variant="warning" className='trabajador' onClick={()=>{navigate("trabajador")}}> Trabajador </Button>

  <Button variant="success" className='total' onClick={()=>{
    
    navigate("generadorreporte")
    
    }} > Generar reporte</Button>
    <div className='datosHorario'>
    <Outlet/>
    </div> 
      
      

     </Container>
      
    </Card.Body>
  </Container>
  

  )
}

