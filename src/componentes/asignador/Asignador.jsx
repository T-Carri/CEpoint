import React, {useState, useContext} from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import './Asignador.css'
import { useEffect } from 'react';
import UiContext from '../../context/UiContext';

import { CardAsignacion } from './CardAsignacion';
import { FormCreadorUser } from './FormCreadorUser';
import {FormCreadorProyecto} from './FormCreadorProyecto'
import  {ProyectosDesactivados} from './ProyectosDesactivados'

import  CEpointContext  from '../../context/CEpointContext';

 const Asignador = () => {

const {
      getLinks, 
     
      state
     }=useContext(CEpointContext) 

 
  const [modalShow, setModalShow] = useState(false);
    
  
  const { toggleShowFCP, toggleShowFCU}=useContext(UiContext)






  
useEffect(()=>{
  async function fetchData() {
    await getLinks();
  }
  fetchData();
  
}, [])


 
 console.log("datossss", state?state:null)

    return (
      <Container className="cardContenedora" style={{ width: '100em', height:'100%'}}>
        <Button variant='primary' onClick={() => {
          setModalShow(true)
        }}> Proyectos desactivados</Button>
   <Button variant='success' onClick={toggleShowFCU}> <strong>+</strong> Crear Cuenta para checar en proyecto</Button>
   
   <Button onClick={toggleShowFCP} variant='success'>
         <strong>+</strong>  Agrega asignacion
       </Button>
   

    <Card.Body>
   {/*  <ProyectosDesactivados show={modalShow} onHide={() => setModalShow(false)}  /> */}
  {/*   <FormCreadorProyecto/> */}
 {/*    <FormCreadorUser/> */}
   
      

      <Card.Subtitle className="mb-2 text-muted">Organiza los proyectos</Card.Subtitle>
      <Card className='formUsuarios' style={{ display:'contents', width: '70em', height:'45em'}}>
      <Card.Title> <h4><strong>Actualiza o agrega proyectos</strong></h4></Card.Title>  
      <Card.Body>
        <Card className='content-users' style={{height: '40em'}}>
       <Card > 
       <div className='proyectos'  style={{width: '74.8em', height: '40em' }} > 
       
    
       {state.asignacionesActivasDetails&&state.asignacionesActivasDetails.map((da)=>(
       
       
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


export default React.memo(Asignador);
