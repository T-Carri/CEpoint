import React, {useState} from 'react'
import {  Button, Form, Row, Col, Alert, Toast} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAuth } from 'firebase/auth'; 
import { useContext } from 'react';
import UsuariosContext from '../../context/UsuariosContext';
import UiContext from '../../context/UiContext';
import { useEffect } from 'react';
import SelectSearch from "react-select-search";
import { SelectorChecador } from './SelectorChecador';
import {DateTime} from 'luxon';

import CEpointContext from '../../context/CEpointContext';

export const FormCreadorProyecto = () => {
 
    const [startDate, setStartDate] = useState(new Date());
    const {showFCP, setShowFCP, toggleShowFCP}=useContext(UiContext)
    const [Residente, setResidente] = useState('')
    const [values, setValues] = useState('')
    const {Usuarios,
       getUsuarios, 
       finderChecador, 
       ableChecador, 
       setActivadorChec, 
       UserChecador, 
       ActivadorChec, 
       OnlyUser, 
       fetchOnlyUser,
       getUsuariosChecador,
       UsuariosChecador
      } = useContext(UsuariosContext) 
   const {agregaProyecto}=useContext(CEpointContext)
       const auth = getAuth()
    const dato =auth.currentUser; 

    const initValues= {
      obra: '', 
      presupuesto: '',
      residenteUid: '',
      ubicacion: ''
    }
      
    
   
 
     
    const formAsig= {
  activa: true,
  horario:'matutino', 
  obra: values?values.obra:null, 
  idAsignador: dato.uid,
  idProyecto: values?values.presupuesto:null,
  presupuesto: values?values.presupuesto:null,
  asistencias:[],
  residenteUid:values?values.residenteUid:null,
  ubicacion: values?values.ubicacion:null,
 
}


const date = DateTime.now().weekNumber


console.log('residente', Residente)


 //TODO: HANDLE
 
 const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value}); 
  
  
 }


// console.log('cheador:  ', checador) 
 const statusChecador =(parametro)=>{
if(parametro==false ){
ableChecador(values.residenteUid)
}else{

console.log('mistake')
} }






 //TODO: ONCHANGE

 
const handleSubmit = async(e) =>  {
  e.preventDefault(); 
  //console.log( 'VALUES:',values);
 await agregaProyecto(values.presupuesto, formAsig)
 // props.addOrEdit(values);
  setActivadorChec(values.residenteUid)
  fetchOnlyUser(values.residenteUid)
  ableChecador(values.residenteUid)
  statusChecador(OnlyUser.checador)
   setValues(initValues)
}



/* const addOrEdit = async (addOrEdit) => {
  const databaseRef=await  addDoc(collection(db, "asignaciones"), addOrEdit);
} */



useEffect(()=>{
  getUsuariosChecador()
},[])
 
useEffect( 
    ()=>{
       
      finderChecador(UsuariosChecador)
    }
      ,[UsuariosChecador]) 
      
      

     

    console.log( 'Sera activado:', ActivadorChec);
    {OnlyUser&& console.log('OnlyUser:  ',OnlyUser.checador)}
    console.log(values.residenteUid)
 
 
 
 
 
    return (
    
    <Toast show={showFCP} onClose={toggleShowFCP} style={{width:'50em', height:'29em'}}>
     <Toast.Header>
      
       <strong className="me-auto">Asignador</strong>
       <small> #{date} semana</small>
     </Toast.Header>
     <Toast.Body>

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
<Button className='1a' variant='success' size='lg' type="submit"  /* onClick={
  ()=>{
    try {
     ableChecador()
    } catch (error) {
      console.log(error)
    }
      
    }
  
  } */>Enviar</Button>
</Col>
</Row>
</Form>







      {/* <FormAsignador addOrEdit={addOrEdit}/>
 */}     </Toast.Body>
   </Toast>





  )
}






/* searchUser(formAsig.residente, Usuarios)

const searchUser= (props) =>{
return props.reduce((past, current)=>{
  const foundIndex =past.find(it=>it.UID===current.UID)
})
} */



    //console.log('Usuarios desde asignador:',Usuarios)
    //console.log('userchecador',UserChecador)
   // console.log( 'VALUES:', values);
    //console.log( 'RESIDENTE:', values.residenteUid);



    /* return(
  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
  <Alert.Heading>Este usuario tiene tiene activo el checador!</Alert.Heading>
  <p>
   TODO: VER DERTALLES DE DONDE  AGREGAR BOTON PARA DESACTIVAR DE AHI DONDE ESTA
  </p>
  <Button>test</Button>
  
</Alert>

) */