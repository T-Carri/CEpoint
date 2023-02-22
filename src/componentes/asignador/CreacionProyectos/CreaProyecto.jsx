import React, {useState, useRef} from 'react'
import {  Button, Form, Row, Col, Alert, Toast} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAuth } from 'firebase/auth'; 
import { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
//import UiContext from '../../context/UiContext';
import { useEffect } from 'react';
import SelectSearch from "react-select-search";
import { SelectorChecador } from '../SelectorChecador';
import {DateTime} from 'luxon';
import CEpointContext from '../../../context/CEpointContext';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
const currencies = [
  {
    value: 'Activo',
    label: 'Activo',
  },
  {
    value: 'Adicional',
    label: 'Adicional',
  },
  {
    value: 'Garantia',
    label: 'Garantia',
  },
  {
    value: 'Inactivo',
    label: 'Inactivo',
  },
];

export const CreaProyecto = () => {
  
  //  const [startDate, setStartDate] = useState(new Date());
 // const {showFCP, setShowFCP, toggleShowFCP}=useContext(UiContext)
   
  const [values, setValues] = useState('')
 const navigate=useNavigate()
 const {state, agregaProyecto, getUsuariosChecador,fetchOnlyUser, fetchChecadorAsignadoUser, ableChecador}=useContext(CEpointContext)
     const auth = getAuth()
  const dato =auth.currentUser; 

  const initValues= {
    obra: '', 
    presupuesto: '',
    residenteUid: '',
    ubicacion: ''
  }
    
  
 

  





//TODO: ONCHANGE







   
    useEffect(()=>{

      async function fetchData() {
        await getUsuariosChecador();
      }
      fetchData();

  },[]) 
 

  


  const residenteRef =useRef(null)
  const estadoRef =useRef(null)
  const ubicacionRef =useRef(null)
  const nopresupuestoRef =useRef(null)
  const obraRef =useRef(null)
  const turnoRef =useRef(null)

const handleEstadoChange = (event) => {
  estadoRef.current = event.target.value;

};
const [Residente, setResidente ]  = useState('')
const handleResidenteChange = (event) => {
  residenteRef.current = event.target.value;
  setResidente(residenteRef.current)
 
};

const handleTurnoChange = (event) => {
  turnoRef.current = event.target.value;
  
  
};
/* 
const test = (e) => {
  e.preventDefault()
  console.log( formAsig  )
}
 */

const statusChecador =(parametro)=>{
  if(parametro==false ){
  ableChecador(residenteRef.current)

  }else{
  
  console.log('mistake')
  } }
  

  const handleSubmit = async(e) =>  {
    try {
      e.preventDefault(); 
    //console.log( 'VALUES:',values);
    await agregaProyecto(nopresupuestoRef.current.value, {
      activa: true,
      horario:turnoRef.current ,
      Estado:estadoRef.current, 
      obra:obraRef.current.value!=null?obraRef.current.value:null, 
      
      idProyecto: nopresupuestoRef.current.value!=null?nopresupuestoRef.current.value:null,
      presupuesto: nopresupuestoRef.current.value!=null?nopresupuestoRef.current.value:null,
      asistencias:[],
      residenteUid:residenteRef.current,
      ubicacion: ubicacionRef.current.value!=null?ubicacionRef.current.value:null,
      
      })
    .then( fetchOnlyUser(residenteRef.current))
    .then( statusChecador(state.OnlyUser.checador),
    console.log("DONE :) " , residenteRef.current))
    .then(fetchChecadorAsignadoUser(residenteRef.current))
    .then( navigate(`../proyecto/${nopresupuestoRef.current.value}`))
    

  
    } catch (error) {
      
      console.log(error)
    }
    
    
    }
    
  

  
  
  
  
  
  //TODO: HANDLE
  
  
  // console.log('cheador:  ', checador) 

  


  return (
  
<Grid container  direction='row' justifyContent='center'  alignItems="center" sx={{background: '#e0e0e0'}}>
<Grid container direction='row' justifyContent='center'  alignItems="center"> 
<Grid item ><strong className="me-auto">
      <h4>Creando proyecto</h4>
      </strong></Grid>
</Grid>
     
    

   <Form  onSubmit={handleSubmit}>
    <Grid  container    direction="row"
  justifyContent="center"
  alignItems="center" spacing={2}>
      <Grid item sx={{p:3}}>
      <Form.Group className="mb-2" >
<Form.Label>Residente</Form.Label>
{state.UsuariosDisponiblesChecador&&    
<Form.Select name="residenteUid"   value={Residente }  onChange={handleResidenteChange}  >
<option>Selcciona una cuenta para este proyecto</option>
{
state.UsuariosDisponiblesChecador.map((e)=>( 
    
      <option value={e.UID}>{e.email}</option>
     )

)
} 
      </Form.Select>}   
</Form.Group>
<Link onClick={()=>navigate('../creakey')} variant="body2">
                  Necesitas crear una cuenta?
                </Link>
      </Grid>
      <Grid item sx={{pt:3}}>
      <TextField
       
       id="outlined-select-currency"
       select
       label="Cambia estado"
       onChange={handleEstadoChange}
       
       helperText="Selecciona estado de proyecto"
     >
       {currencies.map((option) => (
         <MenuItem key={option.value}     value={option.value}>
           {option.label}
         </MenuItem>  
       ))}
     </TextField>

      </Grid>
      </Grid>
      <Grid container spacing={2}  direction="row"
  justifyContent="center"
  alignItems="center">

      <Grid item xl={6} sx={{p:3}}>
 <Form.Group className="mb-2" >
<Form.Label>Obra</Form.Label>
<Form.Control type="String" name="ubicacion"  value={values.ubicacion} ref={obraRef} placeholder="Agrega Ubicacion"  />

</Form.Group></Grid>



     

      <Grid item xl={6} sx={{p:3}}><Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>
<Form.Control type="String" name="presupuesto" value={values.presupuesto} ref={nopresupuestoRef} placeholder="Codigo de presupuestso" />

</Form.Group>
</Grid>
      </Grid>
      <Grid container spacing={2}  direction="row"
  justifyContent="center"
  alignItems="center">
      <Grid item xl={6} sx={{p:3}}>
 <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>
<Form.Control type="String" name="ubicacion"  value={values.ubicacion} ref={ubicacionRef} placeholder="Agrega Ubicacion"  />

</Form.Group></Grid>

      <Grid item xl={6} sx={{p:3}}> 
<Form.Select name='horario' value={values.horario} onChange={handleTurnoChange} aria-label="Default select example">
    <option>Turno</option>
    <option value="matutino">Matutino</option>
    <option value="vespertino">Vespertino</option>
    <option value="nocturno">Nocturno</option>
  </Form.Select></Grid>
 


 




      </Grid>
      <Grid container direction='row' justifyContent='center'  alignItems="center"> 
    <Grid item sx={{p:3}} >

<Button className='1a' variant='success' size='lg' type="submit" >Crear</Button>
</Grid>
</Grid>
    
     







</Form>

</Grid>




 





)

}
