import React, { useContext, useEffect } from 'react'
import { CarouselProyectos } from '../CarouselProyectos';

import CEpointContext from '../../../../context/CEpointContext';

import { Outlet } from 'react-router-dom';
export const ProyectosAdicionales = () => {

  const {state, getProyectosAdicionales} =useContext(CEpointContext)





useEffect(()=>{

  getProyectosAdicionales()
  
},[])


 
  return (


    <div>Presupuestos Activos

    <CarouselProyectos   state={state.ProyectosAdicionales&&state.ProyectosAdicionales} />
    <Outlet/>
    </div> 
  )
}
