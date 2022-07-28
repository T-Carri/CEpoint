import {Form, Button, Card, NavbarBrand} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './Account.css'
import Asignador from '../../componentes/asignador/Asignador';






const Account=()=> {
    const {user,logout}= UserAuth();
    const navigate = useNavigate();

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
        <div className="Bienvenida">
         <nav className="navbar navbar-expand-lg bg-warning w-100 p-4 d-inline-block">
         <NavbarBrand className="logo" href="/">
          CEpoint
        </NavbarBrand>
       <div className="d-grid gap-2  d-md-flex justify-content-md-end">
     
   <Button onClick={handleLogout}>logout</Button>
      
    </div>
         </nav>
<div className="a1">
 
<Button className="btnx1" variant="success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Trabaja en otras funciones</Button>
    
</div>
<div className="a21"  >  
 <Card className="cardContenedora" style={{ width: '60em', height:'30em'}}>
      <Card.Body>
        <Card.Title>Asignador</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">controles para asignar a residentes proyectos</Card.Subtitle>
      
      
       <div className="asignador" ><Asignador/></div>
        
      </Card.Body>
    </Card></div>
   
    
    
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" >
      

      <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Trabaja en las otras funciones</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Falta crear:
    
      -CONTROL DE ALMACEN POR Qr (APP)
      -INTERFAZ DE ASISTENCIA RECIBIDO EN "JSON (y)"
               tecnologias analizado: Ajax y axios para actualizar y detectar cuando recibo datos. 
                
      -CONVERTIDOR DE JSON A STRIN Y VICEVERSA 
      -INTEGRAR SOCKET.IO
      -SE TENDRA QUE HACER UN SERVER BACK END POSIBLEMENTE 
      CONECTAR AXIOS (CEpoint) CON EXPRESS (server)

       .</p>

       <p>User Email: {user && user.email}</p>
  </div>




        </div>
   
   
    
    
    
        </div>
      );
    }
    
    export default Account; 

    /*<Card>
      <Card.Body>
        <Card.Title >Aguevo, eres un pinche campeón</Card.Title>
        
      </Card.Body>
    </Card>*/
