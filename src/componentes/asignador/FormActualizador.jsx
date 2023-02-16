import React, {useContext, useEffect, useRef, useState}  from 'react'

import {  Button, Form, Row, Col,  Offcanvas, Badge } from 'react-bootstrap'

import CEpointContext from '../../context/CEpointContext'
import UiContext from '../../context/UiContext'

export const FormActualizador = () => {




 
 const{state, getUsuariosChecador, finderChecador, acUsChec }= useContext(CEpointContext)
 const{ show4, setShow4, handleClose4, handleShow4 }= useContext(UiContext)

 //console.log('proyecto a Actualizar: ', candidatoActualizar)
//console.log('proyecto a Actualizar: ', candidatoActualizar.ubicacion)

     //const residenteRef= useRef()
   /*   const ubicacionRef= useRef(candidatoActualizar.ubicacion)
     const presupuestoRef= useRef(candidatoActualizar.presupuesto)
     const obraRef =useRef(candidatoActualizar.obra) */




     // hooks que reducire proyecto

   
     
 /*   useEffect( 
        ()=>{
           
          finderChecador(  state.UsuariosDisponiblesChecador)
        }
          ,[ state.UsuariosDisponiblesChecador])  */
  
     
          

   const [values, setValues] = useState('')
   const [Residente, setResidente] = useState('')
 
   //TODO: HANDLE
  
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value})
  
  
 }  

//you have residente:, ubicacion:, presupuesto, obra

/* console.log('RESIDENTE UID', values.residenteUid)
  console.log('PROYECTO', idProyecto)
  console.log('OnlyUser.UID:  ',OnlyUser.UID) */


  return (


    <Offcanvas show={show4} onHide={handleClose4} placement='end' responsive="lg">
      
      
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>Informacion de proyecto:{' '}  {state.Proyecto?state.Proyecto.obra:null}  </Offcanvas.Title>

    </Offcanvas.Header>
    <Offcanvas.Body> 
      <strong>Este Proyecto tiene asignado el checador en la sesion de: {'   '} </strong>
   <br/>
   <h3>

   <Badge bg='secondary'>                                
   {state.ChecadorAsignadouser?state.ChecadorAsignadouser.nombre:null}  
   </Badge>
   
   </h3>





   


      
       
      </Offcanvas.Body>
   </Offcanvas>
 


)
}
































































   
 
