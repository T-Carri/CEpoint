import React, {useState} from 'react'
import { Card, Container, Toast, Button, } from 'react-bootstrap'
import './Asignador.css'
import {getFirestore, collection, getDocs, doc, onSnapshot} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/firebase';
import { useEffect } from 'react';
import { FormAsignador } from './FormAsignador'
import {DateTime} from 'luxon';
export const Asignadorendiseño = () => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    const date = DateTime.now().weekNumber
  
    const auth = getAuth()
    const dato =auth.currentUser; 

    const [asig, setAsign]= useState([]);


    
const getLinks = async () => { await
  onSnapshot(doc(db, "users", dato.uid),(e)=>{
    const docs= [];
    console.log("curren data:", e.data().checador.asignaciones)
    var x=e.data().checador.asignaciones;
    x.forEach(element => {
          docs.push({...element})
      console.log("foreach:", element)
    });
    setAsign(docs);
    console.log("docs:", docs)
    });
    
  }

useEffect(()=>{
  getLinks()
},[])
console.log("asignaciones", asig)
 
/* 
const getLinks = async () => { doc(db, "users", dato.uid).onSnapshot( (querySnapshot)=>{
    const docs= [];
    querySnapshot.map((doc) => { 
      docs.push({...doc.data().checador.asignaciones});
    });
    setAsign(docs);  
  })
}
useEffect(()=>{
  getLinks()
},[])
 */
    //consulta en todos los docs
 /* const unsub = onSnapshot(doc(db, "users", dato.uid), (doc)=>{
   
        console.log("Current data: ", doc.data().checador);
 
} )  */

    return (
    
    <Container className="cardContenedora" style={{ width: '70em', height:'45em'}}>
    <Card.Body>
      <Card.Title>Asignador</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para asignar a residentes proyectos</Card.Subtitle>
    
    
     <div className="asignador" style={{display:'absolute'}} >

    <Card className='formAsignacion' style={{ display:'inline-block', width: '45em', height:'30em'}}>
   
    <Card.Body>
    <Button onClick={toggleShowA} className="mb-2">
          <strong>+</strong>  Agrega asignacion
        </Button>
        <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'29em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Asignador</strong>
            <small> #{date} semana</small>
          </Toast.Header>
          <Toast.Body>
           <FormAsignador/>
          </Toast.Body>
        </Toast>
    </Card.Body>
    </Card>

 <Card className='asignaciones' style={{position:'absolute', display:'inline-block', width: '15em', height:'30em'}}>
       <div>

 {asig.map((da, index)=>(

<div key={index}>
<Card id='asignacion'>
  <Card.Body>
  <h7> Presupuesto:<strong>{da.presupuesto}</strong></h7>
  <br/>
  <h7>Obra: 
    <strong> 
     {da.obra}
    </strong>
     </h7>
     <br/>
<h7>
  Residente: <strong>
    {da.residente}
  </strong>
</h7>

  </Card.Body>
</Card>

</div>

 )
            )}

       </div>

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  

  )
}

//TODO: HACER OBJETO QUE CONTENGA EL 