import React, {useContext, useEffect, memo} from 'react'
import UsuariosContext from '../../../context/UsuariosContext';
import { Card, Container, Toast, Button, Modal, Offcanvas, Row, Col, Form } from 'react-bootstrap'
import '../Usuarios.css'
 const Inactivos = () => {
    const { 
        Userun,
        activateUser,
        getUsersUnable
    }=useContext(UsuariosContext)
       
    useEffect(()=>{ 
      getUsersUnable()
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
 
 
 
 ))}
  
 

  
 </div>
  </Card>
   
 
 

 </Card>
        

            
</Card.Body>
</Card>


  )
}


export default memo(Inactivos)



   
    
  

  
  
   
          
 
 
 










/*

{
        Userun.map((e)=>
        (
      <div  >
      <Card id='cuentaInactiva' >
        <Card.Body>
        <h6><strong>Cuenta inactiva</strong></h6>
        <h6> Trabajador:<strong>{e.nombre}</strong></h6>
        <br/>
        <h6>Empresa: 
          <strong> 
           {e.empresa}
          </strong>
           </h6>
           <br/>
           <h6>Email: 
          <strong> 
           {e.UID}
          </strong>
           </h6>
           <br/>
      
      <h6>
        Perfil: <strong>
          {e.perfil}
        </strong>
      </h6>
      
      <br/>
      <Button className='UPDATE' variant='secondary' size='md' onClick={()=>{
      try {
        
          activateUser(e.UID)
      } catch (error) {
        console.log(error)
      }
        
      }} >Activar</Button>
        </Card.Body>
      </Card>
      
      </div>)
        )
      }

*/

/*

 {
        Userun.map((e)=>
        (
      <div  >
      <Card id='cuentaInactiva' >
        <Card.Body>
        <h6><strong>Cuenta inactiva</strong></h6>
        <h6> Trabajador:<strong>{e.nombre}</strong></h6>
        <br/>
        <h6>Empresa: 
          <strong> 
           {e.empresa}
          </strong>
           </h6>
           <br/>
           <h6>Email: 
          <strong> 
           {e.UID}
          </strong>
           </h6>
           <br/>
      
      <h6>
        Perfil: <strong>
          {e.perfil}
        </strong>
      </h6>
      
      <br/>
      <Button className='UPDATE' variant='secondary' size='md' onClick={()=>{
      try {
        
          activateUser(e.UID)
      } catch (error) {
        console.log(error)
      }
        
      }} >Activar</Button>
        </Card.Body>
      </Card>
      
      </div>)
        )
      }
*/