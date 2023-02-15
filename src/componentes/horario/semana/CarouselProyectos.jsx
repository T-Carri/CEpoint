import React, { useEffect, useState } from 'react'
import CEpointContext from '../../../context/CEpointContext'; 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#b71c1c',
    '&:hover': {
      backgroundColor:'#ffc400',
    },
  }));
  


export const CarouselProyectos = ({state}) => {
  //const [test, setTest]=useState(state?state:null) 
  const navigate = useNavigate();
  //const ProyectosFiltrados = state.filter(obj => (obj.asistencias || []).length !== 0);





  return (
    <div className='flex_grid'  style={{display:'flex', overflowX:'scroll'}}>
         <Stack direction="row" spacing={2}>
          {state&&state.map((presupuesto)=>(
             <ColorButton key={presupuesto} size="large"variant="contained" id={presupuesto} value={presupuesto}
             onClick={()=>{
              
              navigate(`./table/${presupuesto}`, {replace:true}) 
            }} > {presupuesto} </ColorButton>
           ))} 
           </Stack>
        </div>
  )
}
