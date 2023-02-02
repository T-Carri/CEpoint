import React, {useState, useRef} from 'react'
import {  Button, Form, Col, Row,  InputGroup, ToggleButton, Overlay, Popover } from 'react-bootstrap'

import { ChildDatosTrabajadorAdd } from './ChildDatosTrabajadorAdd';
import { ChildDatosTrabajadorUpdate } from './ChildDatosTrabajadorUpdate';
function DatosTrabajador({prop}) {
    




  return (
<>
      <Row>
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Nombre:</h4></label> 
            {prop.nombre==undefined?   <ChildDatosTrabajadorAdd dato={prop.nombre} referencia='Nombre' ID={prop.UID} />: <ChildDatosTrabajadorUpdate dato={prop.nombre} referencia='Nombre'  ID={prop.UID} />} 
            </Col>
         
            <Col className='text-center' >

            <label style={{color:'black' }}><h4>NSS:</h4></label> 

          {prop.nss==undefined? <ChildDatosTrabajadorAdd dato={prop.nss} referencia='nss'  ID={prop.UID} />: <ChildDatosTrabajadorUpdate dato={prop.nss} referencia='nss'   ID={prop.UID}/>}  
            
            </Col>
      </Row>
        
      <Row>
        <Col className='text-center'>
        <label style={{color:'black' }}><h4>Fecha de nacimiento:</h4></label> 

<br />
{prop.fechaNacimiento==undefined? <ChildDatosTrabajadorAdd dato={prop.fechaNacimiento} referencia='Fecha Nacimiento'  ID={prop.UID} />: <ChildDatosTrabajadorUpdate dato={prop.fechaNacimiento} referencia='Fecha Nacimiento'  ID={prop.UID}/>}
        </Col>
   
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Perfil:</h4></label> 
            {prop.perfil==undefined? <ChildDatosTrabajadorAdd dato={prop.perfil} referencia='Perfil'   ID={prop.UID}/>: <ChildDatosTrabajadorUpdate dato={prop.perfil} referencia='Perfil'   ID={prop.UID}/>}  
            </Col>

          </Row>


          <Row>
           

      <Col className='text-center' >
      <label style={{color:'black' }}><h4>Telefono:</h4></label> 
      {prop.telefono==undefined? <ChildDatosTrabajadorAdd dato={prop.telefono} referencia='Telefono'  ID={prop.UID}/>: <ChildDatosTrabajadorUpdate dato={prop.telefono} referencia='Telefono'  ID={prop.UID}/>}  
            </Col>
            
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Empresa:</h4></label> 
            {prop.empresa==undefined? <ChildDatosTrabajadorAdd dato={prop.empresa} referencia='Empresa'  ID={prop.UID}/>: <ChildDatosTrabajadorUpdate dato={prop.empresa} referencia='Empresa'  ID={prop.UID} />}  
            </Col>

          </Row>

          <Row>
          
          <Col className='text-center' >
          <label style={{color:'black' }}><h4>Domicilio:</h4></label> 
          {prop.domicilio==undefined? <ChildDatosTrabajadorAdd dato={prop.domicilio} referencia='Domicilio'  ID={prop.UID}/>: <ChildDatosTrabajadorUpdate dato={prop.domicilio} referencia='Domicilio'  ID={prop.UID}/>}  
            </Col>
            
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Email:</h4></label> 
            {prop.email==undefined? <ChildDatosTrabajadorAdd dato={prop.email} referencia='Email'   ID={prop.UID} />: <ChildDatosTrabajadorUpdate dato={prop.email} referencia='Email'   ID={prop.UID}/>}  
            </Col>
          </Row>

          <Row>
      <Form.Group className="position-relative mb-3">
            <Form.Label><strong>Agrega licencia</strong></Form.Label>
            <Form.Control
              type="file"
              required
              name="Agrega licencia"
              /* onChange={handleChange} */
             /*  isInvalid={!!errors.file} */
            />
           {/*  <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback> */}
          </Form.Group>
         </Row>

</>


    
  )
}

export default DatosTrabajador