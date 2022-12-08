import React, {useContext, useEffect} from 'react'
import '../Usuarios.css'
import { Card, Container, Toast, Button, Modal, Offcanvas, Row, Col, Form } from 'react-bootstrap'
import UsuariosContext from '../../../context/UsuariosContext';
export const Ocupados = () => {
    const { 
      enableOcupado,
      getUsersBussy, 
              UserBussy,
      
            }=useContext(UsuariosContext)
        
      
        
       
    useEffect(()=>{ 
        getUsersBussy() 
      
    },[])


  return (
<Card className='formUsuarios' style={{ display:'contents', width: '70em', height:'45em'}}>
<Card.Title> <h4><strong>Usuarios ocupados</strong></h4></Card.Title>  
<Card.Body>
  <Card className='content-users' style={{height: '40em'}}>
 <Card > 
 <div className='ocupados'  style={{width: '74.8em', height: '28em' }} > 
 

  {UserBussy.map((s)=>(
 
 
   <Card  className='bussy' >
 <Card.Body>
 <h6><strong>Usuario Ocupado</strong></h6>
 <Card.Title>{s.perfil}</Card.Title>
 <Card.Title><strong>{s.nombre}</strong></Card.Title>
 <Card.Title>{s.email}</Card.Title>
 <Card.Title>{s.password}</Card.Title>
 <Card.Title>{s.UID}</Card.Title>
  <br />
  <br />
  
  <Button className='actualizarUser' variant='secondary' onClick={
               ()=>{
                 enableOcupado(s.UID);
                 
               }
             } >
   Desocupar
  </Button>
  
  
 
 
 </Card.Body>
  
 

  </Card>
 
 
 
 ))}
  
 

  
 </div>
  </Card>
   
 
 

 </Card>
        

            
</Card.Body>
</Card>

  )
}
