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



<Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>Informacion de Trabajador</strong>  </Accordion.Header>
        <Accordion.Body>

          <Row>
            <Col>
            <InputGroup className="mb-3">
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
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza NSS
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          value={state.OnlyUser.nombre}
        />
</InputGroup>
            </Col>

          </Row>
          <Row>
            <Col>
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza fecha de nacimiento
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
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza perfil
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          value={state.OnlyUser.perfil}
        />
</InputGroup>
            </Col>

          </Row>


          <Row>
            <Col>
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza numero telefonico
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
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza empresa 
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          value={state.OnlyUser.empresa}
        />
</InputGroup>
            </Col>

          </Row>

          <Row>
            <Col>
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza Domicilio
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
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Actualiza Email 
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
        
        />
</InputGroup>
            </Col>

          </Row>

      <Row>
      <Form.Group className="position-relative mb-3">
            <Form.Label><strong>Agrega licencia</strong></Form.Label>
            <Form.Control
              type="file"
              required
              name="Agrega licencia"
              /* onChange={handleChange} */
             /*  isInvalid={!!errors.file} */
            />
           {/*  <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback> */}
          </Form.Group>
      </Row>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <strong>Informacion medica de trabajador</strong></Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col>   <Form.Select aria-label="Default select example">
      <option>Elige el tipo de sangre</option>
      <option value="A+ (A positivo)">A+ (A positivo)</option>
      <option value="A- (A negativo)">A- (A negativo)</option>
      <option value="B+ (B positivo)">B+ (B positivo)</option>
      <option value="B- (B negativo)">B- (B negativo)</option>
      <option value="AB+ (AB positivo)">AB+ (AB positivo)</option>
      <option value="AB- (AB negativo)">AB- (AB negativo)</option>
      <option value="O+ (O positivo)">O+ (O positivo)</option>
      <option value="O- (O negativo)">O- (O negativo)</option>
    </Form.Select></Col>
    <Col>
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Ingresa alergia
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          
        />
</InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Ingresa alguna enfermedad
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          
        />
</InputGroup>
            </Col>
            <Col>
            <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
          Ingresa historia clinica
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          
        />
</InputGroup>
            </Col>
          </Row>
        <Row>
          <Col>
          <Card>
          <Card.Header><strong>Alergias</strong></Card.Header>
            <Card.Body>-Example</Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
          <Card.Header><strong>Enfermedades</strong></Card.Header>
          <Card.Body>-Example</Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
          <Card.Header><strong>Historia clinica</strong></Card.Header>
          <Card.Body>-Example</Card.Body>
          </Card>
          </Col>

        </Row>
       
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
