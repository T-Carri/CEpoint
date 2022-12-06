import React, {useState, useContext, useRef, useEffect} from 'react'
import { Card, Container, Toast, Button, Modal, Offcanvas, Row, Col, Form } from 'react-bootstrap'
import {options,  optionsEmpresas, searchArea} from './options'
import './Usuarios.css'
import { FormCreadorUser } from './FormCreadorUser'; 
import UsuariosContext from '../../context/UsuariosContext';
import SelectSearch from "react-select-search";
import {useNavigate} from 'react-router-dom'



export const Usuarios = () => {
  const {Usuarios,
     getUsuarios, 
     getUsersUnable, 
     Userun, 
     activateUser, 
     desactivaUser,
     fetchOnlyUser,
      OnlyUser, 
      acNombre, 
      acPerfil, 
      acEmpresa,
      ableChecador,
      enableChecador,
      setOnlyUser, 
      ableOcupado,
      enableOcupado, 
      ableAsignador, 
      enableAsignador, 
      ableAsistencias, 
      enableAsistencias 
    }=useContext(UsuariosContext)

    const navigate = useNavigate(); 
  const [showA, setShowA] = useState(false);
  const toggleShowA   = () => setShowA(!showA);
  const [Civiles, setCiviles] = useState([])
  const [Perfil, setPerfil] = useState('')
  const [Empresa, setEmpresa]=useState('')
  const [Id, setId] = useState('') 
  //console.log('id:', Id)
   //overlay
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [show3, setShow3] = useState(false);

   const handleClose3 = () => setShow3(false);
   const handleShow3 = () => setShow3(true);

//console.log('habilitados?:', Userun)

const CivilesWay = (props) => {

return props.reduce((past, current)=>{
  const foundItem = past.find(it=>it.area===current.area)
 //  console.log('past', past); 
const r=[]
r.push(past); 
setCiviles(r)
//console.log('perfiles', r);
if(foundItem){
  foundItem.data=foundItem.data
  ?[...foundItem.data, {
   'nombre': current.nombre,
   'perfil':current.perfil, 
   'email': current.email, 
   'password': current.password,   
   'Uid':current.UID,
   'empresa':current.empresa, 
   'asignador':current.asignador,
   'checador': current.checador, 
   'ocupado': current.ocupado, 
   'lectoreAsistencia': current.lectoreAsistencia}]
 :[{ 'nombre': current.nombre, 
 'perfil':current.perfil,
 'email': current.email, 
 'password': current.password,   
 'Uid':current.UID,
 'empresa':current.empresa, 
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
                  'empresa':current.empresa, 
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
  getUsuarios()},[])

  useEffect(()=>{
  
  CivilesWay(Usuarios)
  //electricosWay(Usuarios)
},[Usuarios]) 
  

const nombreRef =useRef("")

const empresaRef =useRef("")
//console.log(nombreRef.current.value)






//console.log('Usuarios desde creado de usuarios:',Usuarios)
console.log('USUARIO SELECTO', OnlyUser)






  return (
     
    <Container className="cardContenedora" style={{ width: '100em', height:'100%'}}>
    <Card.Body>
      <Card.Title>Gestion de usuarios</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para controlar usuarios</Card.Subtitle>
    
    
     <div className="usuarios" style={{display:'absolute'}} >

    <Card className='formUsuarios' style={{ display:'inline-block', width: '70em', height:'45em'}}>
   
    <Card.Body>



    
        <Button variant='success' onClick={toggleShowA} className="mb-2">
          <strong>+</strong>  Crear usuario
        </Button> <Button variant='success' onClick={()=>{navigate("todos")}} className="mb-2">
          todos
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


<div className='handle left-handle'></div>

{r.data.map((s)=>(


  <Card  className='trabajadores' >
<Card.Body>

<Card.Title>{s.perfil}</Card.Title>
<Card.Title><strong>{s.nombre}</strong></Card.Title>
<Card.Title>{s.email}</Card.Title>
<Card.Title>{s.password}</Card.Title>
<Card.Title>{s.Uid}</Card.Title>
 
 <Button className='actualizarUser' variant='success' onClick={
   ()=>(
   
    handleShow3(),
    fetchOnlyUser(s.Uid),
    setId(s.Uid)
  )
  }>
  Actualizar
 </Button>
 <br/>

<Button variant='warning' id='desactiva' onClick={
 ()=>{
  try {
    
      desactivaUser(s.Uid)
  } catch (error) {
    console.log(error)
  }
    
  }
}>
  Desactivar
 </Button>
 


</Card.Body>
 

 <Offcanvas show={show3} onHide={handleClose3} responsive="lg">
 
 
 <Offcanvas.Header closeButton>
  <Offcanvas.Title>{OnlyUser?OnlyUser.nombre:null}</Offcanvas.Title>
 </Offcanvas.Header>
 <Offcanvas.Body>
     <Form >
     <Form.Group className="mb-3" controlId="formGroup1">
   <Form.Label>Actualiza nombre</Form.Label>
   <Form.Control type="text" ref={nombreRef} placeholder={OnlyUser?OnlyUser.nombre:null} />
   <Button id='Cnombre' variant='primary' onClick={()=>{
    try {
  acNombre(OnlyUser.UID, nombreRef.current.value )  
  fetchOnlyUser(OnlyUser.UID)
   } catch (error) {
    console.log('No se puede porque:  ', error)
   }
  }}>Cambiar nombre</Button>
 </Form.Group>
 
 
 <Form.Group className="mb-3" controlId="formGroup1">
   <Form.Label>Actualiza perfil</Form.Label>
   <SelectSearch options={options}  onChange={setPerfil}
       search 
       name="perfil" placeholder={OnlyUser?OnlyUser.perfil:null} />
   
   <Button id='Cperfil' variant='success' onClick={()=>{
    try{
acPerfil(OnlyUser.UID, Perfil)
fetchOnlyUser(OnlyUser.UID)
    } catch(error){
      console.log('No se puede porque:  ', error)
    }
   }}>Actualiza</Button>
 </Form.Group>
 
 <Form.Group className="mb-3" controlId="formGroup1">
   <Form.Label>Actualiza empresa</Form.Label>
   <SelectSearch options={optionsEmpresas} 
       search   onChange={setEmpresa}
       name="empresa" placeholder={OnlyUser?OnlyUser.empresa:null} />
   
   <Button id='Cempresa' variant='success' 
   onClick={()=>{
    try {
      acEmpresa(OnlyUser.UID, Empresa)
      fetchOnlyUser(OnlyUser.UID)
    } catch (error) {
      
    }
   }}>Actualiza</Button>
 </Form.Group>
 
 <Form.Check 
        type="switch"
        id="custom-switch"
        label="¿Esta ocupado este usuario?"
        checked={OnlyUser?OnlyUser.ocupado:null}
        isValid={true}
        onChange={
          ()=>{
            OnlyUser.ocupado?enableOcupado(OnlyUser.UID):ableOcupado(OnlyUser.UID);
            fetchOnlyUser(OnlyUser.UID)
          }
        }
      />
      <br/>
      <Form.Check 
        type="switch"
        id="custom-switch"
        checked={OnlyUser?OnlyUser.checador:null}
        onChange={
          ()=>{
            OnlyUser.checador?enableChecador(OnlyUser.UID):ableChecador(OnlyUser.UID);
            fetchOnlyUser(OnlyUser.UID)
          }
        }
        isValid={true}
        label="¿Tiene habilitado el checador?"
      />
      <br/>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="¿Es asignador?"
        checked={OnlyUser?OnlyUser.asignador:null}
        isValid={true}
        onChange={
          ()=>{
            OnlyUser.asignador?enableAsignador(OnlyUser.UID):ableAsignador(OnlyUser.UID);
            fetchOnlyUser(OnlyUser.UID)
          }
        }
      />
      <br/>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="¿Es lector de asistencias?"
        checked={OnlyUser?OnlyUser.lectoreAsistencia:null}
        isValid={true}
        onChange={
          ()=>{
            OnlyUser.lectoreAsistencia?enableAsistencias(OnlyUser.UID):ableAsistencias(OnlyUser.UID);
            fetchOnlyUser(OnlyUser.UID)
          }
        }
      />
 </Form>    
   </Offcanvas.Body>
</Offcanvas>

 </Card>



))}


<div className='handle right-handle'></div>
 
</div>
 </Card>
  ))
 ))
}

     </Card>
            
   
                
    </Card.Body>
    </Card>

 <Card className='inactivos' style={{position:'absolute', display:'inline-block', width: '15em', height:'45em' }}>
       
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
 
       

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  
  )
}



//