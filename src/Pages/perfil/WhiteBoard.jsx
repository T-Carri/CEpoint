import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  
    Outlet
  } from 'react-router-dom';
export const WhiteBoard = () => {
  return (
    <Container id='WhiteBoard' fluid>
    <Outlet/>
    
    </Container>


    )
}
