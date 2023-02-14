import React from 'react'
import { useContext } from 'react';
import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
  useNavigate
} from 'react-router-dom';
import UiContext from '../../../context/UiContext'
//import {Almacen} from '../Almacen'
export const Prestado = () => {
  const navigate = useNavigate();

  const {setToggleALMACEN}= useContext(UiContext)

  return (
    <Container>
<div>ACTIVIDAD</div>
<Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" onClick={()=>{navigate("../../almacen",  {replace:true}) 
setToggleALMACEN(false)
}}><BsArrowLeftCircle />
                            </Button>
    </Container>
    
  )
}