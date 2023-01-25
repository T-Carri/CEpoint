import React, {useContext, useEffect, memo} from 'react'
import CEpointContext from '../../../context/CEpointContext';
import { Card, Button} from 'react-bootstrap'
import '../Usuarios.css'
 const Inactivos = () => {

    const {state, getUsersUnable, activateUser} = useContext(CEpointContext)
    
    
    
    useEffect(()=>{ 
      getUsersUnable()
      },[]) 

  
  
  return (
<Card className='formUsuarios' style={{ display:'contents', width: '70em', height:'45em'}}>
<Card.Body>
  <Card className='content-users' style={{height: '40em'}}>
 <Card > 
 <div className='inactivos'  style={{width: '74.8em', height: '28em' }} > 
 

  {state.UsuariosInactivosDetail? state.UsuariosInactivosDetail.map((s)=>(
 
 
   <Card  className='unable' >
 <Card.Body>
 <h6><strong>Cuenta inactiva</strong></h6>
 <Card.Title>{s.perfil}</Card.Title>
 <Card.Title><strong>{s.nombre}</strong></Card.Title>
 <Card.Title>{s.email}</Card.Title>
 <Card.Title>{s.password}</Card.Title>
 <Card.Title>{s.Uid}</Card.Title>
  
  <Button className='actualizarUser' variant='success' >
   Actualizar
  </Button>
  <br/>
  <br/>
 <Button variant='primary' id='desactiva' onClick={()=>{
      try {
        
          activateUser(s.UID)
      } catch (error) {
        console.log(error)
      }
        
      }}  >
   Activar
  </Button>
  
 
 
 </Card.Body>
  
 

  </Card>
 
 
 
 )):null}
  
 

  
 </div>
  </Card>
   
 
 

 </Card>
        

            
</Card.Body>
</Card>


  )
}


export default memo(Inactivos)



   
    
  

  
  
   
          
 
 
 



