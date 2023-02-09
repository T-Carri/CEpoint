import React, {useContext} from 'react'
import { Container, Row, Col,  } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router-dom'
import './recursoshumanos.css'
import UiContext from '../../context/UiContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import  Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import { addDays } from 'date-fns';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import RH1 from './RH1.jpg'

const theme = createTheme({

  capaRH1: {
  
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: '#1C1C1E',
    color: '#EAE2E0',
/*     '& h1': {
      fontSize: '2em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5em',
      },
    }, */
/*     '& p': {
      fontSize: '1.5em',
      [breakpoints.down('sm')]: {
        fontSize: '1.2em',
      },
    }, */
  },
  capaMiscelaneos: {
    
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: '#1C1C1E',
    color: '#EAE2E0',
 /*    '& h2': {
      fontSize: '2em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5em',
      },
    }, */
  /*   '& p': {
      fontSize: '1.5em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2em',
      },
    }, */
  },
/*   button: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }, */
})

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '70%',
});


export const RecursosHumanos = () => {

 const {ToggleRH, setToggleRH, setInFormulario}=useContext(UiContext)

    const navigate = useNavigate(); 
  
 console.log(ToggleRH)
return (
 
    ToggleRH
    ?<Outlet/>
 : 
 <ThemeProvider theme={theme}>
 

   <Grid item className='capaRH1' onClick={() => {
     setToggleRH(true);
     navigate('trabajadores');
     setInFormulario(false);
   
   }}>
    
     <div>
       <h1>Trabajadores</h1>
       <p>Gestion de personal</p>
     </div>
   </Grid>
   <Grid item className='capaMiscelaneos' onClick={() => {
     setToggleRH(true);
     navigate('buscadorTrabajador');
    }}>
    <div>
    <h2>Busca a trabajador</h2>
    <p>Informacion de trabajador</p>
    </div>

    <Button variant="dark" className='button'>
    <strong>+ Agregar trabajador nuevo</strong>
    </Button>
    <Button variant="danger" className='button'>
    <FontAwesomeIcon icon={faHospitalUser} /> <strong>Trabajadores de incapacidad</strong>
    </Button>
    </Grid>
  



    </ThemeProvider>

    
  )
}
