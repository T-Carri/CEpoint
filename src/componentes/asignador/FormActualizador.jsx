import React, {useContext, useEffect, useRef, useState}  from 'react'
import UsuariosContext from '../../context/UsuariosContext'
import {  Button, Form, Row, Col, Alert} from 'react-bootstrap'
import AsignacionContext from '../../context/AsignacionContext'

export const FormActualizador = () => {
 const {UserChecador,  finderChecador, getUsuariosChecador,   UsuariosChecador, acUsChec, fetchOnlyUser, OnlyUser} = useContext(UsuariosContext)


 
 const{Proyecto,  idProyecto}= useContext(AsignacionContext)

 //console.log('proyecto a Actualizar: ', candidatoActualizar)
//console.log('proyecto a Actualizar: ', candidatoActualizar.ubicacion)

     //const residenteRef= useRef()
   /*   const ubicacionRef= useRef(candidatoActualizar.ubicacion)
     const presupuestoRef= useRef(candidatoActualizar.presupuesto)
     const obraRef =useRef(candidatoActualizar.obra) */

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

console.log('RESIDENTE UID', values.residenteUid)
  console.log('PROYECTO', idProyecto)
  console.log('OnlyUser.UID:  ',OnlyUser.UID)


  return (
    <Form>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Actualiza el responsable de checar en proyecto</Form.Label>
 {UserChecador&&    
<Form.Select name="residenteUid"/*    value={values.residenteUid}  */ onChange={handleInputChange}  >
 <option></option>
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
      acUsChec(idProyecto, values.residenteUid)
      fetchOnlyUser(  values.residenteUid)
     
    } catch (error) {
      console.log(error)
    }
    

  }}>Actualiza residente</Button>
  </Row>
  <br />
  <Col> <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>
<Form.Control type="String" name="ubicacion"  disabled /*  value={values.ubicacion}   onChange={handleInputChange} */  /* placeholder={candidatoActualizar.ubicacion}  */ />

</Form.Group></Col>
        <Row>
  <Col> <Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>
<Form.Control type="String" name="presupuesto" disabled /* value={values.presupuesto} onChange={handleInputChange}   placeholder={candidatoActualizar.presupuesto}*/ />

</Form.Group></Col>

<Col> <Form.Group className="mb-2" >
<Form.Label>Obra</Form.Label>
<Form.Control type="String" name="obra" disabled /* value={values.obra} onChange={handleInputChange}   placeholder={candidatoActualizar.obra}*/ />

</Form.Group></Col>
</Row>


    </Form>
  )
}
