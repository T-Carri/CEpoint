import React, {useState} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




export const FormAsignador = () => {
    const [startDate, setStartDate] = useState(new Date());
    
const formAsig= {
 residente: '',
 ubicacion: '',
 presupuesto: '',
 obra: '', 
 horario:'', 
 Fecha_de_inicio: '',
 Fecha_de_final: '',
 
}
const [paquete, setPaquete] = useState(formAsig)



  return (


    <Form>
    <Row><Col> <Form.Group className="mb-2" >
<Form.Label>Residente</Form.Label>
<Form.Control type="String" placeholder="Agrega residente" />

</Form.Group></Col><Col> <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>
<Form.Control type="String" placeholder="Agrega Ubicacion" />

</Form.Group></Col></Row>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>
<Form.Control type="String" placeholder="Codigo de presupuestso" />

</Form.Group></Col></Row>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Fecha inicio</Form.Label>
<DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />

</Form.Group></Col></Row>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Fecha Final</Form.Label>
<DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />

</Form.Group></Col>
<Col><Button className='1a' variant='success' size='lg'  >Enviar</Button>
</Col></Row>
</Form>
  )
}
