import React, { useState, useEffect } from 'react';
import './bienvenida.css';
import { NavbarBrand } from 'reactstrap';
import { Button } from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Loginup} from '../Access/Loginup'
import promocion from './promocion.png'
import arcore from './arcore.jpg'
import APP from './APP.png'
import { 
  useNavigate
} from 'react-router-dom';
function Bienvenida() {

const [show, setShow]=useState(false)
 
const handleShow=()=>setShow(true)
const handleClose=()=>setShow(false)
const navigate = useNavigate()

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



  return (
    <div className="Bienvenida">
     <nav className="navbar navbar-expand-lg bg-warning w-100 p-5 h-150 d-inline-block">
     <NavbarBrand className="logo" href="/">
      CEpoint
    </NavbarBrand>
   <div className="d-grid gap-2  d-md-flex justify-content-md-end">
  <button onClick={handleShow} className="btn btn-success me-md-4" type="button">Iniciar Sesion</button>
  
  
</div>
     </nav>
 




     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="Slide1" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="Slide2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">

        <img class="d-block w-100" src={promocion} width="800" height="800" alt="First slide"/>
         
                </div>
        <div className="carousel-item">
        <img class="d-block w-100" src={APP} width="800" height="800" alt="Second slide"/>
         
    
        </div>
        <div className="carousel-item active">
        
        <img class="d-block w-100" src={promocion} width="800" height="800" alt="Third slide"/>
    
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="visually-hidden">Previous</span>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


<Modal show={show}>
  <Modal.Body>
    <Loginup/>
  </Modal.Body>
</Modal>



    </div>
  );
}

export default Bienvenida; 