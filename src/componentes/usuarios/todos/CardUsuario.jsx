import React,{useContext, useState} from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import UsuariosContext from '../../../context/UsuariosContext';
import { QrGen } from './QrGen';
import '../Usuarios.css'
import  ActualizaInfoUser  from './ActualizaInfoUser'
import UiContext from '../../../context/UiContext'
import { toCanvas, toDataURL } from 'qrcode';


 const CardUsuario = ({prop}) => {
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

        

    const{show3, handleClose3, handleShow3, show1, setShow1 }=useContext(UiContext)
    const [Id, setId] = useState('') 
    const [target, setTarget] = useState(null);
    const [QRurl, setQRurl]= useState()
    const [UserQr, setUserQr] = useState() 
    const [modalShow, setModalShow] =useState(false);
 
 
    return (
    
    <Card  className='trabajadores' /* ref={ref} */ >
     <Card.Body>
     
     <Card.Title>{prop.perfil}</Card.Title>
     <Card.Title><strong>{prop.nombre}</strong></Card.Title>
     <Card.Title>{prop.email}</Card.Title>
     <Card.Title>{prop.password}</Card.Title>
     <Card.Title>{prop.Uid}</Card.Title>
      

     <Button className='actualizarUser' variant='success' onClick={
        ()=>(
        
         handleShow3(),
         fetchOnlyUser(prop.Uid),
         setId(prop.Uid)
       )
       }>
       Actualizar
      </Button>,



     <ActualizaInfoUser prop={prop.Uid}/>
    
      <br/>
      <br/>
     <Row>
      <Col>   
       <Button variant='secondary' id='desactiva' onClick={
      ()=>{
       try {
         
           desactivaUser(prop.Uid)
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
      () => {
        setModalShow(true)
        toDataURL(`${prop.Uid}`,  function (err, url) {
          console.log(url)
          setQRurl(url)  })}}>
     QR
    </Button> 
    <QrGen   show={modalShow}
        onHide={() => setModalShow(false)}  trabajador={prop.nombre}  QRurl={QRurl}
      />  


      


      </Col>
    
     </Row>
   
      
     
     
     </Card.Body>
      
   
     
      </Card>
     



  )
}
export default React.memo(CardUsuario)