import React, {useContext, useState, useEffect} from 'react'
import { CardAsistencia } from './CardAsistencia';
import { Card, Button, Accordion, Container, Badge } from 'react-bootstrap'
import { useParams,  useOutletContext } from 'react-router-dom';
import moment from 'moment';
import CEpointContext from '../../../context/CEpointContext';
export const Table = () => {
  const {state, getProyecto} =useContext(CEpointContext)

       const {presupuesto} =useParams()
    const [flag]=useOutletContext()
console.log(flag)

       useEffect(()=>{
        getProyecto(presupuesto)
        
        },[presupuesto])
 
    /*     console.log('PRESUPUESTO',presupuesto)

        console.log('SELECTION', seleccion)

        console.log('STATE PROYECTO', state.Proyecto ) */

        const [expandedSections, setExpandedSections] = useState({});
        const toggleExpand = (sectionName) => {
            setExpandedSections((prevExpandedSections) => {
              return {
                ...prevExpandedSections,
                [sectionName]: !prevExpandedSections[sectionName]
              };
            });
          }
      






        let groupedData = {};
        if (state.Proyecto.length > 0) {
          const filteredData = state.Proyecto.filter((item) => item.flag === `${flag}`);
          groupedData = filteredData.reduce((acc, current) => {
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
       
        console.log(groupedData);









      const Monday = (dato)=>{
        let exReg = /Mon/
    if(exReg.test(dato.date)){
    return <CardAsistencia dato={dato}/>
    }else{return null}
       }
    
       const Martes = (dato)=>{
        let exReg = /Tue/
    if(exReg.test(dato.date)){
    return <CardAsistencia dato={dato}/>
    }else{return null}
       }
    
       const Miercoles = (dato)=>{
        let exReg = /Wed/
    if(exReg.test(dato.date)){
    return <CardAsistencia dato={dato}/>
    }else{return null}
       }
    
       const Jueves = (dato)=>{
        let exReg = /Thu/
    if(exReg.test(dato.date)){
    return <CardAsistencia dato={dato}/>
    }else{return null}
       }
       const Viernes = (dato)=>{
        let exReg = /Fri/
    if(exReg.test(dato.date)){
    return <CardAsistencia dato={dato}/>
    }else{return null}
       }
    
       const Sabado = (dato)=>{
        let exReg = /Sat/
    if(exReg.test(dato.date)){
    return <CardAsistencia dato={dato}/>
    }else{return null}
       }
    
       const Domingo = (dato)=>{
        let exReg = /Sun/
    if(exReg.test(dato.date)){
    return <CardAsistencia dato={dato}/>
    }else{return null}
       }



  return (
    <div>
    {Object.keys(groupedData).map((year) => (
      <div key={year}>
        
<Button style={{width:'15em'}} variant='dark' key={year} onClick={()=>toggleExpand(year)}>Asistencias del {year}</Button>
        
                      {expandedSections[year] && (
                       <div>
                       {Object.keys(groupedData[year]).map((week) => (
                       <div key={week}>
               
<Button key={week} style={{width:'15em'}} onClick={()=>toggleExpand(week)}>Semana nat. {week}</Button>
               
               
                {expandedSections[week] && (
                  <div>
                    {Object.keys(groupedData[year][week]).map((worker) => (
<div key={worker}>
<Badge bg="secondary"><h2>{worker}</h2></Badge> <Badge bg="success"><h2>{groupedData[year][week][worker].length}</h2></Badge>

<table className='col-md-2 col-xs-6 col-lg-12'>
<thead>
<tr>
<th>Presupuesto</th>
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
<tr key={attendance.clave}>
<td >
<Badge pill  bg="secondary">
{attendance.presupuesto}
      </Badge>

</td>
<td >{Monday(attendance)}</td>
<td >{Martes(attendance)}</td>
<td >{Miercoles(attendance)}</td>
<td >{Jueves(attendance)}</td>
<td >{Viernes(attendance)}</td>
<td >{Sabado(attendance)}</td>
<td >{Domingo(attendance)}</td>
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
  )
}
