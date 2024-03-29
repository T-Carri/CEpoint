import React, {useState, useContext, useRef} from 'react'
import { Card, Container, Toast, Button, Modal } from 'react-bootstrap'
import {getFirestore, updateDoc, arrayUnion, doc, onSnapshot, addDoc ,setDoc, collection, getDoc, query, where} from 'firebase/firestore'

import './Usuarios.css'

import { useEffect } from 'react';
import { FormCreadorUser } from './FormCreadorUser'; 
import UsuariosContext from '../../context/UsuariosContext';


export const CreadorUsuarios = () => {
  const {Usuarios, getUsuarios, getUsersUnable, Userun, setActualizador, activateUser}=useContext(UsuariosContext)
  const [showA, setShowA] = useState(false);
  const toggleShowA   = () => setShowA(!showA);
  const [Civiles, setCiviles] = useState([])
  const [Id, setId] = useState('') 
  console.log('id:', Id)
   //overlay
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  

console.log('habilitados?:', Userun)

const CivilesWay = (props) => {

return props.reduce((past, current)=>{
  const foundItem = past.find(it=>it.area===current.area)
   console.log('past', past); 
const r=[]
r.push(past); 
setCiviles(r)
console.log('perfiles', r);
if(foundItem){
  foundItem.data=foundItem.data
  ?[...foundItem.data, {
   'nombre': current.nombre,
   'perfil':current.perfil, 
   'email': current.email, 
   'password': current.password,   
   'Uid':current.UID, 
   'asignador':current.asignador,
   'checador': current.checador, 
   'ocupado': current.ocupado, 
   'lectoreAsistencia': current.lectoreAsistencia}]
 :[{ 'nombre': current.nombre, 
 'perfil':current.perfil,
 'email': current.email, 
 'password': current.password,   
 'Uid':current.UID, 
 'asignador':current.asignador,
 'checador': current.checador, 
 'ocupado': current.ocupado, 
 'lectoreAsistencia': current.lectoreAsistencia}]
  }else{ past.push(
    {
      'area': current.area, 
      'data':
                 [{ 
                  'nombre': current.nombre,
                  'perfil':current.perfil, 
                  'email': current.email, 
                  'password': current.password,   
                  'Uid':current.UID, 
                  'asignador':current.asignador,
                  'checador': current.checador, 
                  'ocupado': current.ocupado, 
                  'lectoreAsistencia': current.lectoreAsistencia
                  
                }]
      

})}
return past;

}, [])}
 








useEffect(()=>{
  getUsersUnable()
  getUsuarios()
  CivilesWay(Usuarios)
  //electricosWay(Usuarios)
},[])
  



console.log('Usuarios desde creado de usuarios:',Usuarios)



  return (
     
    <Container className="cardContenedora" style={{ width: '100em', height:'60em'}}>
    <Card.Body>
      <Card.Title>Gestion de usuarios</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para controlar usuarios test</Card.Subtitle>
    
    
     <div className="usuarios" style={{display:'absolute'}} >

    <Card className='formUsuarios' style={{ display:'inline-block', width: '70em', height:'45em'}}>
   
    <Card.Body>



    
        <Button variant='success' onClick={toggleShowA} className="mb-2">
          <strong>+</strong>  Crear usuario
        </Button>   <br />
        <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'40em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Creando usuario</strong>
            <small> # semana</small>
          </Toast.Header>
          <Toast.Body>
           <FormCreadorUser />
          </Toast.Body>
        </Toast>
      
    
      <Card className='content-users' style={{height: '40em'}}>


{
 Civiles.map((e)=>(
  e.map((r)=>(
<Card className={r.area}> 
            <Card.Title>{r.area}</Card.Title>  
<div className='civiles'  style={{width: '67.8em', height: '28em' }} > 

{r.data.map((s)=>(
 <Card  className='trabajadores' style={{width: '30em', height: '23em' }}>
<Card.Body>

<Card.Title>{s.perfil}</Card.Title>
<Card.Title>{s.nombre}</Card.Title>
<Card.Title>{s.email}</Card.Title>
<Card.Title>{s.password}</Card.Title>
<Card.Title>{s.Uid}</Card.Title>
 
 <Button className='actualizarUser' variant='success' onClick={
  ()=>(
    handleShow(),
    setId(s.Uid)
  )
  }>
  Actualizar
 </Button>
</Card.Body>
 <Modal show={show} onHide={handleClose} animation={true}  backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{Id.toString()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 {/* <Overlay
        show={show}
        target={target}
        placement="top"
      
        containerPadding={20}
      >
        <Popover id="popover-contained">
           <Popover.Header as="h3">Actualiza usuario</Popover.Header> 
          <Popover.Body>
            <Card>
      <Card.Body>
      <Card.Title>{s.nombre}</Card.Title>
          <Card.Title>{s.perfil}</Card.Title>
          <Card.Title>{s.email}</Card.Title>
          <Card.Title>{s.password}</Card.Title>
          <Card.Title>{s.Uid}</Card.Title>
        </Card.Body>        
      
            </Card>
          </Popover.Body>
        </Popover>
      </Overlay> */}
 </Card>



))}





 
</div>
 </Card>
  ))
 ))
}

{/* 
 <Card className='electrico'> 
<Card.Title>Electricos</Card.Title>
<div className='electricos'  style={{width: '67.8em', height: '25em' }}> 
</div>
 </Card>
 <Card className='shes'> 
<Card.Title>Seguridad e higiene</Card.Title>
<div className='she'  style={{width: '67.8em', height: '25em' }}> </div>
 </Card>
 <Card className='herrerias'> 
<Card.Title>Herreria</Card.Title>
<div className='herreria'  style={{width: '67.8em', height: '25em' }}> </div>
 </Card>
 <Card className='corporativos'> 
<Card.Title>Corporativo </Card.Title>
<div className='corporativo'  style={{width: '67.8em', height: '25em' }}> </div>
 </Card>
 <Card className='siarsas'> 
<Card.Title>Siarsa</Card.Title>
<div className='siarsa'  style={{width: '67.8em', height: '25em' }}> </div>
 </Card>
 <Card className='secmas'> 
<Card.Title>Secma</Card.Title>
<div className='secma'  style={{width: '67.8em', height: '25em'}}> </div>
 </Card>
 <Card className='solcoms'> 
<Card.Title>Solcom</Card.Title>
<div className='solcom'  style={{width: '67.8em', height: '25em' }}> </div>
 </Card>
 */}      </Card>
            
   
                
    </Card.Body>
    </Card>

 <Card className='inactivos' style={{position:'absolute', display:'inline-block', width: '15em', height:'45em' }}>
       
 {
  Userun.map((e)=>
  (
<div  >
<Card id='cuentaInactiva' >
  <Card.Body>
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
<Button className='UPDATE' variant='secondary' size='md' onClick={async()=>{
try {
  setActualizador(e.UID)
    activateUser()
} catch (error) {
  console.log(error)
}
  
}} >Activar</Button>
  </Card.Body>
</Card>

</div>)
  )
}
 
       

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  
  )
}



//