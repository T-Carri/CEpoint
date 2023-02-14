import React from 'react'
import { useContext } from 'react';
import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
  useNavigate
} from 'react-router-dom';
import UiContext from '../../../context/UiContext'
export const Maquinaria = () => {
  const navigate = useNavigate();

  const { setToggleALMACEN}= useContext(UiContext)

  return (
    <Container>
<div>Maquinaria</div>
<Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" 
onClick={()=>{
  navigate("../../almacen",  {replace:true}) 
  setToggleALMACEN(false)
}}><BsArrowLeftCircle />
                            </Button>

<div className="maquinas">
  
</div>


    </Container>
    
  )
}
