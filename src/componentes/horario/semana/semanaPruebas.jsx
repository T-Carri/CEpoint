import React, {useState, useContext} from 'react'
import { format, getWeek } from 'date-fns';
import moment from 'moment';
import { Card, Button, Accordion, Container } from 'react-bootstrap'

//import '../Horario.css'


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
   }

   const Domingo = (dato)=>{
    let exReg = /Sun/
if(exReg.test(dato)){
return dato
}else{return null}
   } */


  /*  const filtrarDia = (dato, dia) => {
    let exReg = new RegExp(dia);
    if(exReg.test(dato)) {
      return dato;
    } else {
      return null;
    }
  }
 */

/*   const lunes = filtrarDia(dato, 'Mon');
  const martes = filtrarDia(dato, 'Tue');
  const miercoles = filtrarDia(dato, 'Wed');

  const jueves = filtrarDia(dato, 'Thu');

const viernes = filtrarDia(dato, 'Fri');
const sabado = filtrarDia(dato, 'Sat');
const domingo = filtrarDia(dato, 'Sun');

 */
const filtrarDia = (dato, exp) => {
    if(exp.test(dato)){
    return dato
    }else{return null}
    }
    
    const funcionesDias = {
    "Lunes": /Mon/,
    "Martes": /Tue/,
    "Miercoles": /Wed/,
    "Jueves": /Thu/,
    "Viernes": /Fri/,
    "Sabado": /Sat/,
    "Domingo": /Sun/
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
        <h2>{year}</h2>
        {Object.keys(groupedData[year]).map((week) => (
        <div key={week}>
        <h3>Semana {week}</h3>
        {Object.keys(groupedData[year][week]).map((trabajador) => (
        <div key={trabajador}>
        <h4>{trabajador}</h4>
        <table>
        <thead>
        <tr>
        {weekDays.map((day) => (
        <th key={day}>{day}</th>
        ))}
        </tr>
        </thead>
        <tbody>
        <tr>
        {weekDays.map((day) => {
        const dia = groupedData[year][week][trabajador].filter(a => filtrarDia(a.date, funcionesDias[day]))
        return (
        <td key={day}>
        <Accordion>
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => toggleExpand(day)}>
        {day}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
        {dia.map((proyecto) => (
        <div key={proyecto.id}>
        <p>{proyecto.horas} horas</p>
        <p>{proyecto.extra} horas extras</p>
        <p>{proyecto.obra}</p>
        </div>
        ))}
        </Card.Body>
        </Accordion.Collapse>
        </Card>
        </td>
)})}
</tr>
</tbody>
</table>
</div>
))}
</div>
))}
</div>
</Container>
     )
    }


