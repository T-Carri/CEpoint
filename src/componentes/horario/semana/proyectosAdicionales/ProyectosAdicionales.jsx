import React, { useContext, useEffect, useState } from 'react'
import { CarouselProyectos } from '../CarouselProyectos';

import CEpointContext from '../../../../context/CEpointContext';

import { Outlet } from 'react-router-dom';
export const ProyectosAdicionales = () => {
  const [flag, setFlag] =useState('Adicional') 
  const {state, getProyectosAdicionales} =useContext(CEpointContext)





useEffect(()=>{

  getProyectosAdicionales()
  
},[])


 
  return (


    <div>Presupuestos Activos

    <CarouselProyectos   state={state.ProyectosAdicionales&&state.ProyectosAdicionales} />
    <Outlet context={[flag]}/>
    </div> 
  )
}
