import React, {useContext, useEffect} from 'react'
import {  NavbarBrand, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//import './Account.css'
const NavbarCepoint = ({handleLogout}) => {



  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffc107',
      },
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode ===  '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  



  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id='cepoint' >
              <strong>
           CEpoint 

            </strong>
          </Typography>
          </IconButton>
        
          <Button color="inherit" onClick={handleLogout}>Salir</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </ThemeProvider>
  )
}

export default React.memo(NavbarCepoint)