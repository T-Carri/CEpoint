import React, {useContext, useState} from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
  useNavigate, Outlet
} from 'react-router-dom';
import UiContext from '../../context/UiContext';
import { Container, Button, Form, InputGroup, Nav } from 'react-bootstrap'
import TrabajadoresCards from './Trabajadores/TrabajadoresCards';
export const Trabajadores = () => {
  const navigate = useNavigate();
  const {ToggleRH, setToggleRH,  inFormulario
     }=useContext(UiContext)
 
  return (


    <Container fluid>
   
    <Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" 
    onClick={()=>{
      navigate("../../recursosHumanos",  {replace:true}) 
      setToggleRH(false)
    }}><BsArrowLeftCircle /> Home
                                </Button>
    
    <div className="maquinas">
 
    </div>
    
  {inFormulario?<Outlet/>: <TrabajadoresCards/> }   
    
        </Container>
  )
}
