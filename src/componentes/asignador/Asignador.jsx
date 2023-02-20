import React, {useState, useContext} from 'react'

import './Asignador.css'
import { useEffect } from 'react';
import UiContext from '../../context/UiContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import  CEpointContext  from '../../context/CEpointContext';
import { Outlet, useNavigate } from 'react-router-dom';



 const Asignador = () => {

const {
  getTotalProyectos,
     
      state
     }=useContext(CEpointContext) 

 const navigate= useNavigate()
  const [modalShow, setModalShow] = useState(false);
    
  
  const { toggleShowFCP, toggleShowFCU}=useContext(UiContext)






  
useEffect(()=>{
  getTotalProyectos()
  
}, [])


 
 console.log("datossss", state?state:null)

    return (
      <>
    <Box  justifyContent="center" alignItems="center">
  <Button variant='primary' onClick={() => {
    setModalShow(true)
  }}> Proyectos desactivados</Button>
  <Button variant='success' onClick={toggleShowFCU}> <strong>+</strong> Crear Cuenta para checar en proyecto</Button>
  <Button onClick={toggleShowFCP} variant='success'>
    <strong>+</strong>  Agrega asignacion
  </Button>

  <h4><strong>Actualiza o agrega proyectos</strong></h4>



  <div class="wrapper">
<section class="cards">
{state.asignacionesTotal &&
      state.asignacionesTotal.map((da, index) => (

        <div class="cards-content" onClick={()=>navigate(`proyecto/${da}`)}>
          <Chip label={da} color="primary" />
    
      </div>
       
      ))}
</section>
</div>




 

  <Outlet />
</Box>
  </>
  

  )
}


export default React.memo(Asignador);
