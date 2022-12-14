import React from 'react'
import { useContext } from 'react';
import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
  useNavigate
} from 'react-router-dom';
import AlmacenContext from '../../../context/AlmacenContext';
//import {Almacen} from '../Almacen'
export const Maquinaria = () => {
  const navigate = useNavigate();

 const {setToggle, Toggle}= useContext(AlmacenContext)
console.log(Toggle)
  return (
    <Container>
<div>Maquinaria</div>
<Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" onClick={()=>{navigate("../../almacen",  {replace:true}) 
setToggle(false)
}}><BsArrowLeftCircle />
                            </Button>
    </Container>
    
  )
}
