import React, {useState, useRef} from 'react'
import {  Button, Form, Col, Row,  InputGroup, ToggleButton, Overlay, Popover } from 'react-bootstrap'
export const ChildDatosTrabajadorAdd = ({dato, referencia}) => {

  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

switch(referencia){

  case 'Domicilio':
  return( 

    <Col ref={ref} >

          

    <ToggleButton
   className="mb-2"
   id="toggle-check"
   type="checkbox"
   variant="outline-danger"
   checked={checked}
   value="1"
   onChange={(e) => setChecked(e.currentTarget.checked)}
   onClick={handleClick}
 >
    Ingresa {referencia}
 </ToggleButton> 
 
 <Overlay
   show={show}
   target={target}
   placement="left"
   container={ref}
   containerPadding={20}
 >
   <Popover id="popover-contained">
     <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
     <Popover.Body>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
     </Popover.Body>
 
   </Popover>
 </Overlay>
</Col>



    
  )
  break;

  case 'Fecha Nacimiento':
  return( 

    <Col ref={ref} >

          

    <ToggleButton
   className="mb-2"
   id="toggle-check"
   type="checkbox"
   variant="outline-danger"
   checked={checked}
   value="1"
   onChange={(e) => setChecked(e.currentTarget.checked)}
   onClick={handleClick}
 >
    Ingresa {referencia}
 </ToggleButton> 
 
 <Overlay
   show={show}
   target={target}
   placement="left"
   container={ref}
   containerPadding={20}
 >
   <Popover id="popover-contained">
     <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
     <Popover.Body>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
     </Popover.Body>
 
   </Popover>
 </Overlay>
</Col>



    
  )
  break; 



default: return (
  <Col ref={ref} >

          

       <ToggleButton
      className="mb-2"
      id="toggle-check"
      type="checkbox"
      variant="outline-danger"
      checked={checked}
      value="1"
      onChange={(e) => setChecked(e.currentTarget.checked)}
      onClick={handleClick}
    >
       Ingresa {referencia}
    </ToggleButton> 
    
    <Overlay
      show={show}
      target={target}
      placement="left"
      container={ref}
      containerPadding={20}
    >
      <Popover id="popover-contained">
        <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
        <Popover.Body>
        <InputGroup className="mb-3">
      <Form.Control
        placeholder={dato}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-danger" id="button-addon2">
        Listo
      </Button>
    </InputGroup>
        </Popover.Body>
    
      </Popover>
    </Overlay>
  </Col>
)
}




  
}
