//habilItado
import { Row, Col} from 'react-bootstrap'
import { UserAuth } from '../../context/AuthContext';
//import './Account.css'

import React, { useEffect} from 'react'
import { 
  useNavigate, 
  Outlet
} from 'react-router-dom';
import  NavbarCepoint  from './Navbar';
import  GreyBar  from './GreyBar';
import { WhiteBoard } from './WhiteBoard';
import  Grid from '@mui/material/Grid'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import NearMeIcon from '@mui/icons-material/NearMe';
import { MainListItems } from './listItems';

/* import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders'; */


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();
const navbar = createTheme( {
  palette: {
    primary: {
      main: '#ffc107',
    },
  },
} );


export const AccountUser= () => {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

 
  const {logout}= UserAuth();
  const navigate = useNavigate();
  


  useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token')
    if(authToken){
        navigate('/account')
    }
    if(!authToken){
        navigate('/')
    }
},


[])
//LOGOUT
const handleLogout = async()=>{
      try{
        await logout().then(
          navigate('/'), 
          sessionStorage.removeItem('Auth Token')
         
        )
        console.log('You are logged out')
      } catch(e) {
        console.log(e.message);
      
      }
    };




  
    //console.log('BIGSTATE', state)


  
  
  return (
<ThemeProvider theme={mdTheme}>

<Box sx={{display: 'flex'}}>
<CssBaseline />
  <ThemeProvider theme={ navbar}> 
<AppBar position="absolute" open={open} >
        <Toolbar   sx={{
              pr: '24px', // keep right padding when drawer closed
            }}>
          <IconButton
          edge="start"
            size="large"
          
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
             <NearMeIcon/>
          </IconButton>
          <Typography variant="h6"  component="h1" sx={{ flexGrow: 1 }} id='cepoint' >
              <strong>
           CEpoint 

            </strong>
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Salir</Button>
        </Toolbar>
      </AppBar>
 </ThemeProvider>  



<Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {<MainListItems/>}
            <Divider sx={{ my: 1 }} />
           
          </List>
        </Drawer>



        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh', 
            
            overflow: 'auto',
          }}
        >
         
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            
             
             <WhiteBoard/>
             
              {/* Chart */}
           {/*    <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
               
                </Paper>
              </Grid> */}
              {/* Recent Deposits */}
        {/*       <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                 
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
         {/*      <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  
                </Paper>
              </Grid> */}





            </Grid>
          
          </Container>
        </Box>


</Box>














{/* 

<NavbarCepoint handleLogout={handleLogout}/>
<main>
<Grid  container
  
  xs={12} style={{ height: '100vh' }}
 >
  
  

<Grid item lg={2} xs={2}    style={{ height: '100vh',   position: 'absolute' }} >
  <GreyBar />
  </Grid>

<Grid item  lg={10} xs={10} style={{ padding: '2vh' }} >

</Grid>


  
</Grid>

 */}






 {/* //area de herramienta  */}



 {/* //canvas lateral */}

</ThemeProvider>
    

    
    
   
  )
}

