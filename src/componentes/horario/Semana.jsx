import React, {useState, useEffect} from 'react'
import { onSnapshot,  where, collection, query} from 'firebase/firestore'
import { Card, Button, Accordion, Table} from 'react-bootstrap'
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/firebase';
import './Horario.css'

export const Semana = () => {
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
      

     
    const AsistenciasPresupuesto = (props) => {

      return props.reduce((past, current)=>{
        const foundItem =  past.find(it => it.semana === current.semana)
      
       const r= []
       r.push(past);
       setItinerante(r)
       
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
  
      const Monday = (dato)=>{
        let exReg = /Mon/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Martes = (dato)=>{
        let exReg = /Tue/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Miercoles = (dato)=>{
        let exReg = /Wed/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Jueves = (dato)=>{
        let exReg = /Thu/
if(exReg.test(dato)){
  return dato
}else{return null}
       }
       const Viernes = (dato)=>{
        let exReg = /Fri/
if(exReg.test(dato)){
  return dato
}else{return null}
       }

       const Sabado = (dato)=>{
        let exReg = /Sat/
if(exReg.test(dato)){
  return dato
}else{return null}
       }
    
      
       
     
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
               
               setAsistencias(presupuesto.asistencias)
               AsistenciasPresupuesto(Asistencias)
                     
        
      }}> {presupuesto.presupuesto} </Button>))
      }
    </div>
    
                  
  
  
  
          <div className='horariosemanas'>
             <Card id="prueba" className='lg'>
        
             {
  itinerante.map((e=> (
   
   e.map((r)=>(
  
  <Accordion>
  <Accordion.Item eventKey={r.semana}>
    <Accordion.Header>{r.semana}</Accordion.Header>
    <Accordion.Body>
  
    <Table striped bordered hover responsive='sm'>
        <thead>
          <tr>
          <th>Trabajador</th>
               <th>Asistencia</th>

               <th>Lunes</th>
               <th>Martes</th>
               <th>Miercoles</th>
               <th>Jueves</th>
               <th>Viernes</th> 
               <th>Sabado</th> 


          </tr>
        </thead>
        <tbody>
        {
    r.data.map((s)=>( 
    
      
      <tr>
           <td>{s.trabajador}</td>
            <td>{s.tipoAsistencia}</td>
            <td>{Monday(s.date)}</td>
            <td>{Martes(s.date)}</td>
            <td>{Miercoles(s.date)}</td>
            <td>{Jueves(s.date)}</td>
            <td>{Viernes(s.date)}</td>
            <td>{Sabado(s.date)}</td>
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


 
      

 
   
    
