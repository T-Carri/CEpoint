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
import ButtonBase from '@mui/material/ButtonBase';
import { addDays } from 'date-fns';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import RH1 from './RH1.jpg'
import RH2 from './RH2.jpg'
import Typography from '@mui/material/Typography';
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



const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 500,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));




/* const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '70%',
}); */



const ImageButtonBT = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 500,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));



export const RecursosHumanos = () => {

 const {ToggleRH, setToggleRH, setInFormulario}=useContext(UiContext)

    const navigate = useNavigate(); 
  
 console.log('ToggleRH',ToggleRH)
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
                    
                  }}
                >
               
              <ImageButton>
                <ImageSrc  style={{ backgroundImage: `url(${RH1})` }} />             
                <ImageBackdrop/>
                <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
             <h1>Trabajadores</h1>
       <p>Gestion de personal</p>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
                
                 </ImageButton>
    
 
 



                </Paper>
              </Grid> 
             
             <Grid item xs={12} md={4} lg={4} sx={{flexDirection:'column'}} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >



<ImageButton onClick={() => {
     setToggleRH(true);
     navigate('buscadorTrabajador');
    }} >

                <ImageSrc  style={{ backgroundImage: `url(${RH2})` }} />             
                <ImageBackdrop/>
                <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
      <h2>Busca a trabajador</h2>
    <p>Informacion de trabajador</p>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
                
                 </ImageButton>
    
 </Paper>


                         <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
    <Button variant="dark" className='button' onClick={()=>{
       setToggleRH(true);
      navigate('agregaTrabajador')}}>
    <strong>+ Agregar trabajador nuevo</strong>
    </Button>
    <Button variant="danger" className='button'>
    <FontAwesomeIcon icon={faHospitalUser} /> <strong>Trabajadores de incapacidad</strong>
    </Button>
                 
                </Paper>
              </Grid> 
       




  
   <Grid item className='capaMiscelaneos' onClick={() => {
     setToggleRH(true);
     navigate('buscadorTrabajador');
    }}>
 

   
    </Grid>
  



    </ThemeProvider>

    
  )
}
