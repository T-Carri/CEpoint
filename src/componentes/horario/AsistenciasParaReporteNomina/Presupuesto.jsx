import React, {useState, useEffect, useContext} from 'react'

import { Card, Button, Table} from 'react-bootstrap'
import CEpointContext from '../../../context/CEpointContext';

import * as XLSX from "xlsx"

//import '../Horario.css'



export const Presupuesto = () => {
 
const {state} =useContext(CEpointContext)
const [test, setTest]=useState(state.TotalProyectos?state.TotalProyectos:null)
/* 
  const [Presupuestos, setPresupuesto] = useState([]);
  const [Asistencias, setAsistencias] = useState([]); 
  const [itinerante, setItinerante] = useState()
   */

 
//console.log('GET proyectos', state.TotalProyectos?state.TotalProyectos:null)

//console.log(test)

    const ProyectosFiltrados = test.filter(obj => (obj.asistencias || []).length !== 0);


   console.log('FILTRO', ProyectosFiltrados&&ProyectosFiltrados )




     return (
    <Card>  
     <div className='presupuestos'>
     {ProyectosFiltrados&&
      ProyectosFiltrados.map((presupuesto)=>(
        <Button variant="danger" 
             id={presupuesto.obra}
         
         value={presupuesto.presupuesto}
         /* onClick={
              async (e)=>{
               e.preventDefault()
               setExcel(presupuesto.asistencias)
               console.log("objeto completo:", presupuesto.asistencias)
               setAsistencias(presupuesto.asistencias)
               //await AsistenciasPresupuesto(Asistencias)
               darkness(Asistencias)
               //AsistenciasPresupuestodos(Asistencias)
               setNombreProyecto(presupuesto.presupuesto)
               //  await  orden(itinerante)
               //console.log("asistencias:", Asistencias)       

        
      }} */> {presupuesto.presupuesto} </Button>))
      } 
    </div>
    
  
  

    </Card>
     )
    }

 


 
     
  
     
      
  
  /* 
          <div>
             <Card id="prueba" className='lg'>
        
             <Button variant='success' onClick={ExportData}>Excel</Button>  
  
    <Table striped bordered hover responsive>
        <thead>
          <tr>
          <th>Trabajador</th>
          <th>Asistencia</th>
          
          
              
               
          </tr>   
        </thead>
        <tbody>

       

    
      
        {try1&&try1.map((r)=>{
       
            
       return     <tr> <td>{r.trabajador}</td>
              {r.data.map((s)=>{

                return   <tr>
                  <th>Semana: {s.semana},</th> 
                  <th>  Registro: {s.tipoAsistencia}</th> 
                  <td>{s.date}</td>

                </tr>
                
                 
                
                
              })}
              
       </tr>
        
       })}  
      
      
  </tbody>
       
      </Table>
  
  
  
  
   
   



    
              </Card>
           </div> */





 
      

 
   
      
/*    console.log("Itinerante: ", itinerante);
   
   const AsistenciasPresupuesto = (props) => {

    return props.reduce((acc, current)=>{
      const foundItem =  acc.find(it => it.semana === current.semana)
     // console.log('past:', acc);
   
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

    }, [])} */






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

/* 
console.log('muestra', Asistencias)
let resultado = {}
Asistencias.forEach(asistencias=>{
  const nombreGrupo =asistencias.semana;
 if(!resultado[nombreGrupo]) resultado[nombreGrupo]=[]
resultado[nombreGrupo].push(asistencias)


})

console.log('RESS',resultado)
 */




/*  resultado.forEach(dato=>
  console.log('335',dato))  */

  //const [or, setOr]= useState()
     
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
/* 
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
       } */
    



//nuevoObjeto.reduce((acc,current))
/* const [excel, setExcel] = useState()
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
]; */

   /* 创建worksheet */
 //  var ws = XLSX.utils.json_to_sheet(Asistencias);

   /* 新建空workbook，然后加入worksheet */
   /* var wb = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, "People");
  */
   /* 生成xlsx文件 */
  // XLSX.writeFile(wb, `${NombreProyecto}.xlsx`);
//}

{/* 
ZONA DE GUERRA
 */}
    // console.log('itinerante', itinerante)
     //console.log('itinerante', itinerante['datos'])
/*      
const [try1, setTry1]=useState() 
let nuevoObjeto = {}
let nuevoArray = []

console.log('nuevo objeto:  ', nuevoObjeto)
console.log('nuevo Array:  ', nuevoArray)
     
 */
/* useEffect(()=>{

},[]) */

/* const darkness = (props) => {

  return props.reduce((acc, current)=>{
    const foundItem1 =  acc.find(it => it.trabajador === current.trabajador)
    console.log('desde darkness:', acc);
  
  setTry1(acc)
   //console.log('r:', r);
   if (foundItem1 ){
    foundItem1.data=foundItem1.data
    ?[...foundItem1.data, {'semana':current.semana,'tipoAsistencia':current.tipoAsistencia, 'date': current.date}]
    :[{'semana':current.semana, 'tipoAsistencia':current.tipoAsistencia, 'date': current.date   }]
 }else{ acc.push( {
   'trabajador': current.trabajador,
   'data': [{
    'semana':current.semana, 'tipoAsistencia':current.tipoAsistencia, 'date': current.date
   }]
 } ) }

return acc 

  }, [])}
 */

/* const [NombreProyecto, setNombreProyecto] = useState()
console.log('NOMBRE PROYECTO', NombreProyecto)
 */
    


   


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
