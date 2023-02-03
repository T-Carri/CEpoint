import React, {useState, useRef, useContext} from 'react'
import {  Button, Form, Col, Row,  InputGroup, ToggleButton, Overlay, Popover } from 'react-bootstrap'
import DatePicker,  { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import CEpointContext from '../../../../context/CEpointContext';
import SelectSearch from "react-select-search";
import 'react-select-search/style.css'
import { options, searchArea, optionsEmpresas } from '../../CrearTrabajador/options';
export const ChildDatosTrabajadorUpdate = ({dato, referencia, ID}) => {

  const {
    fetchOnlyUser, 
    acNombre,
    acNss,
    acFeNacimiento,
    acPerfil, 
    acEmpresa,
    acTelefono,
    acDomicilio,
    acEmail}=useContext(CEpointContext)
    
    
//Nombre 
const acNombreRef=useRef(null)
//nss
const acNssRef=useRef(null)
//perfil
const acPerfilRef=useRef(null)
//empresa
const acEmpresaRef=useRef(null)
//Telefono
const acTelefonoRef=useRef(null)
//Fecha de nacimiento
const acFeNacRef=useRef(null)
//Domicilio
const acDomicilioRef=useRef(null)
//email
const acEmailRef=useRef(null)



const [Perfil, setPerfil] = useState('')
const [Empresa, setEmpresa]= useState('')

const [startDate, setStartDate] = useState(new Date());

    
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(acEmailRef.current.value);





};


 
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  





console.log(acPerfilRef)




    switch(referencia){

      
  
    
    case 'Nombre': 
     return(

      <Col ref={ref}   style={{ textAlign: "start" }}>
<label style={{color:'black' }}><h4>Nombre:</h4></label> 
    
              
              <br />
  
              <InputGroup className="mb-3">
              <Button variant="outline-success" id="button-addon1"  onClick={handleClick}>
              Actualiza {referencia}
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            disabled={true}
            value={dato}
            
          />
  </InputGroup>
  
  
     
        <Overlay
          show={show}
          target={target}
          placement="top"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Actualiza {referencia}</Popover.Header>
            <Popover.Body>
            <InputGroup className="mb-3">
          <Form.Control
           ref={acNombreRef}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-danger" id="button-addon2"   onClick={
()=>{
  try {
    acNombre(ID, acNombreRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

          } >
            Actualiza
          </Button>
        </InputGroup>
            </Popover.Body>
        
          </Popover>
        </Overlay>
      </Col>




     )
    break;
    
    case 'nss': 
     return(

<Col ref={ref}   style={{ textAlign: "start" }}>
<label style={{color:'black' }}><h4>NSS:</h4></label>    
              
    <br />

    <InputGroup className="mb-3">
    <Button variant="outline-success" id="button-addon1"  onClick={handleClick}>
    Actualiza {referencia}
</Button>
<Form.Control 
  
  aria-label="Example text with button addon"
  aria-describedby="basic-addon1"
  disabled={true}
  value={dato}
  
/>
</InputGroup>



<Overlay
show={show}
target={target}
placement="top"
container={ref}
containerPadding={20}
>
<Popover id="popover-contained">
  <Popover.Header as="h3">Actualiza {referencia}</Popover.Header>
  <Popover.Body>
  <InputGroup className="mb-3">
<Form.Control
 ref={acNssRef}
  aria-label="Recipient's username"
  aria-describedby="basic-addon2"
/>
<Button variant="outline-danger" id="button-addon2" onClick={
()=>{
  try {
    acNss(ID, acNssRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>
  Actualiza
</Button>
</InputGroup>
  </Popover.Body>

</Popover>
</Overlay>
</Col>



      
     )
    break;


    case 'Fecha Nacimiento':
      return( 
    
        <Col ref={ref}   style={{ textAlign: "start" }} >
<label style={{color:'black' }}><h4>Fecha de nacimiento:</h4></label>      
    
              
    <InputGroup className="mb-3">
              <Button variant="outline-success" id="button-addon1"  onClick={handleClick}>
              Actualiza {referencia}
          </Button>
          <Form.Control
         
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            disabled={true}
            value={dato.toDate ? dato.toDate().toString() : "Invalid timestamp"}
            
          />
  </InputGroup>



     
     <Overlay
       show={show}
       target={target}
       placement="left"
       container={ref}
       containerPadding={20}
     >
       <Popover id="popover-contained">
         <Popover.Header as="h3">Actualiza {referencia}</Popover.Header>
         <Popover.Body>
      
         <DatePicker 
    
     
    selected={startDate} onChange={(date) => {
     setStartDate(date);
     acFeNacRef.current = date;}} locale={es} />  

<Button onClick={
  ()=>{
    try {
      acFeNacimiento(ID, acFeNacRef.current).then(fetchOnlyUser(ID)).then( handleClick(),
      console.log(acFeNacRef.current) )
    } catch (error) {
      console.log(error)
    }
  
  }
}> Agrega fecha test</Button>
    
         </Popover.Body>
     
       </Popover>
     </Overlay>
    </Col>
    
    
    
        
      )
      break; 
    
    case 'Perfil': 
    return(

<Col className='text-center' style={{display:'flex', padding:'1.5em'}} ref={ref}>
    
        
    <br />
    <Button variant="outline-success" id="button-addon2" onClick={
()=>{
  try {
    acPerfil(ID, Perfil).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>
  Actualiza {referencia}
</Button>
 <SelectSearch options={options} 
  search
 value={Perfil}  autoFocus onChange={setPerfil} name="perfil" placeholder={dato} />






  
  
</Col>




     
    )
   break;
   
   case 'Telefono': 
    return(

      <Col ref={ref}  style={{ textAlign: "start" }}>
     <label style={{color:'black' }}><h4>Empresa:</h4></label> 
              
      <br />

      <InputGroup className="mb-3">
      <Button variant="outline-success" id="button-addon1"  onClick={handleClick}>
      Actualiza {referencia}
  </Button>
  <Form.Control
    aria-label="Example text with button addon"
    aria-describedby="basic-addon1"
    disabled={true}
    value={dato}
    
  />
</InputGroup>



<Overlay
  show={show}
  target={target}
  placement="top"
  container={ref}
  containerPadding={20}
>
  <Popover id="popover-contained">
    <Popover.Header as="h3">Actualiza {referencia}</Popover.Header>
    <Popover.Body>
    <InputGroup className="mb-3">
  <Form.Control
    ref={acTelefonoRef}
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />
  <Button variant="outline-danger" id="button-addon2" onClick={
()=>{
  try {
    acTelefono(ID, acTelefonoRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>
    Actualiza
  </Button>
</InputGroup>
    </Popover.Body>

  </Popover>
</Overlay>
</Col>




    )
   break;
   case 'Empresa': 
   return(
<Col className='text-center' style={{display:'flex', padding:'1.5em'}} ref={ref}>
    
        
    <br />
    <Button variant="outline-success" id="button-addon2" onClick={
()=>{
  try {
    acEmpresa(ID, Empresa).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>
  Actualiza {referencia}
</Button>
 <SelectSearch options={optionsEmpresas} 
  search
 value={Empresa}  autoFocus onChange={setEmpresa} name="empresa" placeholder={dato} />






  
  
</Col>




   )
  break;
  case 'Domicilio':
    return( 
  
      <Col ref={ref}   style={{ textAlign: "start" }}>
  
  <label style={{color:'black' }}><h4>Domicilio:</h4></label>      
  br
  <InputGroup className="mb-3">
            <Button variant="outline-success" id="button-addon1"  onClick={handleClick}>
            Actualiza {referencia}
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          disabled={true}
          value={dato}
          
        />
</InputGroup>
   
   <Overlay
     show={show}
     target={target}
     placement="left"
     container={ref}
     containerPadding={20}
   >
     <Popover id="popover-contained">
       <Popover.Header as="h3">Actualiza {referencia}</Popover.Header>
       <Popover.Body>
       <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label   >Example textarea</Form.Label>
      <Form.Control ref={acDomicilioRef} as="textarea" rows={3} />
      <Button variant='danger' onClick={
()=>{
  try {
    acDomicilio(ID, acDomicilioRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>Listo</Button>
    </Form.Group>
       </Popover.Body>
   
     </Popover>
   </Overlay>
  </Col>
  
  
  
      
    )
    break;
  

 case 'Email': 
 return(

  
<Col ref={ref} style={{ textAlign: "start" }}>
<label style={{color:'black', textAlign: "start"   }}><h4>Email:</h4></label> 
              
    <br />

    <InputGroup className="mb-3">
    <Button variant="outline-success" id="button-addon1"  onClick={handleClick}>
    Actualiza {referencia}
</Button>
<Form.Control
  aria-label="Example text with button addon"
  aria-describedby="basic-addon1"
  disabled={true}
  value={dato}
  
/>
</InputGroup>



<Overlay
show={show}
target={target}
placement="top"
container={ref}
containerPadding={20}
>
<Popover id="popover-contained">
  <Popover.Header as="h3">Actualiza {referencia}</Popover.Header>
  <Popover.Body>
  <InputGroup className="mb-3">
<Form.Control
 ref={acEmailRef}
  aria-label="Recipient's username"
  aria-describedby="basic-addon2"
/>
<Button variant="outline-danger" id="button-addon2" onClick={
()=>{
  try {
    acEmail(ID, acEmailRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>
  Actualiza
</Button>
</InputGroup>
  </Popover.Body>

</Popover>
</Overlay>
</Col>


 )
break;

  
    }
    




















  
}
