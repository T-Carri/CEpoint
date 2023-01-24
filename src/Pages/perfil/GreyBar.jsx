import React, {useContext, useCallback} from 'react'
import { Button, Card, NavbarBrand, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import AlmacenContext from '../../context/AlmacenContext';

import CEpointContext from '../../context/CEpointContext';
import './Account.css'
import { 
    useNavigate
  } from 'react-router-dom';
 
 const GreyBar = () => {

 

    const {setToggle}=useContext(AlmacenContext)
    const {state}=useContext(CEpointContext)
 
    const navigate = useNavigate();
  //  const proyectosActivos = useCallback(getLinks(),[asig])
    return (

<div className="a1">
<Container>

    
{state.UsuarioSesion.usator?<Button variant='warning' className="btnx1" onClick={()=>{
  navigate("usuarios")

  }}>
 <strong>Usuarios
   </strong></Button>:null}

{state.UsuarioSesion.lectorAsistencia? <Button className="btnx2"  onClick={() =>{
    navigate("horario");
  }}> <strong>Asistencia</strong></Button>:null}    
{state.UsuarioSesion.asignador?<Button variant='warning' className="btnx3" onClick={()=>{navigate("asignadorEndiseño")}}>
<strong> Asignador  </strong> </Button>:null}
{state.UsuarioSesion.almacen?<Button variant='dark' className="btnx4" onClick={()=>{navigate("almacen")
setToggle(false)
}}>
<strong> Almacen  </strong> </Button>:null}
<Button className="btnx1" variant="success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Trabaja en otras funciones</Button>



</Container>
</div>

  )
}

export default React.memo(GreyBar)