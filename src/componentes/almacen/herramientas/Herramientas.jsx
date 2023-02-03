import React from 'react'
import { useContext } from 'react';
import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
  useNavigate, Outlet
} from 'react-router-dom';
import AlmacenContext from '../../../context/AlmacenContext'; 
import UiContext  from '../../../context/UiContext';
//import {Almacen} from '../Almacen'
export const Herramientas = () => {
  const navigate = useNavigate();
  const {ToggleALMACEN, setToggleALMACEN}= useContext(UiContext)
 const {setToggle, Toggle}= useContext(AlmacenContext)
console.log(Toggle)
  return (
    
    <Container>
<div>Herramientas</div>
<Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" onClick={()=>{navigate("../../almacen",  {replace:true}) 
setToggle(false)
}}><BsArrowLeftCircle />
                            </Button>

<Button variant='success' onClick={()=>{
  setToggleALMACEN(true)
  navigate('agregaherramienta')}}><strong>Registra Herramienta</strong></Button>
<Button variant='success'> <strong>Herramientas prestadas</strong></Button>
<Button variant='danger'> <strong>Tecnologia de SICMA</strong></Button>
<br/>
<br/>
<InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Buscar</InputGroup.Text>
        <Form.Control
          placeholder="Busca herramienta"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

   {
ToggleALMACEN? <Outlet/>:<Nav variant="tabs" defaultActiveKey="/home">
<Nav.Item>
  <Nav.Link eventKey="link-1" ><strong><h5>Totales</h5></strong> </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-2" >
  
  <strong><h5>Herramienta de CE2000</h5></strong>
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-3" >
  
  <strong><h5>Herramienta de MCBRICK</h5></strong>
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-4" ><strong><h5>Herramienta de SECMA</h5></strong> </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-5" >

  <strong><h5>Herramienta de SIARSA</h5></strong>
  </Nav.Link>
</Nav.Item>
</Nav>
   }   

    </Container>
    
  )
}