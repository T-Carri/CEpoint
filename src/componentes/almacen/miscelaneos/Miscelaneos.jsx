import React from 'react'
import { useContext } from 'react';
import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
  useNavigate
} from 'react-router-dom';
import UiContext from '../../../context/UiContext'
//import {Almacen} from '../Almacen'
export const Miscelaneos = () => {
  const navigate = useNavigate();

const { setToggleALMACEN}= useContext(UiContext)

  return (
    <Container>
<div>Miscelaneos</div>
<Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" onClick={()=>{navigate("../../almacen",  {replace:true}) 
setToggleALMACEN(false)
}}><BsArrowLeftCircle />
                            </Button>
<Button variant='success'><strong>Totales en existencia</strong></Button> 
<Button variant='success'><strong>Ingresos de Miscelaneos</strong></Button>
<Button variant='success'> <strong>Miscelaneos solicitados</strong></Button>
<br/>
<br/>
<InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Buscar</InputGroup.Text>
        <Form.Control
          placeholder="Busca miscelaneo"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link /* href="/home" */ eventKey="link-0"> <strong><h5>Miscelaneos SICMA</h5></strong></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" ><strong><h5>Misceláneos de SECMA</h5></strong> </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" >
        
        <strong><h5>Misceláneos de CE2000</h5></strong>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" >
      
        <strong><h5>Misceláneos de SIARSA</h5></strong>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" >
        
        <strong><h5>Misceláneos de MCBRICK</h5></strong>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    
  )
}
