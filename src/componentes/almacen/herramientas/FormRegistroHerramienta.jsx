import React, {useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
    useNavigate
  } from 'react-router-dom';
import UiContext from '../../../context/UiContext';
import { QR } from './QR';
export const FormRegistroHerramienta = () => {
    const {ToggleALMACEN, setToggleALMACEN}= useContext(UiContext)
    const navigate = useNavigate();
    const [IdHerramienta, setIdHerramienta] =useState()
   
    useEffect(()=>{

        async function fetchData() {
            await setIdHerramienta(uuidv4())
          }
          fetchData();
          
        }



    ,[])
console.log(IdHerramienta)

    //dowload qr

   

  return (
    <Container style={{backgroundColor: '#EAE2E0', padding:'2em' }} fluid >
        <Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" onClick={()=>{navigate("../../herramienta",  {replace:true}) 
setToggleALMACEN(false)
}}><BsArrowLeftCircle />
                            </Button>
      
    <Row>
        <Col>
        <h3>Concepto</h3>
        <Form.Control type="text" placeholder="Normal text" />
        </Col>
        <Col><h3>Empresa a la que pertenece</h3>
        <Form.Control type="text" placeholder="Normal text" />
        </Col>

    </Row>
    <Row>
        <Col>
        <h3>
            Fecha de ingreso
            </h3>
            
            <Form.Control type="text" placeholder="Normal text" />
            </Col>
        <Col>
        
        <h3>
            modelo
            </h3>
            <Form.Control type="text" placeholder="Normal text" />
            </Col>

    </Row>
    <Row >
        <Col>
        <h3>
        Numero de serie
            </h3>
        
        <Form.Control type="text" placeholder="Normal text" />
        </Col>
        <Col>
        Precio
        <Form.Control type="text" placeholder="Normal text" />
        </Col>

    </Row>

    <Row >
        <Col>
        <h3>   Quien recibio</h3>
     
        <Form.Control type="text" placeholder="Normal text" />
        </Col>
        <Col>
        <h3>Empresa donde se compro y entrego </h3>
        
        <Form.Control type="text" placeholder="Normal text" />
        </Col>

    </Row>
<br />
    <Row >
        <Col><Card 
        
        > 
            
          {IdHerramienta&&<QR dato={IdHerramienta }/>}
         
        

        </Card></Col>
        <Col><Card>factura</Card></Col>

        
        

    </Row>
    <br />
    <Row>
        <Button variant='success'>
           <strong>Registrar Herramienta</strong> </Button>
    </Row>
       </Container>
  )
}
