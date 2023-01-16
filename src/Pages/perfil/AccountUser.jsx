//habilItado
import { Button, Card, NavbarBrand, Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap'
import { UserAuth } from '../../context/AuthContext';
import './Account.css'

import React, { useEffect, useContext} from 'react'
import { 
  useNavigate, 
  Outlet
} from 'react-router-dom';
import  NavbarCepoint  from './Navbar';
import  GreyBar  from './GreyBar';
import { WhiteBoard } from './WhiteBoard';
export const AccountUser= () => {
 
  const {logout}= UserAuth();
  const navigate = useNavigate();
  


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

<NavbarCepoint handleLogout={handleLogout}/>
<Row>
  <Col xs={2}>
<GreyBar />
  </Col>
  <Col xs={10}>
  
<WhiteBoard/>
</Col>
</Row>






 {/* //area de herramienta  */}



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

