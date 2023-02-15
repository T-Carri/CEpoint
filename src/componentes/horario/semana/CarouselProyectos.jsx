import React, { useEffect, useContext } from 'react'
import CEpointContext from '../../../context/CEpointContext'; 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#b71c1c',
    '&:hover': {
      backgroundColor:'#ffc400',
    },
  }));
  


export const CarouselProyectos = () => {
    const {state, getNamesProyectos} =useContext(CEpointContext)

useEffect(()=>{
if(!state.proyectonames){
    getNamesProyectos()
}
},[state.proyectonames])


  return (
    <div className='flex_grid'  style={{display:'flex', overflowX:'scroll'}}>
         <Stack direction="row" spacing={2}>
          {state.proyectonames&&state.proyectonames.map((presupuesto)=>(
             <ColorButton size="large"variant="contained" id={presupuesto} value={presupuesto}
            /*  onClick={()=>{
              setSeleccion(presupuesto.asistencias)
              setExpandedSections({})
            }} */> {presupuesto} </ColorButton>
           ))} 
           </Stack>
        </div>
  )
}
