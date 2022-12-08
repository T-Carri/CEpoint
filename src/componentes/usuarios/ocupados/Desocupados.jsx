import React, {useContext, useEffect} from 'react'
import '../Usuarios.css'
import { Card, Container, Toast, Button, Modal, Offcanvas, Row, Col, Form } from 'react-bootstrap'
import UsuariosContext from '../../../context/UsuariosContext';
export const Desocupados = () => {
    const { 
       
        getUsersNoBussy, 
        UserNoBussy
    }=useContext(UsuariosContext)
       
    useEffect(()=>{ 
    
        getUsersNoBussy()
    },[])


  return (
<Card className='formUsuarios' style={{ display:'contents', width: '70em', height:'45em'}}>
<Card.Title> <h4><strong>Usuarios desocupados</strong></h4></Card.Title>  
<Card.Body>
  <Card className='content-users' style={{height: '40em'}}>
 <Card > 
 <div className='desocupados'  style={{width: '74.8em', height: '28em' }} > 
 

  {UserNoBussy.map((s)=>(
 
 
   <Card  className='Nobussy' >
 <Card.Body>
 <h6><strong>Usuario desocupado</strong></h6>
 <Card.Title>{s.perfil}</Card.Title>
 <Card.Title><strong>{s.nombre}</strong></Card.Title>
 <Card.Title>{s.email}</Card.Title>
 <Card.Title>{s.password}</Card.Title>
 <Card.Title>{s.Uid}</Card.Title>
  <br />
  <br />
  

  
  
 
 
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
