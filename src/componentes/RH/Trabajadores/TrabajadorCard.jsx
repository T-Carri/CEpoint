import React,{useContext, useState} from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'

import CEpointContext from '../../../context/CEpointContext';
import { QrGen } from './QrGen';
//import './Trabajadores.css'
import { 
  useNavigate, 
} from 'react-router-dom';
import UiContext from '../../../context/UiContext'
import {  toDataURL } from 'qrcode';


 const TrabajadorCard = ({prop}) => {
  
    const {
        desactivaUser,
        fetchOnlyUser
       }=useContext(CEpointContext) 
       const navigate = useNavigate();
        

    const{ inFormulario, 
      setInFormulario }=useContext(UiContext)
    
  
    const [QRurl, setQRurl]= useState()
   
    const [modalShow, setModalShow] =useState(false);
 
 console.log(inFormulario)
    return (
    
    <Card  className='trabajadores' /* ref={ref} */ >
     <Card.Body>
     
     <Card.Title>{prop.perfil}</Card.Title>
     <Card.Title><strong>{prop.nombre}</strong></Card.Title>
     <Card.Title>{prop.email}</Card.Title>
     <Card.Title>{prop.password}</Card.Title>
     <Card.Title>{prop.Uid}</Card.Title>
      

     <Button className='actualizarUser' variant='success' onClick={
        ()=>{
          try {
            navigate(`formulariodatostrabajador/${prop.Uid}`)
            setInFormulario(true)
            
          } catch (error) {
            console.log(error)
          }}}>
       Datos trabajador
      </Button>,
            
            
    
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
export default TrabajadorCard
            
            


