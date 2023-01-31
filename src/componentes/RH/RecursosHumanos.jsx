import React, {useContext} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router-dom'
import './recursoshumanos.css'
import UiContext from '../../context/UiContext'
export const RecursosHumanos = () => {

 const {ToggleRH, setToggleRH}=useContext(UiContext)

    const navigate = useNavigate(); 

 console.log(ToggleRH)
return (
 
    ToggleRH
    ?<Outlet/>
 :<Container>
     <div className='areas'>
    
         <Row>
             <Col>

    <div className='capaRH1' onClick={()=>{
  setToggleRH(true)
  navigate("trabajadores")
  }} >
        <div className="capaRH1.1">
<h1 style={{color: '#EAE2E0'}}>Trabajadores</h1>
  <p style={{color: '#EAE2E0'}}>Gestion de personal</p> 

</div>
</div> </Col>
        <Col>
        

<div className='miscelaneos' /* onClick={()=>{
setToggle(true)
navigate("miscelaneos")
}} */ >

<div className="capaMiscelaneos">
  <h2>Busca a trabajador</h2>
  <p>informacion de trabajador</p>
</div>
</div>
<Col><Button variant='dark' style={{width: '10em', height: '5em'}}> <strong>+ Agregar trabajador nuevo</strong></Button></Col>

        </Col>

    </Row>
    </div>





</Container>






    
  )
}
