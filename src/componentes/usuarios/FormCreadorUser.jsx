import React, {useState} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAuth } from 'firebase/auth'; 
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export const FormCreadorUser = () => {
    //necesario para registrar  en dos modalidades, manual y por google unicamente
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [radioValueAsis, setRadioValueAsis] = useState(false);
    const [radioValueAsig, setRadioValueAsig] = useState(false);
    const [radioValueChec, setRadioValueChec] = useState(false);
    const radiosAsis = [
      { name: 'Deshabilitado', value: false },
      { name: 'Habilitar', value: true },
      
    ];
    const radiosAsig = [
      { name: 'Deshabilitado', value: false },
      { name: 'Habilitar', value: true },
      
    ];
    const radiosChec = [
      { name: 'Deshabilitado', value: false },
      { name: 'Habilitar', value: true },
      
    ];
  

const auth = getAuth()
const dato =auth.currentUser; 
const formCreatorUser= {
  activo: false ,
  email: '', 
  empresa:'', 
  esAsignador:false, 
  esChecador:false,
  leeAsistencias:false, 
  nombre: '',  
  perfil: '', 
}

const [values, setValues] = useState(formCreatorUser)
 //TODO: HANDLE
 
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value}); 
  
  
 }
 

 //TODO: ONCHANGE
/* 
const handleSubmit = (e) =>  {
  e.preventDefault(); 
  console.log(values);
  props.addOrEdit(values);
} */



//agregar onChange con handleInputChange and name=""

  return (


<Form /* onSubmit={handleSubmit} */>
    <Row>
        <Col> <Form.Group className="mb-2" >
                 <Form.Label>Email</Form.Label>
<Form.Control type="String" name="email" onChange={handleInputChange} placeholder="Correo" />
              </Form.Group></Col>
       <Col> <Form.Group className="mb-2" >
                <Form.Label>Password</Form.Label>
<Form.Control type="String" name="password" onChange={handleInputChange} placeholder="password"  />
           </Form.Group></Col>
</Row>
<Row>
<Col> <Form.Group className="mb-2" >
               <Form.Label>Nombre del trabajador</Form.Label>
<Form.Control type="String" name="obra" onChange={handleInputChange} placeholder="Nombre" />

            </Form.Group></Col>
<Col>
<Form.Label>Elige su empresa</Form.Label>
<Form.Select name='empresas'  onChange={handleInputChange} aria-label="Default select example">
      <option>Empresas</option>
      <option value="CE2000">CE2000</option>
      <option value="SECMA">SECMA</option>
      <option value="SIARSA">SIARSA</option>
      <option value="MCBRICK">MCBRICK</option>
      <option value="SOLCOM">SOLCOM</option>
      <option value="INMOVILIARIA">INMOVILIARIA</option>
    </Form.Select>
     </Col>
     

    
</Row>
<Row>

<Col>  
     <Form.Label><strong> Habilitar informacion de asistencias</strong>  </Form.Label>
     <ButtonGroup>
        {radiosAsis.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-warning' : 'outline-danger'}
            name="radio1"
            value={radio.value}
            checked={radioValueAsis === radio.value}
            onChange={(e) => setRadioValueAsis(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup></Col>
      <Col>  
     <Form.Label><strong> Asignador</strong>  </Form.Label>
     <ButtonGroup>
        {radiosAsig.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-warning' : 'outline-danger'}
            name="radio2"
            value={radio.value}
            checked={radioValueAsig === radio.value}
            onChange={(e) => setRadioValueAsig(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup></Col>
      <Col>  
     <Form.Label><strong> Habilitar Checador</strong>  </Form.Label>
     <ButtonGroup>
        {radiosChec.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-warning' : 'outline-danger'}
            name="radio3"
            value={radio.value}
            checked={radioValueChec === radio.value}
            onChange={(e) => setRadioValueChec(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup></Col>
     <Col>
        <Button className='1a' variant='success' size='lg' type="submit"  >Enviar</Button>
     </Col>
</Row>
</Form>
  )
}

