 import React, { useState, useEffect } from 'react';
import './bienvenida.css';
import { NavbarBrand, Button, Modal, Carousel, Container, Row, Col } from 'react-bootstrap';

import {Loginup} from '../Access/Loginup'
import promocion from './promocion.png'
import arcore from './patternpad.png'
import APP from './APP.png'
import { 
  useNavigate
} from 'react-router-dom';
function Bienvenida() {

const [show, setShow]=useState(false)
const [authenticated, setAuthenticated] = useState(false);
const handleShow=()=>setShow(true)
const handleClose=()=>setShow(false)
const navigate = useNavigate()


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

useEffect(() => {
  let authToken = sessionStorage.getItem('Auth Token');
  if (authToken) {
    setAuthenticated(true);
  }
}, []);

useEffect(() => {
  if (authenticated) {
    navigate('/account');
  } else {
    navigate('/');
  }
}, [authenticated]);


  return (
  
         <Container  fluid>
      <Row>
       
        <nav className="navbar navbar-expand-lg bg-warning w-100 p-5 h-150 d-inline-block">
    <NavbarBrand className="logo" href="/">
    <strong>
          CEpoint 

           </strong>
   </NavbarBrand>
  <div className="d-grid gap-2  d-md-flex justify-content-md-end">
 <button onClick={handleShow} className="btn btn-success me-md-4" type="button">Iniciar Sesion</button>

 
  </div>

    </nav>
        
  


      </Row>

 <Row>

<Col className='h-100' xs={12} md={12}>
<Carousel  activeIndex={index} onSelect={handleSelect}>
     <Carousel.Item>
       <img
         className="d-block w-100 h-100"
         src={promocion}
         alt="First slide"
       />
       <Carousel.Caption>
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100 h-100"
         src={APP}
         alt="Second slide"
       />

       <Carousel.Caption>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100 h-100"  
         src={arcore}
         alt="Third slide"
       />

       <Carousel.Caption>
         <h3>Third slide label</h3>
         <p>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
         </p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>



<Modal show={show}  centered>
 <Modal.Body>
   <Loginup/>
 </Modal.Body>
</Modal>

</Col>


 </Row>

</Container>
    


   







   
  );
}

export default Bienvenida; 