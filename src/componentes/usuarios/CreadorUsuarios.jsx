import React, {useState} from 'react'
import { Card, Container, Toast, Button, } from 'react-bootstrap'
import {getFirestore, updateDoc, arrayUnion, doc, onSnapshot, addDoc ,setDoc, collection, getDoc, query, where} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'; 
import './Usuarios.css'
import { db } from '../../firebase/firebase';
import { useEffect } from 'react';
import { FormCreadorUser } from './FormCreadorUser'; 


export const CreadorUsuarios = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
   

/* //TODO: AGREGAR A COLECCION "asignaciones", una asignacion
//con id automatico
//it's ready
const addOrEdit = async (addOrEdit) => {
  const databaseRef=await  addDoc(collection(db, "asignaciones"), addOrEdit);
  }
 */  


  return (
     
    <Container className="cardContenedora" style={{ width: '70em', height:'45em'}}>
    <Card.Body>
      <Card.Title>Gestion de usuarios</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para controlar usuarios</Card.Subtitle>
    
    
     <div className="usuarios" style={{display:'absolute'}} >

    <Card className='formUsuarios' style={{ display:'inline-block', width: '45em', height:'30em'}}>
   
    <Card.Body>




    <Button variant='success' onClick={toggleShowA} className="mb-2">
          <strong>+</strong>  Crear usuario
        </Button>
        <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'29em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Creando usuario</strong>
            <small> # semana</small>
          </Toast.Header>
          <Toast.Body>
           <FormCreadorUser />
          </Toast.Body>
        </Toast>
    <Button>
      Ver usuarios
        </Button>
    </Card.Body>
    </Card>

 <Card className='asignaciones' style={{position:'absolute', display:'inline-block', width: '15em', height:'30em' }}>
       <div>

 {/* {asig.map((da)=>(

<div key={da.obra} >
<Card id='a1' >
  <Card.Body>
  <h6> Presupuesto:<strong>{da.presupuesto}</strong></h6>
  <br/>
  <h6>Obra: 
    <strong> 
     {da.obra}
    </strong>
     </h6>
     <br/>
<h6>
  Residente: <strong>
    {da.residente}
  </strong>
</h6>

<br/>
<Button className='1a' variant='secondary' size='md'  >Asignar adicional</Button>
  </Card.Body>
</Card>

</div>

 )
            )} */}

       </div>

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  
  )
}




