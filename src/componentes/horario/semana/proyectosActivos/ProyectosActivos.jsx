import React, { useContext, useEffect  } from 'react'
import { CarouselProyectos } from '../CarouselProyectos';

import CEpointContext from '../../../../context/CEpointContext';

import { Outlet } from 'react-router-dom';
export const ProyectosActivos = () => {
 
  const {state, getProyectosActivos} =useContext(CEpointContext)
 
  
  


useEffect(()=>{

    getProyectosActivos()
 
},[])



console.log("STATE:", state)
  
 
  return (


    <div>Presupuestos Activos

    <CarouselProyectos    state={state.asignacionesActivasDetails&&state.asignacionesActivasDetails} />

  

     <Outlet/>

    </div> 
  )
}
