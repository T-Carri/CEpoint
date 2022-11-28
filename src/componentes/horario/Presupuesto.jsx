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
  const [itinerante, setItinerante] = useState()
  
  const getPresupuestos =async () => {
    const q = query(collection(db, "asignaciones"),where("asistencias", "!=", [] ))
    await onSnapshot(q, (query)=>{
      const data=[]
      query.forEach((doc)=>{
        data.push(doc.data())
        console.log("FIRESTORE SAYS:  ", doc.data().asistencias)
      })
      setPresupuesto(data)
    }) }
  

  
    useEffect(()=>{
      getPresupuestos()
      
    },[])
      
   console.log("Itinerante: ", itinerante);
   
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
  const [or, setOr]= useState()
     
   /*    const orden =(props)=>{ 
      return  props.reduce((acc, current)=>{
        const foundIte =  acc.find(it => it.nombre === current.nombre)
        console.log('ACC:  ',  acc)
        const o=[]
        o.push(acc)
        setOr(o)
        if(foundIte){
          foundIte.data=foundIte.data
          ?[...foundIte.data, {'tipoAsistencia':current.tipoAsistencia, 'date': current.date}]
          :[  {'tipoAsistencia':current.tipoAsistencia, 'date': current.date}  ]
          }else{ 
            acc.push({
              'trabajador': current.trabajador,
              'data' :[{'tipoAsistencia':current.tipoAsistencia, 'date': current.date}] 
            })
          } 
          return acc; 
        }, []
      )} */
       
     // orden(itinerante)
      // console.log('orden:   ', or);

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
    
const you =(tipoA, name, dato )=>{
if (name==name){
  return (
    <td>{tipoA}</td>,
    <td>{name}</td>,
    
     <td>{Monday(dato)}</td>,
     <td>{Martes(dato)}</td>,
     <td>{Miercoles(dato)}</td>,
     <td>{Jueves(dato)}</td>,
     <td>{Viernes(dato)}</td>,
     <td>{Sabado(dato)}</td>

  )
  
    
  
  
}

}









{/* 
 */}
     console.log('itinerante', itinerante)
      return (
    <Card>  
     <div className='presupuestos'>
     {Presupuestos&&
      Presupuestos.map((presupuesto)=>(
        <Button variant="danger" 
             id={presupuesto.obra}
         className={presupuesto.obra}
         value={presupuesto.presupuesto}
         onClick={
              async (e)=>{
               e.preventDefault()
               console.log("objeto completo:", presupuesto.asistencias)
               setAsistencias(presupuesto.asistencias)
              await AsistenciasPresupuesto(Asistencias)
           //  await  orden(itinerante)
               console.log("asistencias:", Asistencias)       
        
      }}> {presupuesto.presupuesto} </Button>))
      }
    </div>
    
  
  
  
  
          <div>
             <Card id="prueba" className='lg'>
        
             {itinerante&&
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
          <th>Asistencia</th>
          <th>Trabajador</th>
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
      //console.log('mapa s:', s),
      
      <tr> 
         <td>{s.tipoAsistencia}</td>
<td>{s.trabajador}</td>

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


 
      

 
   
    


   



