import React, {useContext, useEffect, useRef, useState}  from 'react'
import UsuariosContext from '../../context/UsuariosContext'
import {  Button, Form, Row, Col, Alert} from 'react-bootstrap'
import AsignacionContext from '../../context/AsignacionContext'

export const FormActualizador = () => {
 const {UserChecador, fetchOnlyUser, OnlyUser} = useContext(UsuariosContext)
 
 const{candidatoActualizar}= useContext(AsignacionContext)

 console.log('proyecto a Actualizar: ', candidatoActualizar)
console.log('proyecto a Actualizar: ', candidatoActualizar.ubicacion)

     //const residenteRef= useRef()
     const ubicacionRef= useRef(candidatoActualizar.ubicacion)
     const presupuestoRef= useRef(candidatoActualizar.presupuesto)
     const obraRef =useRef(candidatoActualizar.obra)

/*   useEffect(()=>{
    fetchOnlyUser(values.residenteUid)
  },[]) */
  
/*   const [values, setValues] = useState('')
 //TODO: HANDLE
 
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value}); 
  
  
 } */

//you have residente:, ubicacion:, presupuesto, obra

  return (
    <Form>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Residente</Form.Label>
{UserChecador&&    
<Form.Select name="residenteUid"  /* value={values.residenteUid} onChange={handleInputChange} */ >
 <option></option>
{
 UserChecador.map((e)=>( 
     e.map((s)=>( 
        <option value={s.uid}>{s.nombre}</option>
       ))

))
} 
        </Form.Select>}
  </Form.Group></Col>


 
  <Col> <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>
<Form.Control type="String" name="ubicacion"   /*  value={values.ubicacion}   onChange={handleInputChange} */   placeholder={candidatoActualizar.ubicacion}  />

</Form.Group></Col></Row>
        <Row>
  <Col> <Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>
<Form.Control type="String" name="presupuesto"  /* value={values.presupuesto} onChange={handleInputChange} */  placeholder={candidatoActualizar.presupuesto} />

</Form.Group></Col>

<Col> <Form.Group className="mb-2" >
<Form.Label>Obra</Form.Label>
<Form.Control type="String" name="obra"  /* value={values.obra} onChange={handleInputChange} */  placeholder={candidatoActualizar.obra} />

</Form.Group></Col>
</Row>
<br/>
<br/>
<br/>
<br/>
<Row>
    <Col>
    <Button variant="success">Aceptar</Button></Col>
    <Col><Button variant="danger">Borrar</Button></Col>

</Row>
    </Form>
  )
}
