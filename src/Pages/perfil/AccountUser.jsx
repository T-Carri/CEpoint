//habilItado
import { Button, Card, NavbarBrand, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { UserAuth } from '../../context/AuthContext';
import './Account.css'

import React, { useEffect, useContext} from 'react'
import { 
  useNavigate, 
  Outlet
} from 'react-router-dom';
import UserContext from '../../context/AuthContext';


import UsuarioContext from '../../context/UsuarioContext';
export const AccountUser= () => {
 
  const {logout}= UserAuth();
  const navigate = useNavigate();
  const {asignador, lectorAsistencia, Usator, accessKey}=useContext(UsuarioContext)
  const {user} = useContext(UserContext)
  useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token')
    if(authToken){
        navigate('/account')
    }
    if(!authToken){
        navigate('/')
    }
},


[])

useEffect(()=>{
  accessKey()
}, [user])


  
  //NAVEGACION DE PAGINA
  const handleSubmit= (data)=>{
    //saveAsignacion(data)
    console.log(data)
  }
  
  const handleAsignador = () =>{
    navigate("asignador");
  }
  const handleHorario = () =>{
    navigate("horario");
  }
  
  //LOGOUT
  const handleLogout = async()=>{
        try{
          await logout().then(
            navigate('/'), 
            sessionStorage.removeItem('Auth Token')
           
          )
          console.log('You are logged out')
        } catch(e) {
          console.log(e.message);
        
        }
      };
  
  return (
<div>
<header> 
    {/* //navbar */}
    <Navbar bg="warning" variant="warning">
       
        <NavbarBrand id="logo" className="logo" href="/">
            <strong>
           CEpoint

            </strong>
         </NavbarBrand>
         
        
       
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Salir"
              menuVariant="dark"
              
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Button onClick={handleLogout}>logout</Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
         
      
      </Navbar>

   {/*  <nav className="navbar navbar-expand-lg bg-warning w-100 p-4 d-inline-block">
          <NavbarBrand className="logo" href="/">
            <strong>
           CEpoint

            </strong>
         </NavbarBrand>
        <div className="d-grid gap-2  d-md-flex justify-content-md-end">
      
    <Button onClick={handleLogout}>logout</Button>
       
     </div>
          </nav> */}
</header>
<div className="a1">

    
{Usator &&<Button variant='warning' className="btnx1" onClick={()=>{navigate("usuarios")}}>
 <strong>Usuarios
   </strong></Button>}

{lectorAsistencia && <Button className="btnx3" onClick={handleHorario}> <strong>Asistencia</strong></Button>}    
{asignador &&<Button variant='warning' className="btnx3" onClick={()=>{navigate("asignadorEndiseño")}}>
<strong> Asignador  </strong> </Button>}

<Button className="btnx1" variant="success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Trabaja en otras funciones</Button>



</div>

 {/* //area de herramienta  */}
<div className="a21"  >  


<Outlet/>

</div>


 {/* //canvas lateral */}
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" >
     

     <div class="offcanvas-header">
   <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Trabaja en las otras funciones</h5>
   <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
 </div>
 <div class="offcanvas-body">




   <p>
     Falta crear:
   
     -CONTROL DE ALMACEN POR Qr (APP)
     -INTERFAZ DE ASISTENCIA RECIBIDO EN "JSON (y)"
              tecnologias analizado: Ajax y axios para actualizar y detectar cuando recibo datos. 
               
     -CONVERTIDOR DE JSON A STRIN Y VICEVERSA 
     -INTEGRAR SOCKET.IO
     -SE TENDRA QUE HACER UN SERVER BACK END POSIBLEMENTE 
     CONECTAR AXIOS (CEpoint) CON EXPRESS (server)

      .</p>
 </div>




</div>
</div>
    

    
    
   
  )
}

