import React, { Component, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Asignador.css'
import {Row, Form, Col, Button} from 'react-bootstrap'
export default class Asignador extends Component {
 
  //const [residente1, setResidente1] = useState(''); 
  



    render() {
        return (
            <div>
              <Row>
                <Col><h5>Elige el residente</h5></Col>
                <Col><h5>Elige el proyecto</h5></Col>
              </Row>
               
               
              <div className="asignacion1">
              
              <Row>
               <Col>
                <h6>Residente</h6>
   <Form.Select   aria-label="Default select example">
      <option>Elige</option>
      <option value="1">1A</option>
      <option value="2">1A2B</option>
      <option value="3">1A2B3C</option>
    </Form.Select>
                  
      </Col>
       <Col > 
       <h6>Proyecto</h6>
      <Form.Select aria-label="Default select example">
      <option>Asigna</option>
      <option value="1">1A</option>
      <option value="2">1A2B</option>
      <option value="3">1A2B3C</option>
    </Form.Select> </Col>
              </Row>
              </div>
             
             
              <div className="asignacion2">
              
              <Row>
               <Col>
                <h6>Residente</h6>
                <Form.Select aria-label="Default select example">
      <option>Elige</option>
      <option value="1">1A</option>
      <option value="2">1A2B</option>
      <option value="3">1A2B3C</option>
    </Form.Select>
                  
      </Col>
       <Col > 
       <h6>Proyecto</h6>
      <Form.Select aria-label="Default select example">
      <option>Asigna</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> </Col>
              </Row>
              </div>
              
              <div className="asignacion3">
              
              <Row>
               <Col>
                <h6>Residente</h6>
                <Form.Select aria-label="Default select example">
      <option>Elige</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                  
      </Col>
       <Col > 
       <h6>Proyecto</h6>
      <Form.Select aria-label="Default select example">
      <option>Asigna</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> </Col>
              </Row>
              </div>
              <Button className='enviar' variant="success">Enviar</Button>
            </div>
        )
    }
}
