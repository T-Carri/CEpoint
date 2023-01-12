import React, {useContext} from 'react'
import { Button, Card, NavbarBrand, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import AlmacenContext from '../../context/AlmacenContext';
import UsuarioContext from '../../context/UsuarioContext';
import './Account.css'
import { 
    useNavigate
  } from 'react-router-dom';
 const GreyBar = ({}) => {

    const {setToggle}=useContext(AlmacenContext)
    const {asignador, lectorAsistencia, Usator, accessKey, Almacen}=useContext(UsuarioContext)
 
    const navigate = useNavigate();
 
    return (

<div className="a1">
<Container>

    
{Usator?<Button variant='warning' className="btnx1" onClick={()=>{navigate("usuarios")}}>
 <strong>Usuarios
   </strong></Button>:null}

{lectorAsistencia? <Button className="btnx2"  onClick={() =>{
    navigate("horario");
  }}> <strong>Asistencia</strong></Button>:null}    
{asignador?<Button variant='warning' className="btnx3" onClick={()=>{navigate("asignadorEndiseño")}}>
<strong> Asignador  </strong> </Button>:null}
{Almacen?<Button variant='dark' className="btnx4" onClick={()=>{navigate("almacen")
setToggle(false)
}}>
<strong> Almacen  </strong> </Button>:null}
<Button className="btnx1" variant="success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Trabaja en otras funciones</Button>



</Container>
</div>

  )
}

export default React.memo(GreyBar)