import React, {useState} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAuth } from 'firebase/auth'; 
import { useContext } from 'react';
import UsuariosContext from '../../context/UsuariosContext';
import { useEffect } from 'react';
import SelectSearch from "react-select-search";
import { SelectorChecador } from './SelectorChecador';

export const FormAsignador = (props) => {
    const [startDate, setStartDate] = useState(new Date());
 
    const [Residente, setResidente] = useState('')
    const {Usuarios, getUsuarios, finderChecador, ableChecador, setActivadorChec, UserChecador, ActivadorChec}=useContext(UsuariosContext) 
    const auth = getAuth()
    const dato =auth.currentUser; 
const formAsig= {
  activa: true,
  horario:'', 
  obra: '', 
  idAsignador: dato.uid,
  presupuesto: '',
  asistencias:[],
  residenteUid: '',
  ubicacion: '',
 
}


/* searchUser(formAsig.residente, Usuarios)

const searchUser= (props) =>{
return props.reduce((past, current)=>{
  const foundIndex =past.find(it=>it.UID===current.UID)
})
} */

console.log('residente', Residente)

const [values, setValues] = useState(formAsig)
 //TODO: HANDLE
 
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value}); 
  
  
 }
 

 //TODO: ONCHANGE

const handleSubmit = (e) =>  {
  e.preventDefault(); 
  console.log( 'VALUES:',values);
  props.addOrEdit(values);
  setActivadorChec(values.residenteUid)
   setValues({...formAsig})
}




  useEffect( 
    ()=>{
     
      getUsuarios() 

      finderChecador(Usuarios)
}
      ,[]) 
     
    //console.log('Usuarios desde asignador:',Usuarios)
    //console.log('userchecador',UserChecador)
    console.log( 'VALUES:', values);
    console.log( 'RESIDENTE:', values.residenteUid);
    console.log( 'Sera activado:', ActivadorChec);
    
  return (


    <Form  onSubmit={handleSubmit}>
    <Row><Col> <Form.Group className="mb-2" >
<Form.Label>Residente</Form.Label>
{UserChecador&&    
<Form.Select name="residenteUid" value={values.residenteUid} onChange={handleInputChange}>
 <option>Open this select menu </option>
{
 UserChecador.map((e)=>( 
     e.map((s)=>( 
        <option value={s.uid}>{s.nombre}</option>
       ))

))
} 
        </Form.Select>}


 
  
 
 
</Form.Group></Col><Col> <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>
<Form.Control type="String" name="ubicacion"  value={values.ubicacion} onChange={handleInputChange} placeholder="Agrega Ubicacion"  />

</Form.Group></Col></Row>
<Row>
  <Col> <Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>
<Form.Control type="String" name="presupuesto" value={values.presupuesto} onChange={handleInputChange} placeholder="Codigo de presupuestso" />

</Form.Group></Col>

<Col> <Form.Group className="mb-2" >
<Form.Label>Obra</Form.Label>
<Form.Control type="String" name="obra" value={values.obra} onChange={handleInputChange} placeholder="Codigo de presupuestso" />

</Form.Group></Col>
</Row>

<Row>
  <Col>
  <Form.Select name='horario' value={values.horario} onChange={handleInputChange} aria-label="Default select example">
      <option>Turno</option>
      <option value="matutino">Matutino</option>
      <option value="vespertino">Vespertino</option>
      <option value="nocturno">Nocturno</option>
    </Form.Select>
  </Col>
<Col>
<Button className='1a' variant='success' size='lg' type="submit"  onClick={
  async()=>{
    try {
     await ableChecador()
    } catch (error) {
      console.log(error)
    }
      
    }
  
  }>Enviar</Button>
</Col>
</Row>
</Form>
  )
}






