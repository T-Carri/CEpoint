/* import { Button, Card, NavbarBrand} from 'react-bootstrap'
import { UserAuth } from '../../../context/AuthContext';
import '../Account.css'
import Asignador1 from '../../../componentes/asignador/Asignador1';
import {saveAsignacion} from '../../../services/indi'
import React, {useState} from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Routes,
  useNavigate, 
  Outlet
} from 'react-router-dom';
import Horario from '../../../componentes/horario/Horario'

 


export const AccountAdmin= () => {
    
  const {logout}= UserAuth();
  const navigate = useNavigate();
  
  // const[pulsadoHorario, setPulsadoHorario] = useState(false);
  // const[pulsadoAsignacion, setPulsadoAsignacion] = useState(false); 
  // const [welcome, setWelcome] = useState(true);
   
  
  //NAVEGACION DE PAGINA
  const handleSubmit= (data)=>{
    saveAsignacion(data)
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
          await logout(); 
          navigate('/');
          console.log('You are logged out')
        } catch(e) {
          console.log(e.message);
        
        }
      };
  
  return (

    
    <section className="cepoint">
<div className="Bienvenida">
    
          <nav className="navbar navbar-expand-lg bg-warning w-100 p-4 d-inline-block">
          <NavbarBrand className="logo" href="/">
           CEpoint administrador
         </NavbarBrand>
        <div className="d-grid gap-2  d-md-flex justify-content-md-end">
      
    <Button onClick={handleLogout}>logout</Button>
       
     </div>
          </nav>


</div>
   
    <div className="a1">
     
    <Button className="btnx1" variant="success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Trabaja en otras funciones</Button>
    <Button className="btnx2" onClick={handleAsignador}>Asignador</Button>
    <Button className="btnx3" onClick={handleHorario}>Asistencia</Button>
    <Button variant='danger' className="btnx3" onClick={()=>{navigate("asignadorEndiseño")}}>Asignador en prueba</Button>
    </div>
 
    <div className="a21"  >  
    

 <Outlet/>
    
     </div>
     
   
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
    </section>
    
    
    
   
  )
}

 */