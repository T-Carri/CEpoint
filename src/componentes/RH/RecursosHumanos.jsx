import React, {useContext} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router-dom'
import './recursoshumanos.css'
import UiContext from '../../context/UiContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
export const RecursosHumanos = () => {

 const {ToggleRH, setToggleRH, setInFormulario}=useContext(UiContext)

    const navigate = useNavigate(); 

 console.log(ToggleRH)
return (
 
    ToggleRH
    ?<Outlet/>
 :<Container>
     <div className='areasRH'>
    
         <Row>
             <Col>

    <div className='capaRH1' onClick={()=>{
  setToggleRH(true)
  navigate("trabajadores")
  setInFormulario(false)

  }} >
        <div className="capaRH1.1">
<h1 style={{color: '#EAE2E0'}}>Trabajadores</h1>
  <p style={{color: '#EAE2E0'}}>Gestion de personal</p> 

</div>
</div> </Col>
        <Col>
        

<div className='busquedaTrabajador'  onClick={()=>{
setToggleRH(true)
navigate("buscadorTrabajador")
}}  >

<div className="capaMiscelaneos">
  <h2>Busca a trabajador</h2>
  <p>informacion de trabajador</p>
</div>
</div>
<Col style={{display:'inline'}}>
<Button variant='dark' style={{width: '10em', height: '5em'}}> <strong>+ Agregar trabajador nuevo</strong></Button>
<Button variant='danger' style={{width: '10em', height: '5em'}}> <FontAwesomeIcon icon={faHospitalUser} /> <strong>Trabajadores de incapacidad</strong></Button>
</Col>
</Col>,
        
      


    </Row>
    </div>





</Container>






    
  )
}
