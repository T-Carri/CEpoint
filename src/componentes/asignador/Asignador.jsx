import React, {useState, useContext} from 'react'
import { Card, Container, Toast, Button,  Form, Badge } from 'react-bootstrap'
import './Asignador.css'



import { useEffect } from 'react';
import UiContext from '../../context/UiContext';

import AsignacionContext from '../../context/AsignacionContext';
import UsuariosContext from '../../context/UsuariosContext';
import { CardAsignacion } from './CardAsignacion';
import { FormCreadorUser } from './FormCreadorUser';
import {FormCreadorProyecto} from './FormCreadorProyecto'
 export const Asignador = () => {

const {idProyecto, 
  setIdProyecto, 
  asig, 
  setAsign, 
  getLinks, 
  
Proyecto, 
  }=useContext(AsignacionContext) 

  const { 
    fetchOnlyUser, 
    OnlyUser, 
    fetchName
  }=useContext(UsuariosContext)
    
  
  const { toggleShowFCP, toggleShowFCU}=useContext(UiContext)

  useEffect(()=>{
    getLinks()
    
  },[])
 


    return (
      <Container className="cardContenedora" style={{ width: '100em', height:'100%'}}>
   <Button variant='success' onClick={toggleShowFCU}>Crear Cuenta para checar en proyecto</Button>
   
   <Button onClick={toggleShowFCP} variant='success'>
         <strong>+</strong>  Agrega asignacion
       </Button>
   
    <Card.Body>
    <FormCreadorProyecto/>
    <FormCreadorUser/>
   
      

      <Card.Subtitle className="mb-2 text-muted">Organiza los proyectos</Card.Subtitle>
      <Card className='formUsuarios' style={{ display:'contents', width: '70em', height:'45em'}}>
      <Card.Title> <h4><strong>Actualiza o agrega proyectos</strong></h4></Card.Title>  
      <Card.Body>
        <Card className='content-users' style={{height: '40em'}}>
       <Card > 
       <div className='proyectos'  style={{width: '74.8em', height: '40em' }} > 
       
      
        {asig.map((da)=>(
       
       
      <CardAsignacion prop={da} />
  
       
       
       
       ))}
        
  
       
      
        
       </div>
        </Card>
         
       
       
      
       </Card>
              
      
     
                  
      </Card.Body>
      </Card>
    
   
          
    </Card.Body>
  </Container>
  

  )
}



