import React, { useContext, useState } from 'react'
import { CarouselProyectos } from '../CarouselProyectos';
import { Table } from '../Table';
import moment from 'moment';
import CEpointContext from '../../../../context/CEpointContext';
import { useEffect } from 'react';
export const ProyectosDesactivados = () => {
 
  const {state, getProyectosDesactivados} =useContext(CEpointContext)
  const [seleccion, setSeleccion]= useState('')




useEffect(()=>{

  getProyectosDesactivados()
  
},[])



console.log("STATE:", state)
  
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

      
    }



    console.log('DATA', groupedData);
  
  console.log(JSON.stringify(groupedData));



 
  return (


    <div>

    <CarouselProyectos  setExpandedSections={setExpandedSections} setSeleccion={setSeleccion} state={state.asignacionesDD&&state.asignacionesDD} />,
      Assitencias que se tomaron en estado activo
      <br />
      Assitencias que se tomaron en estado Adicional 
      <br />

      Asistencias que se tomaron en estado Garantia
{/* 
    <Table toggleExpand={toggleExpand} expandedSections={expandedSections} groupedData={groupedData}  /> */}
    </div> 
  )
}
