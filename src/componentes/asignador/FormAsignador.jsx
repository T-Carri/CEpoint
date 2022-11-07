import React, {useState} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAuth } from 'firebase/auth'; 
import { useContext } from 'react';
import UsuariosContext from '../../context/UsuariosContext';
import { useEffect } from 'react';
import SelectSearch from "react-select-search";

export const FormAsignador = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [UserChecador, setUserChecador] = useState('')
    const [Residente, setResidente] = useState('')
    const {Usuarios,getUsuarios}=useContext(UsuariosContext) 
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


const finderChecador = (props) => {
  return props.reduce((past, current)=>{
    const foundIndex = past.find(it=>it.perfil===current.perfil)
    console.log('ver reduce resultados:', past)
    const r=[]
    r.push(past)
    setUserChecador(past)
    if(foundIndex){
      foundIndex.data=foundIndex.data
      ?[...foundIndex.data, {
        'nombre': current.nombre, 
        'value': current.UID
      }]
      :[{ 'nombre': current.nombre, 
           'value': current.UID}]
    }else{ past.push(
      { 
      
        'perfil': current.perfil,
        'data': [{
          'nombre': current.nombre,
          'uid':current.UID
        }]
      } )}
      return past;
  }, [])}

  useEffect( 
    ()=>{
      finderChecador(Usuarios)
    
      getUsuarios()
    }
      ,[]) 
 
    console.log('Usuarios desde asignador:',Usuarios)
    console.log('userchecador',UserChecador)
   
  return (


    <Form onSubmit={handleSubmit}>
    <Row><Col> <Form.Group className="mb-2" >
<Form.Label>Residente</Form.Label>
 <Form.Select>
 <option>Open this select menu</option>
 {
    UserChecador.map((e)=>(
<option value={e.perfil}>{e.perfil}</option>
      
    ))
    
  } 
 


 </Form.Select>
  
 
 
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
