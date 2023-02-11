import React, { useState, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
//import './almacen.css'
import { useNavigate, Outlet } from 'react-router-dom'
import AsignacionContext from '../../context/AlmacenContext'
export const Almacen = () => {
  const navigate = useNavigate(); 
 
  const {Toggle, setToggle}=useContext(AsignacionContext)
 
console.log('TOGGLE', Toggle)
  return (

   


Toggle
?<Outlet/>
: <Container><div className='prestado' onClick={()=>{
  setToggle(true)
  navigate("prestado")
  }}>
<div className="capaPrestado">
<h1>Actividad</h1>
  <p>Agrega prestado</p> 

</div>
</div>

<div className='areas'>
<div className='miscelaneos' onClick={()=>{
setToggle(true)
navigate("miscelaneos")
}} >

<div className="capaMiscelaneos">
  <h2>Miscelaneos</h2>
  <p>Agrega miscelaneos</p>
</div>
</div>
<div className='maquinaria' onClick={()=>{
setToggle(true)
navigate("maquinaria")
}}>
<div className="capaMaquinaria">
<h2>Maquinaria</h2>
  <p>Agrega maquinaria</p>

</div>
</div>
<div className='herramientas' onClick={()=>{
setToggle(true)
navigate("herramienta")
}}>
<div className="capaHerramientas">
<h2>Herramientas</h2>
  <p>Agrega herramientas</p>
</div>
</div>
</div> 
<Button variant='dark' style={{width: '10em', height: '5em'}}>Total Ingresado</Button>
</Container>



        
   
  )
}



