import React, {useState, useContext} from 'react'
import { format, getWeek } from 'date-fns';
import moment from 'moment';
import { Card, Button, Accordion, Container, Badge } from 'react-bootstrap'
import Box from '@mui/material/Box';
//import '../Horario.css'
import { CardAsistencia } from './CardAsistencia';
import { CarouselProyectos } from './CarouselProyectos';
import CEpointContext from '../../../context/CEpointContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export const Semana = () => {
 // const storage = getStorage()
 const {state} = useContext(CEpointContext)
const weekDays = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  const [test, setTest]=useState(state.TotalProyectos?state.TotalProyectos:null)
  const [seleccion, setSeleccion]= useState('')
 const [DATA, setData]=useState('')
 const [alignment, setAlignment] = React.useState('web');

 const handleChange = (event, newAlignment) => {
  setAlignment(newAlignment);
};


 console.log('state in semana:', state)
 const ProyectosFiltrados = test && test.filter(obj => (obj.asistencias || []).length !== 0);
 


   console.log('FILTRO', ProyectosFiltrados&&ProyectosFiltrados )
  
   console.log('seleccion', seleccion&&seleccion )
   console.log(JSON.stringify(seleccion));

  let groupedData = {};

  if (seleccion.length > 0) {
      groupedData = seleccion.reduce((acc, current) => {
        const date = moment(current.date);
        const year = date.year();
        const week = date.isoWeek();
        const trabajador = current.trabajador
        console.log(current.asistencias)
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
/*     groupedData = seleccion.reduce((acc, current) => {
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
          acc[year][week][trabajador] = {asistencias: 0}
      }
      acc[year][week][trabajador].asistencias++;
      acc[year][week][trabajador].push(current);
      return acc;
  }, {}); */
      
    }


/* 
    const objetosEncontrados = arrayDeObjetos.filter((objeto) => {
      const date = moment(objeto.date)
      const day = date.format('DD')
      return day === '01' // o el día que desees comparar
    });

    console.log(`Número de objetos encontrados con el mismo día: ${objetosEncontrados.length}`) */
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



/* 
const count = (dato,dato1,dato2)=>{
  if(same year and month and worker and dato.tipoAsistencia === 'Entrada' || dato.tipoAsistencia === 'Salida'){
    if(same month)
  }

}
 */












     
      return (
        <Box fluid>  
        <br />

<ToggleButtonGroup
      color="success"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Activos">Activos</ToggleButton>
      <ToggleButton value="Adicionales">Adicionales</ToggleButton>
      <ToggleButton value="Garantias">Garantias</ToggleButton>
      <ToggleButton value="Desactivados">Desactivados</ToggleButton>
    </ToggleButtonGroup>

        <br />
        <br />

       <CarouselProyectos/>
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
</Box>
     )
    }




