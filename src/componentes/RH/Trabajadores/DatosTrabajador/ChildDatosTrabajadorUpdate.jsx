import React, {useState, useRef} from 'react'
import {  Button, Form, Col, Row,  InputGroup, ToggleButton, Overlay, Popover } from 'react-bootstrap'


export const ChildDatosTrabajadorUpdate = ({dato}) => {

  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <Col>
    <h4 style={{ fontFamily: 'Monospace', color:'grey' }} >{dato}</h4>
            
            <br />
            <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-success"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
        onClick={handleClick}
      >
        Actualiza Nss
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
          Actualiza
        </Button>
      </InputGroup>
          </Popover.Body>
      
        </Popover>
      </Overlay>
    </Col>
  )
}
