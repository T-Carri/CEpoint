import React, { useState } from 'react';
import './bienvenida.css';
import { NavbarBrand } from 'reactstrap';
import { Button } from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Loginup} from '../Access/Loginup'



function Bienvenida() {

const [show, setShow]=useState(false)
 
const handleShow=()=>setShow(true)
const handleClose=()=>setShow(false)




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
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
    
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
    
        </div>
        <div className="carousel-item active">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
    
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