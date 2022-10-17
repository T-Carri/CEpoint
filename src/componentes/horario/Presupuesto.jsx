import React, {useState, useEffect} from 'react'
import {getFirestore, updateDoc, arrayUnion, doc, onSnapshot, setDoc, where, collection, query, getDocs, get} from 'firebase/firestore'
import { Card, Container, Toast, Button } from 'react-bootstrap'
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/firebase';
import './Horario.css'
export const Presupuesto = () => {
  const auth = getAuth()
  const dato =auth.currentUser; 
  const [Presupuestos, setPresupuesto] = useState([]);
  const [Asistencias, setAsistencias] = useState([]); 
   


const getPresupuestos =async () => {

  const q = query(collection(db, "asignaciones"),where("asistencias", "!=", [] ))
  await onSnapshot(q, (query)=>{
    const data=[]
    query.forEach((doc)=>{
      data.push(doc.data())
    })
    console.log("datossss", data)
    setPresupuesto(data)
  })
  
  
  }

//consulta para checador
   /*  const q = query(collection(db, "asignaciones"),where("asistencias", "!=", [] ))
 const getLinks = onSnapshot(q, (query)=>{
  const data=[]
  query.forEach((doc)=>{
    data.push(doc.data())
  })
  console.log("datossss", data)
  setAsign(data)
 }) */  


  useEffect(()=>{
    getPresupuestos();
    
  },[])
  
  return (
<Card>  

  <div className='presupuestos'>
    

    
  {
  Presupuestos.map((presupuesto)=>(
    <Button variant="danger" 
     classname={presupuesto.presupuesto}
   
      >{presupuesto.presupuesto}</Button>

))
}

    
    
    
      </div>

</Card>
  )
}




{/* <div key={presupuesto.presupuesto}>
  <Card id="botonPresupuestos">
   <h6>{presupuesto.presupuesto}</h6>
   </Card>

</div>
 */}

 /* 
  const getPresupuestos = async () =>{
  
    await onSnapshot(doc(db, "users", dato.uid), (e)=>{

     const asistencias = [];
     const presupuestos= []; 

     
      var y= e.data().checador.asignaciones;     
       y.forEach(element=>{
         presupuestos.push({...element})    
         console.log("asignaciones:", element)
      
      var z= element.registroAsistencia.where(element.registroAsistencia, "!==","empty");
        z.forEach(r=>{
          asistencias.push({...r})
          console.log("ASISTENCIAS PERRISIMO:", r)
        }) /* asistencias.push 
     })
setAsistencias(asistencias);
setPresupuesto(presupuestos);
  })
}
 */