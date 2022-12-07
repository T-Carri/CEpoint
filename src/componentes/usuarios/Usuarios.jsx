import React, {useState} from 'react'
import { Card, Container, Toast, Button, Modal, Offcanvas, Row, Col, Form } from 'react-bootstrap'
import { FormCreadorUser } from './FormCreadorUser'; 
import './Usuarios.css'
import {useNavigate, Outlet} from 'react-router-dom'
import {options,  optionsEmpresas, searchArea} from './options'


export const Usuarios = () => {
 

    const navigate = useNavigate(); 
 

    const [showA, setShowA] = useState(false);
    const toggleShowA   = () => setShowA(!showA);


  return (
     
    <Container className="cardContenedora" style={{ width: '100em', height:'100%'}}>
    <Card.Body>
      <Card.Title>Gestion de usuarios</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para controlar usuarios</Card.Subtitle>
    
      <Button variant='dark' onClick={()=>{navigate("todos")}} className="mb-2">
          Todos los usuarios
        </Button> {''}
        <Button variant='dark' /* onClick={toggleShowA}  */className="mb-2" >
          Ocupados
        </Button> {''}
        <Button variant='dark' /* onClick={toggleShowA}  */className="mb-2" onClick={()=>{navigate("inactivos")}}>
          inactivos
        </Button> {''}
        <Button variant='dark' onClick={toggleShowA} className="mb-2">
          <strong>+</strong>  Crear usuario
        </Button>   
        <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'40em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Creando usuario</strong>
            <small> # semana</small>
          </Toast.Header>
          <Toast.Body>
           <FormCreadorUser />
          </Toast.Body>
        </Toast>  
        <Outlet/>
        <div className="usuarios" style={{display:'absolute'}} >


 
</div>
   
          
    </Card.Body>
  </Container>
  
  )
}

