import React, {useContext, useEffect, useRef, useState}  from 'react'
import UsuariosContext from '../../context/UsuariosContext'
import {  Button, Form, Row, Col,  Offcanvas, Badge } from 'react-bootstrap'
import AsignacionContext from '../../context/AsignacionContext'
import UiContext from '../../context/UiContext'
export const FormActualizador = ({IdProyecto}) => {
 const {UserChecador,  finderChecador, getUsuariosChecador,   UsuariosChecador, acUsChec, fetchOnlyUser, OnlyUser} = useContext(UsuariosContext)


 
 const{Proyecto, ChecadorAsignadouser,  idProyecto, 
  }= useContext(AsignacionContext)
 const{ show4, setShow4, handleClose4, handleShow4 }= useContext(UiContext)

 //console.log('proyecto a Actualizar: ', candidatoActualizar)
//console.log('proyecto a Actualizar: ', candidatoActualizar.ubicacion)

     //const residenteRef= useRef()
   /*   const ubicacionRef= useRef(candidatoActualizar.ubicacion)
     const presupuestoRef= useRef(candidatoActualizar.presupuesto)
     const obraRef =useRef(candidatoActualizar.obra) */




     // hooks que reducire proyecto

      useEffect(()=>{
      getUsuariosChecador()
    },[]) 
     
   useEffect( 
        ()=>{
           
          finderChecador(  UsuariosChecador)
        }
          ,[ UsuariosChecador]) 
  
     
          

   const [values, setValues] = useState('')
   const [Residente, setResidente] = useState('')
 
   //TODO: HANDLE
  
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value})
  
  
 }  

//you have residente:, ubicacion:, presupuesto, obra

/* console.log('RESIDENTE UID', values.residenteUid)
  console.log('PROYECTO', idProyecto)
  console.log('OnlyUser.UID:  ',OnlyUser.UID) */
console.log('id', Proyecto)

  return (


    <Offcanvas show={show4} onHide={handleClose4} placement='end' responsive="lg">
      
      
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>Informacion de proyecto:{' '}  {Proyecto?Proyecto.presupuesto:null}  </Offcanvas.Title>

    </Offcanvas.Header>
    <Offcanvas.Body> 
      <strong>Este Proyecto tiene asignado el checador en la sesion de: {'   '} </strong>
   <br/>
   <h3>

   <Badge bg='secondary'>                                
   {ChecadorAsignadouser?ChecadorAsignadouser.nombre:null}  
   </Badge>
   
   </h3>
   <Form>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Actualiza el responsable de checar en proyecto</Form.Label>
 {UserChecador&&    
<Form.Select name="residenteUid"   value={values.residenteUid}  onChange={handleInputChange}  >
 <option>Selcciona una cuenta para este proyecto</option>
{
 UserChecador.map((e)=>( 
     e.map((s)=>( 
        <option value={s.uid}>{s.nombre}</option>
       ))

))
} 
        </Form.Select>}  
  </Form.Group>
  </Col>
  <br />
  <br />
 <Button  className="mb-2" size='lg' variant='success' onClick={()=>{
    try {
      acUsChec( idProyecto, values.residenteUid)
      console.log('yeah you get it')
     
    } catch (error) {
      console.log(error)
    }
    

  }}>Actualiza residente</Button> 
  </Row>
  <br />
  <Col> <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>
{/* <Form.Control type="String" name="ubicacion"  disabled  value={values.ubicacion}   onChange={handleInputChange}  placeholder={candidatoActualizar.ubicacion}  /> */}

</Form.Group></Col>
        <Row>
  <Col> <Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>
{/* <Form.Control type="String" name="presupuesto" disabled  value={values.presupuesto} onChange={handleInputChange}   placeholder={candidatoActualizar.presupuesto} />
 */}
</Form.Group></Col>

<Col> <Form.Group className="mb-2" >
<Form.Label>Obra</Form.Label>
<Form.Control type="String" name="obra" disabled /* value={values.obra} onChange={handleInputChange}   placeholder={candidatoActualizar.obra}*/ />

</Form.Group></Col>
</Row>


    </Form>










   


      
     
        <Form >
      
   
    </Form>    
      </Offcanvas.Body>
   </Offcanvas>
 


)
}
































































   
 
