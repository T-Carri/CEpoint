import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './almacen.css'
import { useNavigate, Outlet } from 'react-router-dom'
export const Almacen = () => {
  const navigate = useNavigate(); 
const [Toggle, setToggle]=useState(false)

  return (

   


Toggle
?<Outlet/>
: <Container><div className='prestado'>
<div className="capaPrestado">
<h2>Prestado</h2>
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
<div className='maquinaria'>
<div className="capaMaquinaria">
<h2>Maquinaria</h2>
  <p>Agrega maquinaria</p>

</div>
</div>
<div className='herramientas'>
<div className="capaHerramientas">
<h2>Herramientas</h2>
  <p>Agrega herramientas</p>
</div>
</div>
</div> </Container>



        
   
  )
}


/*
*/