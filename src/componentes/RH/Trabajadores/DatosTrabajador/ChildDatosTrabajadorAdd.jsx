import React, {useState, useRef} from 'react'
import {  Button, Form, Col, Row,  InputGroup, ToggleButton, Overlay, Popover } from 'react-bootstrap'
export const ChildDatosTrabajadorAdd = ({dato}) => {

  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <>
  
            
            <br />
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
        Agrega datos
      </ToggleButton>
      
      <Overlay
        show={show}
        target={target}
        placement="top"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Actualiza nss</Popover.Header>
          <Popover.Body>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder={dato}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-danger" id="button-addon2">
          Agrega
        </Button>
      </InputGroup>
          </Popover.Body>
      
        </Popover>
      </Overlay>
    </>
  )
}
