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
   

//agregar usuarios sin activar 
const [Userun, setUserun]=useState([])
const getUsersUnable = async()=>{
  const UU = query(collection(db, "users"),where("activo","==", false))
  await  onSnapshot(UU, (Q)=>{
    const dato=[]

    Q.forEach((element) => {

      dato.push(element.data())
      
    });

    setUserun(dato)
  })



}

console.log('so?:', Userun)
//const {UidUser}= FormCreadorUser()
//console.log('UID IN CREATOR USER:', UidUser)
useEffect(()=>{
  getUsersUnable()
  
},[])
  

//objetivo hacer que con boton 





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

    <Button variant='warning'>
      Ver usuarios
        </Button>
   
   
    </Card.Body>
    </Card>

 <Card className='asignaciones' style={{position:'absolute', display:'inline-block', width: '15em', height:'30em' }}>
       <div>
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
<h6>
  Empresa: <strong>
    {e.empresa}
  </strong>
</h6>

<br/>
<Button className='UPDATE' variant='secondary' size='md'  >Activar</Button>
  </Card.Body>
</Card>

</div>)
  )
}
 
       </div>

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  
  )
}




