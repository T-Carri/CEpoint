import React, { useState, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
//import './almacen.css'
import { useNavigate, Outlet } from 'react-router-dom'
import UiContext from '../../context/UiContext'
export const Almacen = () => {
  const navigate = useNavigate(); 
 
  const {ToggleALMACEN, setToggleALMACEN}=useContext(UiContext)
 

  return (

   


    ToggleALMACEN
?<Outlet/>
: <Container><div className='prestado' onClick={()=>{
  setToggleALMACEN(true)
  navigate("prestado")
  }}>
<div className="capaPrestado">
<h1>Actividad</h1>
  <p>Agrega prestado</p> 

</div>
</div>

<div className='areas'>
<div className='miscelaneos' onClick={()=>{
setToggleALMACEN(true)
navigate("miscelaneos")
}} >

<div className="capaMiscelaneos">
  <h2>Miscelaneos</h2>
  <p>Agrega miscelaneos</p>
</div>
</div>
<div className='maquinaria' onClick={()=>{
setToggleALMACEN(true)
navigate("maquinaria")
}}>
<div className="capaMaquinaria">
<h2>Maquinaria</h2>
  <p>Agrega maquinaria</p>

</div>
</div>
<div className='herramientas' onClick={()=>{
setToggleALMACEN(true)
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



