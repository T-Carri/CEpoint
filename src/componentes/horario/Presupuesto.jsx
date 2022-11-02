import React, {useState, useEffect} from 'react'
import { onSnapshot,  where, collection, query} from 'firebase/firestore'
import { Card, Button, Accordion, Table} from 'react-bootstrap'
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/firebase';
import './Horario.css'

export const Presupuesto = () => {
  const auth = getAuth()
  const dato =auth.currentUser; 
  const [Presupuestos, setPresupuesto] = useState([]);
  const [Asistencias, setAsistencias] = useState([]); 
  const [itinerante, setItinerante] = useState([])
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
      
     

  
console.log("hook: ", Asistencias);

const AsistenciasPresupuesto = (props) => {

 
      
    return props.reduce((past, current)=>{
      const foundItem =  past.find(it => it.semana === current.semana)
      console.log('past:', past);
     const r= []
     r.push(past);
     setItinerante(r)
     console.log('r:', r);
      if (foundItem ){
   foundItem.data=foundItem.data
   ?[...foundItem.data, {'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date}]
   :[{ 'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date   }]
}else{ past.push( {
  'semana': current.semana,
  'data': [{
    'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date
  }]
} ) }  

 
return past;

    }, [])}

   
    
     
     console.log('itinerante:', itinerante);
   
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
             //e.preventDefault()
             console.log("objeto completo:", presupuesto.asistencias)
             setAsistencias(presupuesto.asistencias)
             AsistenciasPresupuesto(Asistencias)
             console.log("asistencias:", Asistencias)       
      
    }}> {presupuesto.presupuesto} </Button>))
    }
  </div>
  




        <div>
           <Card id="prueba" className='lg'>
      
           {
itinerante.map((e=> (
 
 e.map((r)=>(
console.log('desde mapa:', r.data),
<Accordion>
<Accordion.Item eventKey={r.semana}>
  <Accordion.Header>{r.semana}</Accordion.Header>
  <Accordion.Body>

  <Table striped bordered hover>
      <thead>
        <tr>
        <th>Trabajador</th>
             <th>Asistencia</th>
             <th>Tiempo</th>
        </tr>
      </thead>
      <tbody>
      {
  r.data.map((s)=>( 
    console.log('mapa s:', s),
    
    <tr>
         <td>{s.trabajador}</td>
          <td>{s.tipoAsistencia}</td>
          <td>{s.date}</td>
     </tr>
      

   
    

  ))
} 
</tbody>
     
    </Table>




  </Accordion.Body>
</Accordion.Item>
</Accordion>

))
 
)))

      }
  
            </Card>
         </div>
  </Card>
   )
  }
   
    


   



{/* 

  <div className='presupuestos'>
   {{ {
    Presupuestos.map((presupuesto)=>(
      <Button variant="danger" 
           id={presupuesto.obra}
       className={presupuesto.obra}
       value={presupuesto.presupuesto}
       onClick={
    (e)=>{
      //e.preventDefault()
      
      console.log("objeto completo:", presupuesto.asistencias)
      setAsistencias(presupuesto.asistencias)
      AsistenciasPresupuesto(Asistencias)
      console.log("asistencias:", Asistencias)       
    }} > {presupuesto.presupuesto} </Button>))
    }
  </div>

segmentoo

itinerante.map((e=> (
 
 e.map((r)=>(
console.log('desde mapa:', r.data)
<Accordion>
<Accordion.Item eventKey={r.semana}>
  <Accordion.Header>{r.semana}</Accordion.Header>
  <Accordion.Body>

  <Table striped bordered hover>
      <thead>
        <tr>
          <th>Trabajador</th>
          <th>Asistencia</th>
          <th>Tiempo</th>
        
        </tr>
      </thead>
      <tbody>
      {
  r.data.map((s)=>( 
    console.log('mapa s:', s)
    
    <tr>
       <td>{s.trabajador}</td>
       <td>{s.tipoAsistencia}</td>
       <td>{s.date}</td>
       
     </tr>
      

   
    

  ))
} 
</tbody>
     
    </Table>




  </Accordion.Body>
</Accordion.Item>
</Accordion>

))
 
)))

       }
  </Card>
  
  </div> 









{
  itinerante.map((e=> (
 
    e.map((r)=>(
   console.log('desde mapa:', r.data)
   <Accordion>
   <Accordion.Item eventKey={r.semana}>
     <Accordion.Header>{r.semana}</Accordion.Header>
     <Accordion.Body>
   
     <Table striped bordered hover>
     <thead>
           <tr>
             <th>Trabajador</th>
             <th>Asistencia</th>
             <th>Tiempo</th>
           
           </tr>
         </thead>
         <tbody>
         {
     r.data.map((s)=>( 
       console.log('mapa s:', s)
       <tr>
          <td>{s.trabajador}</td>
          <td>{s.tipoAsistencia}</td>
          <td>{s.date}</td>
       </tr>
       
       ))
      } 
   </tbody>
    </Table>
          
    </Accordion.Body>
         
   </Accordion.Item>
   
      
     </Accordion>
       
   
        
   
   
   
   
  }





*/}

         