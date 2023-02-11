import React, {useContext} from 'react'
import { Container, Row, Col,  } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router-dom'
//import './recursoshumanos.css'
import UiContext from '../../context/UiContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import  Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
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
 



        {/* Chart */}
              <Grid item xs={12} md={8} lg={8}    onClick={() => {
     setToggleRH(true);
     navigate('trabajadores');
     setInFormulario(false);
   
   }}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 500,
                    url:("RH1.jpg")
                  }}
                >
               
              
    
     <div>
       <h1>Trabajadores</h1>
       <p>Gestion de personal</p>
     </div>
 



                </Paper>
              </Grid> 
              {/* Recent Deposits */}
             <Grid item xs={12} md={4} lg={4} sx={{flexDirection:'column'}} onClick={() => {
     setToggleRH(true);
     navigate('buscadorTrabajador');
    }}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                     <div>
    <h2>Busca a trabajador</h2>
    <p>Informacion de trabajador</p>
    </div>
                 
                </Paper>


                         <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
    <Button variant="dark" className='button'>
    <strong>+ Agregar trabajador nuevo</strong>
    </Button>
    <Button variant="danger" className='button'>
    <FontAwesomeIcon icon={faHospitalUser} /> <strong>Trabajadores de incapacidad</strong>
    </Button>
                 
                </Paper>
              </Grid> 
            {/*   <Grid item xs={12} md={4} lg={3}  onClick={() => {
     setToggleRH(true);
     navigate('buscadorTrabajador');
    }}>
       
              </Grid> */}
              {/* Recent Orders */}
         {/*      <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                </Paper>
              </Grid> */}




  
   <Grid item className='capaMiscelaneos' onClick={() => {
     setToggleRH(true);
     navigate('buscadorTrabajador');
    }}>
 

   
    </Grid>
  



    </ThemeProvider>

    
  )
}
