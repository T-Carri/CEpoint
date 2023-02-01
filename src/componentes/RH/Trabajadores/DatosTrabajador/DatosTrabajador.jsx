import React, {useState, useRef} from 'react'
import {  Button, Form, Col, Row,  InputGroup, ToggleButton, Overlay, Popover } from 'react-bootstrap'
import DatePicker,  { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { ChildDatosTrabajadorAdd } from './ChildDatosTrabajadorAdd';
import { ChildDatosTrabajadorUpdate } from './ChildDatosTrabajadorUpdate';
function DatosTrabajador({prop}) {
    




  return (
<>
      <Row>
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Nombre:</h4></label> 
            {prop.nombre==''?   <ChildDatosTrabajadorAdd dato={prop.nombre} />: <ChildDatosTrabajadorUpdate dato={prop.nombre} />} 
            </Col>
         
            <Col className='text-center' >

            <label style={{color:'black' }}><h4>NSS:</h4></label> 

          {prop.nss==''?   <ChildDatosTrabajadorAdd dato={prop.nss} />: <ChildDatosTrabajadorUpdate dato={prop.nss} />}  
            
            </Col>
      </Row>
        
      <Row>
        <Col className='text-center'>
        <label style={{color:'black' }}><h4>Fecha de nacimiento:</h4></label>  <label style={{color:'grey' }}><h4>Fecha de nacimiento</h4></label>

<br />
<ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-success"
        checked={checkedNacimiento}
        value="1"
        onChange={(e) => setCheckedNacimiento(e.currentTarget.checked)}
        onClick={handleClickNacimiento}
      >
        Actualiza Fecha de nacimiento
      </ToggleButton>
      
      <Overlay
        show={showNacimiento}
        target={targetNacimiento}
        placement="top"
        container={}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Actualiza fecha de nacimiento</Popover.Header>
          <Popover.Body>
          <DatePicker 
/* selected={startDate}  */
/* onChange={async(date) => {
await setStartDate(date)
await createUsuario('edad', calcularEdad(date))



}} */
locale="es"

/> 






          </Popover.Body>
      
        </Popover>
      </Overlay>

        </Col>
   
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Perfil:</h4></label> 
            {prop.perfil==''?   <ChildDatosTrabajadorAdd dato={prop.perfil} />: <ChildDatosTrabajadorUpdate dato={prop.perfil} />}  
            </Col>

          </Row>


          <Row>
           

      <Col className='text-center' >
      <label style={{color:'black' }}><h4>Telefono:</h4></label> 
      {prop.telefono==''?   <ChildDatosTrabajadorAdd dato={prop.telefono} />: <ChildDatosTrabajadorUpdate dato={prop.telefono} />}  
            </Col>
            
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Empresa:</h4></label> 
            {prop.empresa==''?   <ChildDatosTrabajadorAdd dato={prop.empresa} />: <ChildDatosTrabajadorUpdate dato={prop.empresa} />}  
            </Col>

          </Row>

          <Row>
          
          <Col className='text-center' >
          <label style={{color:'black' }}><h4>Domicilio:</h4></label> 
          {prop.domicilio==''?   <ChildDatosTrabajadorAdd dato={prop.domicilio} />: <ChildDatosTrabajadorUpdate dato={prop.domicilio} />}  
            </Col>
            
            <Col className='text-center' >
            <label style={{color:'black' }}><h4>Email:</h4></label> 
            {prop.email==''?   <ChildDatosTrabajadorAdd dato={prop.email} />: <ChildDatosTrabajadorUpdate dato={prop.email} />}  
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