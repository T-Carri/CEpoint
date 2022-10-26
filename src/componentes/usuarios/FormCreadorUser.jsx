import React, {useState} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAuth } from 'firebase/auth'; 


export const FormCreadorUser = () => {
    //necesario para registrar  en dos modalidades, manual y por google unicamente
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

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
<Form.Control type="String" name="email" onChange={handleInputChange} placeholder="Agrega residente" />
              </Form.Group></Col>
       <Col> <Form.Group className="mb-2" >
                <Form.Label>Password</Form.Label>
<Form.Control type="String" name="password" onChange={handleInputChange} placeholder="Agrega Ubicacion"  />
           </Form.Group></Col>
</Row>
<Row>
<Col><Form.Select name='empresas'  onChange={handleInputChange} aria-label="Default select example">
      <option>Empresas</option>
      <option value="CE2000">CE2000</option>
      <option value="SECMA">SECMA</option>
      <option value="SIARSA">SIARSA</option>
      <option value="MCBRICK">MCBRICK</option>
      <option value="SOLCOM">SOLCOM</option>
      <option value="INMOVILIARIA">INMOVILIARIA</option>
    </Form.Select>
     </Col>
     <Col> <Form.Group className="mb-2" >
              <Form.Label>empresa</Form.Label>
<Form.Control type="String" name="presupuesto" onChange={handleInputChange} placeholder="Codigo de presupuestso" />

           </Form.Group></Col>

       <Col> <Form.Group className="mb-2" >
               <Form.Label>Obra</Form.Label>
<Form.Control type="String" name="obra" onChange={handleInputChange} placeholder="Codigo de presupuestso" />

            </Form.Group></Col>
</Row>
<Row>
      <Col><Form.Select name='horario'  onChange={handleInputChange} aria-label="Default select example">
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

