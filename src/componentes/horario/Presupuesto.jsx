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
   ?[...foundItem.data, {'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida}]
   :[{ 'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida   }]
}else{ past.push( {
  'semana': current.semana,
  'data': [{
    'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida
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
    }} > {presupuesto.presupuesto} </Button>))
    }
  </div>

<dir id="canal">
 
 

</dir>



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
          <th>Entrada</th>
          <th>Salida</th>
        </tr>
      </thead>
      <tbody>
      {
  r.data.map((s)=>( 
    console.log('mapa s:', s),
    
    <tr>
       <td>{s.trabajador}</td>
       <td>{"seconds" + s.entrada}</td>
       <td>{"nano"+ s.salida}</td>
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

}) }  









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









*/

         