import React, {useState, useContext} from 'react'
import { Card, Container, Toast, Button, } from 'react-bootstrap'
import './Asignador.css'
import {getFirestore, updateDoc, arrayUnion, doc, onSnapshot, addDoc ,setDoc, collection, getDoc, query, where} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/firebase';
import { useEffect } from 'react';
import { FormAsignador } from './FormAsignador'
import {DateTime} from 'luxon';
import AsignacionContext from '../../context/AsignacionContext';
import { FormActualizador } from './FormActualizador';
 export const Asignadorendiseño = () => {
    const [showA, setShowA] = useState(false);
const {idProyecto, setIdProyecto, asig, setAsign, getLinks, getProyecto }=useContext(AsignacionContext) 

    const toggleShowA = () =>{
      setShowA(!showA);
      setShowB(false);
    } 
    const [showB, setShowB] = useState(false);
    
    const toggleShowB = () =>{
      setShowB(!showB);
      setShowA(false);
    } 
    const date = DateTime.now().weekNumber
    const auth = getAuth()
    const dato =auth.currentUser; 
    
  

//TODO: HACER FUNCION DE ELIMINACION DE DATOS EN CAMPOS Y LOANDING PARA CUANDO ENVIAS LOS DATOS



console.log('SHOW A: ', showA, 'SHOW B:  ', showB)

useEffect(()=>{
  getLinks()
  
},[])

 useEffect(()=>{
  console.log('id: ', 
  idProyecto)
},[idProyecto])
 

const addOrEdit = async (addOrEdit) => {
  const databaseRef=await  addDoc(collection(db, "asignaciones"), addOrEdit);
}


 
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
      
     {/*toast de asignacion */} 
      
        <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'29em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Asignador</strong>
            <small> #{date} semana</small>
          </Toast.Header>
          <Toast.Body>
           <FormAsignador addOrEdit={addOrEdit}/>
          </Toast.Body>
        </Toast>
      
      {/* toast de para actalizar proyecto */}    

        <Toast show={showB} onClose={toggleShowB} style={{width:'50em', height:'29em'}}>
          <Toast.Header>
           
            <strong className="me-auto">  Actualizando proyecto  </strong>
            <small> {idProyecto.toString()} </small>
          </Toast.Header>
          <Toast.Body>
           {/*here you´re going to put the function that returns,  the data of that document selected
           in a form with value of the current data, so you can change it or delete */} 

                <FormActualizador/>
          </Toast.Body>
        </Toast>


        

    </Card.Body>
    </Card>

 <Card className='asignaciones' style={{position:'absolute', display:'inline-block', width: '15em', height:'30em' }}>
       <div>


   
  {asig.map((da)=>(

<div key={da.id} >
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
  Ubicacion: <strong>
    {da.ubicacion}
  </strong>
</h6>

<br/>
<Button className='1a' variant='secondary' size='md' onClick={()=>{
setIdProyecto(da.id)
getProyecto(da.id)
toggleShowB()



}} >Actualizar</Button>
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