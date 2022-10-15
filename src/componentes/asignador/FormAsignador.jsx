import React, {useState} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAuth } from 'firebase/auth'; 



export const FormAsignador = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const auth = getAuth()
    const dato =auth.currentUser; 
const formAsig= {
  activa: true,
  horario:'', 
  obra: '', 
  idAsignador: dato.uid,
  presupuesto: '',
  asistencias:[],
  residente: '',
  ubicacion: '',
 
}
const [values, setValues] = useState(formAsig)
 //TODO: HANDLE
 
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value}); 
  
  
 }
 

 //TODO: ONCHANGE

const handleSubmit = (e) =>  {
  e.preventDefault(); 
  console.log(values);
  props.addOrEdit(values);
}



//agregar onChange con handleInputChange and name=""

  return (


    <Form onSubmit={handleSubmit}>
    <Row><Col> <Form.Group className="mb-2" >
<Form.Label>Residente</Form.Label>
<Form.Control type="String" name="residente" onChange={handleInputChange} placeholder="Agrega residente" />

</Form.Group></Col><Col> <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>
<Form.Control type="String" name="ubicacion" onChange={handleInputChange} placeholder="Agrega Ubicacion"  />

</Form.Group></Col></Row>
<Row>
  <Col> <Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>
<Form.Control type="String" name="presupuesto" onChange={handleInputChange} placeholder="Codigo de presupuestso" />

</Form.Group></Col>

<Col> <Form.Group className="mb-2" >
<Form.Label>Obra</Form.Label>
<Form.Control type="String" name="obra" onChange={handleInputChange} placeholder="Codigo de presupuestso" />

</Form.Group></Col>
</Row>

<Row>
  <Col>
  <Form.Select name='horario'  onChange={handleInputChange} aria-label="Default select example">
      <option>Turno</option>
      <option value="matutino">Matutino</option>
      <option value="vespertino">Vespertino</option>
      <option value="nocturno">Nocturno</option>
    </Form.Select>
  </Col>
<Col>
<Button className='1a' variant='success' size='lg' type="submit"  >Enviar</Button>
</Col>
</Row>
</Form>
  )
}






/*
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Fecha inicio</Form.Label>
<DatePicker selected={startDate}  name="Fecha_de_inicio" onChange={(date)=>setStartDate(date)} />

</Form.Group></Col></Row>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Fecha Final</Form.Label>
<DatePicker selected={startDate} name="Fecha_de_final" onChange={handleInputChange} />

</Form.Group></Col>
</Row>


*/
