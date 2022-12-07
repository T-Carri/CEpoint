import React from 'react'
import '../Usuarios.css'
import UsuariosContext from '../../../context/UsuariosContext';
export const Ocupados = () => {
    const { 
        Userun,
        activateUser
    }=useContext(UsuariosContext)
       
    useEffect(()=>{ 
        
    },[])


  return (
<Card className='formUsuarios' style={{ display:'contents', width: '70em', height:'45em'}}>
<Card.Body>
  <Card className='content-users' style={{height: '40em'}}>
 <Card > 
 <div className='inactivos'  style={{width: '74.8em', height: '28em' }} > 
 

  {Userun.map((s)=>(
 
 
   <Card  className='unable' >
 <Card.Body>
 <h6><strong>Usuario Ocupado</strong></h6>
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
 
 
 
 ))}
  
 

  
 </div>
  </Card>
   
 
 

 </Card>
        

            
</Card.Body>
</Card>

  )
}
