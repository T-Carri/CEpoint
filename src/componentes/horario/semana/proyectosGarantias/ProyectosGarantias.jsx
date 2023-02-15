import React, { useContext, useState } from 'react'
import { CarouselProyectos } from '../CarouselProyectos';
import { Table } from '../Table';
import moment from 'moment';
import CEpointContext from '../../../../context/CEpointContext';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
export const ProyectosGarantias = () => {
 
  const {state, getProyectosGarantia} =useContext(CEpointContext)
  const [seleccion, setSeleccion]= useState('')




useEffect(()=>{

  getProyectosGarantia()
  
},[])



 
  return (


    <div>Presupuestos Activos

    <CarouselProyectos   state={state.ProyectosGarantia&&state.ProyectosGarantia} />
   <Outlet/>
    </div> 
  )
}
