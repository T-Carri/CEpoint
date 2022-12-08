import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './almacen.css'
export const Almacen = () => {
  return (
    <Container>
<div className='prestado'>
  <div className="capaPrestado">
  <h3>Prestado</h3>
    <p>Agrega prestado</p> 

  </div>
</div>

<div className='areas'>
<div className='miscelaneos'>
  <div className="capaMiscelaneos">
    <h3>Miscelaneos</h3>
    <p>Agrega miscelaneos</p>
</div>
</div>
<div className='maquinaria'>
  <div className="capaMaquinaria">
  <h3>Maquinaria</h3>
    <p>Agrega maquinaria</p>

  </div>
</div>
<div className='herramientas'>
  <div className="capaHerramientas">
  <h3>Herramientas</h3>
    <p>Agrega herramientas</p>
  </div>
</div>
</div>
        
    </Container>
  )
}


/*
*/