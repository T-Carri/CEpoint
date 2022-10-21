import React, {useState, useEffect, useMemo} from 'react'
import { updateDoc, arrayUnion, doc, onSnapshot, setDoc, where, collection, query, getDocs, get} from 'firebase/firestore'
import { Card, Container, Toast, Button, Accordion, Table } from 'react-bootstrap'
import { getAuth } from 'firebase/auth'; 
import { useTable } from 'react-table';
import { db } from '../../firebase/firebase';
import './Horario.css'
import { async } from '@firebase/util';
import moment from 'moment' 
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
      
     
/*
    const filtracion = Asistencias.filter()

    function check(datos){

    }*/ 

/* Asistencias.map((e)=>(
  console.log(e.semana)
))  */
  
/* function groupById(array){
return array.reduce((axx, current)=>{
 
  const foundItem = axx.find(it.semana===current.semana)

  if(foundItem){ 
    foundItem.data= foundItem.data 
    ?[...foundItem, {'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida}]
    :[{
      'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida
    }]

  } else {
    axx.push(
      {
        'semana': current.semana,
        'data': [{
          'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida
        }]
      }
    )
  }  return axx;


},[])

}
console.log("reduce: ", groupById(Asistencias));  
console.log("hook: ", Asistencias); */
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
{
  
 
Asistencias.map((e)=>(
    
          console.log("desde mapeo asistencias", e),
          
         <Accordion>
         <Accordion.Item eventKey={e.semana}>
           <Accordion.Header>Semana # {e.semana}</Accordion.Header>
           <Accordion.Body>
           <Table responsive="sm">
        <thead>
          <tr>
            <th>Semana</th>
            
            <th>Nombre</th>
            <th>Entrada</th>
            <th>Salida</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{e.semana}</td>
            <td>{e.trabajador} </td>
            <td>{ 
               "Datos entrada:  "+ e.entrada
            }</td>
            <td>{Date(e.salida)}</td>
         
          </tr>
         
        </tbody>
      </Table>
      
      

           </Accordion.Body>
         </Accordion.Item>
       </Accordion>
         



         //<Button variant="success">Semana #{e.semana}</Button>
         ))}
   
  </Card>
  
  </div>
  
  </Card>
   )
  }
   
   



   








/* 

    /* const data = React.useMemo( () => [
     {
       col1: 'Hello',
       col2: 'World',
     },
     {
       col1: 'react-table',
       col2: 'rocks',
     },
     {
       col1: 'whatever',
       col2: 'you want',
     },
   ],
   [])
    const columns = React.useMemo(
        () => [
           
            {
                Header: 'Nombre', 
                accessor: 'nombre' 
            }, 
            {
                Header: 'Entrada', 
                accessor: 'entrada'
    
            },
            {
                Header: 'Salida', 
                accessor: 'entrada'
    
            }
        ]
    )
    
    const tableInstance = useTable({ columns, data })
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
    
    */








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



         