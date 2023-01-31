import React, {useContext, useState} from 'react'
import { Container, Button, Card, Form, Col, Accordion, Row, Modal, Tab, Tabs, InputGroup } from 'react-bootstrap'
import {BsArrowLeftCircle, BsPersonPlusFill, BsHandThumbsDownFill} from 'react-icons/bs'
import UiContext from '../../../context/UiContext'
import CEpointContext from '../../../context/CEpointContext'
import { TYPES } from '../../../redux/Types'
export const FormularioDatosTrabajador = () => {
  const{ inFormulario, 
    setInFormulario }= useContext(UiContext)  
    const [key, setKey] = useState('almacen');
    const{ state, dispatch }= useContext(CEpointContext)  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (

    <Container  style={{backgroundColor: '#EAE2E0' }} fluid>
        


<Row>
  <Col><Card><h1>{state.OnlyUser.nombre}</h1>
 <Row>
  <Col>
   <strong>{state.OnlyUser.area}</strong>
   <br />
  <strong>{state.OnlyUser.perfil}</strong>
  </Col>
  <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{' '}
  <Button variant='danger' onClick={handleShow}><strong>Dar de baja</strong><BsHandThumbsDownFill/></Button>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Se dara de baja a:  </Modal.Title>
        </Modal.Header> 
        <Modal.Body className='text-center'>
        <strong><h3>{state.OnlyUser.nombre}</h3></strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success">Aceptar</Button>
        </Modal.Footer>
      </Modal>
  </Col>

  </Row>
 





</Card></Col>
  <Col> <Card className='align-center'  style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EAE2E0'}}>
  <BsPersonPlusFill style={{width:'7em', height: '7em'}}/>
</Card>

 
  </Col>

</Row>



<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Informacion de Trabajador</strong>  </Accordion.Header>
        <Accordion.Body>

        <InputGroup className="mb-3">
          <Row>
            <Col>
            <InputGroup className="mb-3"></InputGroup>
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza nombre
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          value={state.OnlyUser.nombre}
        />
</InputGroup>
            </Col>
            <Col>
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza NSS
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          value={state.OnlyUser.nombre}
        />
            </Col>

          </Row>

<Row><Col>
<Button variant="outline-secondary" id="button-addon1">
          Actualiza fecha de nacimiento
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          value={state.OnlyUser.nombre}
        />
</Col></Row>






      

         //NSS
         //Fecha de nacimiento
         //DIRECCION
         //TELEFONO
         //EMAIL

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <strong>Informacion medica de trabajador</strong></Accordion.Header>
        <Accordion.Body>
        //Tipo de sangre 
        //alergias
        //enfermedades
        //Historial clinico
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <strong>Expediente </strong></Accordion.Header>
        <Accordion.Body>
          
//Documentos escaneados
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Estado del trabajador</strong> </Accordion.Header>
        <Accordion.Body>
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="almacen" title="Almacen">
      //Herramientas
      //Miscelaneos
      //Maquinaria
      </Tab>
      <Tab eventKey="nomina" title="Nomina">
       //Nomina
      </Tab>
   
    </Tabs>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>







<Form>











</Form>





<Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" 
         onClick={()=>{
          setInFormulario(false)
          dispatch({type: TYPES.FETCH_ONLYUSER, payload:'' })
         }}>  
         <BsArrowLeftCircle /> Trabajadores  </Button>



    </Container>
   
  )
}
