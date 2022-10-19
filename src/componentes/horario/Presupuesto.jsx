import React, {useState, useEffect} from 'react'
import {getFirestore, updateDoc, arrayUnion, doc, onSnapshot, setDoc, where, collection, query, getDocs, get} from 'firebase/firestore'
import { Card, Container, Toast, Button, Accordion } from 'react-bootstrap'
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/firebase';
import './Horario.css'
import { async } from '@firebase/util';
import { RenderHoras } from './RenderHoras';
export const Presupuesto = () => {
  const auth = getAuth()
  const dato =auth.currentUser; 
  const [Presupuestos, setPresupuesto] = useState([]);
  const [Asistencias, setAsistencias] = useState([]); 
  const [value, setValue] = useState();
   
  const getPresupuestos =async () => {

    const q = query(collection(db, "asignaciones"),where("asistencias", "!=", [] ))
    await onSnapshot(q, (query)=>{
      const data=[]
      query.forEach((doc)=>{
        data.push(doc.data())
      })
  
      setPresupuesto(data)
    }) }
  
    useEffect(()=>{
      getPresupuestos()
      
     
    },[])


  

    
    return (
  <Card>  
  
    <div className='presupuestos'>
    {
    Presupuestos.map((presupuesto)=>(
      <Button variant="danger" 
           id={presupuesto.obra}
       className={presupuesto.obra}
       value={presupuesto.presupuesto}
       onClick={
    (e)=>{
      console.log("objeto completo:", presupuesto.asistencias)
      setAsistencias(presupuesto.asistencias)
      console.log("asistencias:", Asistencias)       
    }} > {presupuesto.presupuesto} </Button>))
    }
  </div>
  <div>
  <Card id="prueba" className='lg'>
{Asistencias.map((e)=>(
         console.log("desde mapeo asistencias", e),
         <Button variant="success">Semana #{e.semana}</Button>
         ))}
   
  </Card>
  
  </div>
  
  </Card>
   )
  }
   
   



   













 /* presupuesto.asistencias.map((e)=>( 
    console.log(e.semana),
    console.log(e.trabajador),
     dat.push()     
 document.getElementById("prueba").innerHTML=  "<Button variant='success' >"+ e.semana +"</Button>"
      

  ))


*/




  
    
/* const getSemanas = async (asistencias, presupuesto) => {
  asistencias.forEach(()=>{
    return(
    console.log(presupuesto, ":",asistencias),
    setAsistencias({...asistencias}),
    console.log("hook:",Asistencias)
    
    

    )

  } )

}





 function semanas() {
Asistencias.forEach((e)=>{
<h1>{e.trabajador}</h1>

}) } */



  