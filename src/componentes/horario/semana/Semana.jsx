import React, {useState, useContext} from 'react'
import { format, getWeek } from 'date-fns';
import moment from 'moment';
import { Card, Button, Accordion, Container } from 'react-bootstrap'

import '../Horario.css'


import CEpointContext from '../../../context/CEpointContext';

export const Semana = () => {
 // const storage = getStorage()
 const {state} = useContext(CEpointContext)
const weekDays = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  const [test, setTest]=useState(state.TotalProyectos?state.TotalProyectos:null)
  const [seleccion, setSeleccion]= useState('')



 const ProyectosFiltrados = test && test.filter(obj => (obj.asistencias || []).length !== 0);
 


   console.log('FILTRO', ProyectosFiltrados&&ProyectosFiltrados )
  
   console.log('seleccion', seleccion&&seleccion )


  let groupedData = {};

  if (seleccion.length > 0) {
      groupedData = seleccion.reduce((acc, current) => {
        const date = moment(current.date);
        const year = date.year();
        const week = date.isoWeek();
        const trabajador = current.trabajador
        if (!acc[year]) {
          acc[year] = {};
        }
        if(!acc[year][week]){
          acc[year][week] = {}
        }
        if(!acc[year][week][trabajador]){
            acc[year][week][trabajador] = []
        }
        acc[year][week][trabajador].push(current);
        return acc;
    }, {});
      
    }

    console.log('DATA', groupedData);
  
  console.log(JSON.stringify(groupedData));

  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = (sectionName) => {
    setExpandedSections((prevExpandedSections) => {
      return {
        ...prevExpandedSections,
        [sectionName]: !prevExpandedSections[sectionName]
      };
    });
  }
       




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

   const Domingo = (dato)=>{
    let exReg = /Sun/
if(exReg.test(dato)){
return dato
}else{return null}
   }


















     
      return (
        <Container fluid>  
        <div className='presupuestos'>
          {ProyectosFiltrados.map((presupuesto)=>(
             <Button variant="danger" id={presupuesto.obra} value={presupuesto.presupuesto}
             onClick={()=>setSeleccion(presupuesto.asistencias)}> {presupuesto.presupuesto} </Button>
           ))} 
        </div>
        <div>
          {Object.keys(groupedData).map((year) => (
            <div key={year}>
              <Button style={{width:'15em'}} variant='success' key={year} onClick={()=>toggleExpand(year)}>Asistencias del {year}</Button>
              {expandedSections[year] && (
                <div>
                  {Object.keys(groupedData[year]).map((week) => (
                    <div key={week}>
                      <Button key={week} onClick={()=>toggleExpand(week)}>Semana {week}</Button>
                      {expandedSections[week] && (
                        <div>
                          {Object.keys(groupedData[year][week]).map((worker) => (
<div key={worker}>
<h2>{worker}</h2>
<table>
<thead>
<tr>
<th>Trabajador</th>
<th>Lunes</th>
<th>Martes</th>
<th>Miércoles</th>
<th>Jueves</th>
<th>Viernes</th>
<th>Sábado</th>
<th>Domingo</th>
</tr>
</thead>
<tbody>

{groupedData[year][week][worker].map((attendance) => (
  <tr>
<td key={attendance.clave}>
{/* Latitud: {attendance.latitud}, Longitud: {attendance.longitud} */}
<br />
{/* Fecha: {attendance.date},  */} Tipo de asistencia: <strong>{attendance.tipoAsistencia}</strong>
<br />
Trabajador:<strong>{attendance.trabajador}</strong>  
<br />
Presupuesto: <strong>{attendance.presupuesto}</strong>
</td> 
<td>
  {Monday(attendance.date)}
</td>
<td>
  {Martes(attendance.date)}
</td>
<td>{Miercoles(attendance.date)}</td>
<td>{Jueves(attendance.date)}</td>
<td>{Viernes(attendance.date)}</td>
<td>{Sabado(attendance.date)}</td>
<td>{Domingo(attendance.date)}</td>
</tr>
))}

</tbody>
</table>
</div>
))}
</div>
)}
</div>
))}
</div>
)}
</div>
))}

  </div>
</Container>
     )
    }




