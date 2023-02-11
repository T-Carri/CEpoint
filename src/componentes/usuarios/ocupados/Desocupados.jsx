import React, {memo, useContext, useEffect} from 'react'
//import '../Usuarios.css'
import { Card } from 'react-bootstrap'

import CEpointContext from '../../../context/CEpointContext';
 const Desocupados = () => {
    const { 
       state, 
        getUsersNoBussy
    }=useContext(CEpointContext)
       
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
 

  {state.UsuariosDesocupados.map((s)=>(
 
 
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

export default memo(Desocupados)