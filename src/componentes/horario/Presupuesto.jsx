import React, {useState, useEffect} from 'react'
import { onSnapshot,  where, collection, query} from 'firebase/firestore'
import { Card, Button, Accordion, Table} from 'react-bootstrap'
import { getAuth } from 'firebase/auth'; 
import { db } from '../../firebase/firebase';
import * as XLSX from "xlsx"

import './Horario.css'
import { current } from '@reduxjs/toolkit';

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

    return props.reduce((acc, current)=>{
      const foundItem =  acc.find(it => it.semana === current.semana)
     // console.log('past:', acc);
    /*  const r= {}
     r.push(acc); */
     setItinerante(acc)
     //console.log('r:', r);
      if (foundItem ){
   foundItem.data=foundItem.data
   ?[...foundItem.data, {'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date}]
   :[{ 'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date   }]
}else{ acc.push( {
  'semana': current.semana,
  'data': [{
    'trabajador': current.trabajador,'tipoAsistencia':current.tipoAsistencia, 'date': current.date
  }]
} ) }  

return acc 

    }, [])}

/* const AsistenciasPresupuestodos = (props) =>{
let nuevoArray = []
 let arrayTemporal = []
for(var i=0; i<props.length; i++){
  arrayTemporal= nuevoArray.filter(resp=>resp["semana"]==props[i]["semana"])
   if(arrayTemporal.length>0){
    nuevoArray[nuevoArray.indexOf(arrayTemporal[0])]["Data"].push(props[i]["trabajador"])
   }else{
    nuevoArray.push({"semana": props[i]["semana"], "data": [props[i]["trabajador"]]})
   }
}
console.log('nuevo array test:   ',nuevoArray)
} */


console.log('muestra', Asistencias)
let resultado = {}
Asistencias.forEach(asistencias=>{
  const nombreGrupo =asistencias.semana;
 if(!resultado[nombreGrupo]) resultado[nombreGrupo]=[]
resultado[nombreGrupo].push(asistencias)


})

console.log('RESS',resultado)





/*  resultado.forEach(dato=>
  console.log('335',dato))  */

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
    



//nuevoObjeto.reduce((acc,current))

function ExportData() {
  //var XLSX = require("xlsx")
  var data = [{
    "name": "John",
    "city": "Seattle"
  },
  {
    "name": "Mike",
    "city": "Los Angeles"
  },
  {
    "name": "Zach",
    "city": "New York"
  }
];

   /* 创建worksheet */
   var ws = XLSX.utils.json_to_sheet(nuevoObjeto);

   /* 新建空workbook，然后加入worksheet */
   var wb = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, "People");
 
   /* 生成xlsx文件 */
   XLSX.writeFile(wb, "sheetjs.xlsx");
}

{/* 
ZONA DE GUERRA
 */}
     console.log('itinerante', itinerante)
     //console.log('itinerante', itinerante['datos'])
     
const [try1, setTry1]=useState() 
let nuevoObjeto = {}
let nuevoArray = []

console.log('nuevo objeto:  ', nuevoObjeto)
console.log('nuevo Array:  ', nuevoArray)
     

useEffect(()=>{

},[])

const darkness = (props) => {

  return props.reduce((acc, current)=>{
    const foundItem1 =  acc.find(it => it.trabajador === current.trabajador)
    console.log('desde darkness:', acc);
  /*  const r= {}
   r.push(acc); */
  setTry1(acc)
   //console.log('r:', r);
   if (foundItem1 ){
    foundItem1.data=foundItem1.data
    ?[...foundItem1.data, {'tipoAsistencia':current.tipoAsistencia, 'date': current.date}]
    :[{ 'tipoAsistencia':current.tipoAsistencia, 'date': current.date   }]
 }else{ acc.push( {
   'trabajador': current.trabajador,
   'data': [{
     'tipoAsistencia':current.tipoAsistencia, 'date': current.date
   }]
 } ) }

return acc 

  }, [])}



//console.log('DARKNESS', darkness)
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
              darkness(nuevoArray)
             //AsistenciasPresupuestodos(Asistencias)

           //  await  orden(itinerante)
               //console.log("asistencias:", Asistencias)       
        
      }}> {presupuesto.presupuesto} </Button>))
      }
    </div>
    
  
  
  
  
          <div>
             <Card id="prueba" className='lg'>
        
             {itinerante&&
  itinerante.map((e)=> (
    
    e.data.map((s)=>{ nuevoArray.push(s)}), 
   

  //console.log('desde mapa:', r.data),
  <Accordion>
  <Accordion.Item eventKey={e.semana}>
    <Accordion.Header>{e.semana}     <Button onClick={ExportData}>TEST</Button>     </Accordion.Header>
    <Accordion.Body>
  
    <Table striped bordered hover>
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

       

    
      
        {try1&&try1.map((r)=>{
       
            
       return     <tr> <td>{r.trabajador}</td>
              {r.data.map((s)=>{

                return     <tr><td>{s.tipoAsistencia}</td></tr>
                
                
              })}
       </tr>
        
       })}  
      
      
  </tbody>
       
      </Table>
  
  
  
  
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
  
  
   
  ))
  
        }



    
              </Card>
           </div>
    </Card>
     )
    }

 


 
     
  
     
      






 
      

 
   
    


   


{/*

       {
    e.data.map((s)=>{ 
      const nombreTrabajador= s.trabajador;
      if(!nuevoObjeto[nombreTrabajador])nuevoObjeto[nombreTrabajador]=[];
       nuevoObjeto[ nombreTrabajador].push(s)
        //console.log('nuevo objeto:  ', nuevoObjeto)

      
//try a new reduce 


 
      return <tr> 

 <td>{s.tipoAsistencia}</td>
 <td>{s.trabajador}</td>
 <td>{Monday(s.date)}</td>
 <td>{Martes(s.date)}</td>
 <td>{Miercoles(s.date)}</td>
 <td>{Jueves(s.date)}</td>
 <td>{Viernes(s.date)}</td>
 <td>{Sabado(s.date)}</td> 
          
  
            </tr>
    
  
     
      
  
    })
  }   

*/}
