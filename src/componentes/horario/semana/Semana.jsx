import React, {useState, useContext, useEffect} from 'react'
import { format, getWeek } from 'date-fns';
import moment from 'moment';
import { Card, Button, Accordion, Container, Badge } from 'react-bootstrap'
import Box from '@mui/material/Box';
//import '../Horario.css'


import CEpointContext from '../../../context/CEpointContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { 
  useNavigate, Outlet
} from 'react-router-dom';



export const Semana = () => {

  const navigate = useNavigate();
 
 const weekDays = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

 
 const [DATA, setData]=useState('')
 const [alignment, setAlignment] = React.useState();

const { } = useContext(CEpointContext)


 const handleChange = (event, newAlignment) => {
  setAlignment(newAlignment);
};
















     
      return (
        <Box fluid>  
        <br />

<ToggleButtonGroup
      color="success"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton onClick={()=>navigate("proyectosactivos")} value="Activos">Activos</ToggleButton>
      <ToggleButton onClick={()=>{navigate("proyectosadicionales")}} value="Adicionales">Adicionales</ToggleButton>
      <ToggleButton onClick={()=>{navigate("proyectosgarantias")}} value="Garantias">Garantias</ToggleButton>
      <ToggleButton onClick={()=>{navigate("proyectosdesactivados")}} value="Desactivados">Desactivados</ToggleButton>
    </ToggleButtonGroup>

        <br />
        <br />
      <Outlet/>
     
    
</Box>
     )
    }




