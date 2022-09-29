import React, {useState} from 'react'
import { Card, Container, Toast, Button, Form, Row, Col} from 'react-bootstrap'
import './Asignador.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DateTime} from 'luxon';
export const Asignadorendiseño = () => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    const [startDate, setStartDate] = useState(new Date());
    const date = DateTime.now().weekNumber
  return (
    
    <Container className="cardContenedora" style={{ width: '70em', height:'45em'}}>
    <Card.Body>
      <Card.Title>Asignador</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">controles para asignar a residentes proyectos</Card.Subtitle>
    
    
     <div className="asignador" style={{display:'absolute'}} >

    <Card className='formAsignacion' style={{ display:'inline-block', width: '45em', height:'30em'}}>
   
    <Card.Body>
    <Button onClick={toggleShowA} className="mb-2">
          <strong>+</strong>  Agrega asignacion
        </Button>
        <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'29em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Asignador</strong>
            <small> #{date} semana</small>
          </Toast.Header>
          <Toast.Body>
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
          </Toast.Body>
        </Toast>
    </Card.Body>
    </Card>

 <Card className='asignaciones' style={{position:'absolute', display:'inline-block', width: '15em', height:'30em'}}>

    </Card>    
    </div>
      
    </Card.Body>
  </Container>
  

  )
}

