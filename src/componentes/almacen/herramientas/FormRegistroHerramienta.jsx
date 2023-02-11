import React, {useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Form, Button, Card, InputGroup} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
    useNavigate
  } from 'react-router-dom';
import UiContext from '../../../context/UiContext';
import { QR } from './QR';
import { SHA256 } from 'crypto-js';

export const FormRegistroHerramienta = () => {
    const {ToggleALMACEN, setToggleALMACEN}= useContext(UiContext)
    const navigate = useNavigate();
    const [IdHerramienta, setIdHerramienta] =useState()
   

    const data = 'niceNoise';
    const hash = SHA256(data).toString();
    
    console.log(hash);

    const data2 = 'niceNoise';
    const hash2 = SHA256(data2).toString();
    
    console.log(hash2);


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
        <h3>Descripcion</h3>
        <Form.Control type="text" />
        </Col>
        <Col><h3>Empresa a la que pertenece</h3>
        <Form.Control type="text" placeholder="haz select de empresas" />
        </Col>

    </Row>
    <Row>
        <Col>
        <h3>
            Fecha de ingreso
            </h3>
            
            <Form.Control type="text" placeholder="en automatico" />
            </Col>
        <Col>
        
        <h3>
            Modelo
            </h3>
            <Form.Control type="text" />
            </Col>

    </Row>
    <Row >
        <Col>
        <h3>
        Numero de serie
            </h3>
        <br />
        <Form.Control type="text" placeholder="" />
        </Col>
        <Col>
        <h3>Precio</h3>
        
        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)"   placeholder='Pesos'/>
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

       
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)"  placeholder='Dolares'/>
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

        </Col>

    </Row>

    <Row >
        <Col>
        <h3>   Quien recibio</h3>
     
        <Form.Control type="text"  placeholder="Haz select con trabajadores"  />
        </Col>
        <Col>
        <h3>Empresa donde se compro y entrego </h3>
        
        <Form.Control type="text" /* placeholder="Agrega la " */ />
        </Col>

    </Row>
<br />
    <Row >
        <Col>
      
        <Card 
        
        > 
        
            
          {IdHerramienta&&<QR dato={IdHerramienta }/>}
         
        

        </Card></Col>
        <Col><Card>
            <br />
            <br />
            <Button variant='dark'>Subir factura</Button>
            </Card></Col>

        
        

    </Row>
    <br />
    <Row>
        <Button variant='success'>
           <strong>Registrar Herramienta</strong> </Button>
    </Row>
       </Container>
  )
}
