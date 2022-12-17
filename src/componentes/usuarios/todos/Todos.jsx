import React, {useContext, useState, useEffect, useRef} from 'react'
import { Card,  Button,  Offcanvas, Form, Row, Col, Overlay, Popover } from 'react-bootstrap'
import {options,  optionsEmpresas} from '../options'
import { toCanvas, toDataURL } from 'qrcode';
import UsuariosContext from '../../../context/UsuariosContext';
import SelectSearch from "react-select-search";
import '../Usuarios.css'
export const Todos = () => {
  const {Usuarios,
    getUsuarios, 
    getUsersUnable, 
    
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

  const [Civiles, setCiviles] = useState([])
  const [Perfil, setPerfil] = useState('')
  const [Empresa, setEmpresa]=useState('')
  const [Id, setId] = useState('') 
  const [UserQr, setUserQr] = useState()
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






//console.log('Usuarios desde creado de usuarios:',Usuarios)
console.log('USUARIO SELECTO', OnlyUser)



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
  const [show1, setShow1] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  
  /* const handleClick =  */
const [QRurl, setQRurl]= useState()

 



  return (
    <Card className='formUsuarios' style={{ display:'contents', width: '70em', height:'45em'}}>

    <Card.Body>
    
    
    
    
       
        
      
    
      <Card className='content-users' style={{height: '47em'}}>
      {
      Civiles.map((e)=>(
       e.map((r)=>(
     <Card className={r.area}> 
                 <Card.Title ><h4><strong>{r.area}</strong></h4></Card.Title>  
     <div className='civiles'  style={{width: '74.8em', height: '28em' }} > 
     
     
     
     
     {r.data.map((s)=>(
     
     
       <Card  className='trabajadores' /* ref={ref} */ >
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
      <br/>
     <Row>
      <Col>   
      <Button variant='secondary' id='desactiva' onClick={
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
      </Col>
      <Col>   
      <Button variant='danger' id='desactiva' >
       foto  
      </Button>
      </Col>
      <Col>   
       <Button variant='danger' id='desactiva' 
      
        onClick={
        (event) => {
          setShow1(!show1);
          setTarget(event.target);
          setUserQr(s)
          toDataURL(`${s.Uid}`,  function (err, url) {
            console.log(url)
            setQRurl(url)
           
        
          })
       
        }
        
        }>
       QR
      </Button>
      <Overlay
        show={show1}
        target={target}
        placement="bottom"
        //container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">{UserQr?UserQr.nombre:null}</Popover.Header>
          <Popover.Body>

        <img  src={ QRurl }
         />
          
          <Button variant='success'>Descargar</Button>
          
          </Popover.Body>
        </Popover>
      </Overlay>
      </Col>

     </Row>
   
      
     
     
     </Card.Body>
      
     
      <Offcanvas show={show3} onHide={handleClose3} placement='end' responsive="lg">
      
      
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
    
    
  )
}
