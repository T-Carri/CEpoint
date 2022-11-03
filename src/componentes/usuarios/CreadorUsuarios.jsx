import React, {useState, useContext} from 'react'
import { Card, Container, Toast, Button, } from 'react-bootstrap'
import {getFirestore, updateDoc, arrayUnion, doc, onSnapshot, addDoc ,setDoc, collection, getDoc, query, where} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'; 
import './Usuarios.css'
import { db } from '../../firebase/firebase';
import { useEffect } from 'react';
import { FormCreadorUser } from './FormCreadorUser'; 
import UsuariosContext from '../../context/UsuariosContext';


export const CreadorUsuarios = () => {
  const {Usuarios, getUsuarios, getUsersUnable, Userun, setActualizador, activateUser}=useContext(UsuariosContext)
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

   


console.log('so?:', Userun)

useEffect(()=>{
  getUsersUnable()
  //getUsuarios()
},[])
  







  return (
     
    <Container className="cardContenedora" style={{ width: '100em', height:'60em'}}>
    <Card.Body>
      <Card.Title>Gestion de usuarios</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para controlar usuarios</Card.Subtitle>
    
    
     <div className="usuarios" style={{display:'absolute'}} >

    <Card className='formUsuarios' style={{ display:'inline-block', width: '70em', height:'45em'}}>
   
    <Card.Body>



    
        <Button variant='success' onClick={toggleShowA} className="mb-2">
          <strong>+</strong>  Crear usuario
        </Button>   <br />
        <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'40em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Creando usuario</strong>
            <small> # semana</small>
          </Toast.Header>
          <Toast.Body>
           <FormCreadorUser />
          </Toast.Body>
        </Toast>
      
    <div className='content-users'>
                
                
      <h1>renderizar los usuarios por tipo</h1>

    </div>




    </Card.Body>
    </Card>

 <Card className='inactivos' style={{position:'absolute', display:'inline-block', width: '15em', height:'45em' }}>
       
 {
  Userun.map((e)=>
  (
<div  >
<Card id='cuentaInactiva' >
  <Card.Body>
  <h6> Trabajador:<strong>{e.nombre}</strong></h6>
  <br/>
  <h6>Email: 
    <strong> 
     {e.email}
    </strong>
     </h6>
     <br/>
     <h6>Email: 
    <strong> 
     {e.UID}
    </strong>
     </h6>
     <br/>

<h6>
  Empresa: <strong>
    {e.empresa}
  </strong>
</h6>

<br/>
<Button className='UPDATE' variant='secondary' size='md' onClick={async()=>{
try {
  setActualizador(e.UID)
    activateUser()
} catch (error) {
  console.log(error)
}
  
}} >Activar</Button>
  </Card.Body>
</Card>

</div>)
  )
}
 
       

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  
  )
}




