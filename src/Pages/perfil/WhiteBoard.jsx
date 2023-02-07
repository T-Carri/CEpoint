import React from 'react'
import Container  from "@mui/system/Container";

import { 
  
    Outlet
  } from 'react-router-dom';
export const WhiteBoard = () => {
  return (
    <Container id='WhiteBoard' fixed>
    <Outlet/>
    
    </Container>


    )
}
