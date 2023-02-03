import React, {useState, useRef,  useContext} from 'react'
import {  Button, Form, Col, Row,  InputGroup, ToggleButton, Overlay, Popover } from 'react-bootstrap'
import DatePicker,  { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import CEpointContext from '../../../../context/CEpointContext';
import SelectSearch from "react-select-search";
import 'react-select-search/style.css'
import { options, searchArea, optionsEmpresas } from '../../CrearTrabajador/options';
export const ChildDatosTrabajadorAdd = ({dato, referencia, ID}) => {

  const {
    fetchOnlyUser, 
    addNombre,
    addNss,
    addFeNacimiento,
    addPerfil,
    addEmpresa,
    addTelefono,
    addDomicilio, 
    addEmail    }=useContext(CEpointContext)
    
    const [startDate, setStartDate] = useState(new Date());
    const [Perfil, setPerfil] = useState('')
const [Empresa, setEmpresa]= useState('')
       
        //Nombre 
        const addNombreRef=useRef(null)
        //nss
        const addNssRef=useRef(null)
        //perfil
        const addPerfilRef=useRef(null)
        //empresa
        const addEmpresaRef=useRef(null)
        //Telefono
        const addTelefonoRef=useRef(null)
        //Fecha de nacimiento
        const addFeNacRef=useRef(null)
        //Domicilio
        const addDomicilioRef=useRef(null)
        //email
        const addEmailRef=useRef(null)
         

        const handleSubmit = (event) => {
          event.preventDefault()
          console.log(addDomicilioRef.current.value);
        };
        
 console.log(startDate)

  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

switch(referencia){


  case 'Nombre': 
  return(

    <Col ref={ref} style={{ textAlign: "start" }} >
<label style={{color:'black' }}><h4>Nombre:</h4></label> 
          

       <ToggleButton
      className="mb-2"
      id="toggle-check"
      type="checkbox"
      variant="outline-danger"
      checked={checked}
      value="1"
      onChange={(e) => setChecked(e.currentTarget.checked)}
      onClick={handleClick}
    >
       Ingresa {referencia}
    </ToggleButton> 
    
    <Overlay
      show={show}
      target={target}
      placement="left"
      container={ref}
      containerPadding={20}
    >
      <Popover id="popover-contained">
        <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
        <Popover.Body>
        <InputGroup className="mb-3">
      <Form.Control
        ref={addNombreRef}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-danger" id="button-addon2"   onClick={
()=>{
  try {
    addNombre(ID, addNombreRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}  >
        Listo
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
    <Col ref={ref}  style={{ textAlign: "start" }}>

<label style={{color:'black' }}><h4>NSS:</h4></label>     
<br />
    <ToggleButton
   className="mb-2"
   id="toggle-check"
   type="checkbox"
   variant="outline-danger"
   checked={checked}
   value="1"
   onChange={(e) => setChecked(e.currentTarget.checked)}
   onClick={handleClick}
 >
    Ingresa {referencia}
 </ToggleButton> 
 
 <Overlay
   show={show}
   target={target}
   placement="right"
   container={ref}
   containerPadding={20}
 >
   <Popover id="popover-contained">
     <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
     <Popover.Body>
     <InputGroup className="mb-3">
   <Form.Control
     ref={addNssRef}
     aria-label="Recipient's username"
     aria-describedby="basic-addon2"
   />
   <Button variant="outline-danger" id="button-addon2"  onClick={
()=>{
  try {
    addNss(ID, addNssRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

} >
     Listo
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

    <Col ref={ref} style={{ textAlign: "start" }} >

<label style={{color:'black' }}><h4>Fecha de nacimiento:</h4></label>      
<br />
    <ToggleButton
   className="mb-2"
   id="toggle-check"
   type="checkbox"
   variant="outline-danger"
   checked={checked}
   value="1"
   onChange={(e) => setChecked(e.currentTarget.checked)}
   onClick={handleClick}
 >
    Agrega {referencia}
 </ToggleButton> 
 
 <Overlay
   show={show}
   target={target}
   placement="right"
   container={ref}
   containerPadding={20}
 >
   <Popover id="popover-contained">
     <Popover.Header as="h3">Ingresa {referencia}</Popover.Header>
     <Popover.Body>
  
     <DatePicker 
    
     
     selected={startDate} onChange={(date) => {
      setStartDate(date);
      addFeNacRef.current = date;}} locale={es} />  

<Button onClick={  ()=>{
    try {
      addFeNacimiento(ID, addFeNacRef.current).then(fetchOnlyUser(ID)).then( handleClick() )
    } catch (error) {
      console.log(error)
    }
  
  }}> Agrega fecha</Button>
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
    addPerfil(ID, Perfil).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>
  Selecciona
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

<label style={{color:'black'}}><h4>Telefono:</h4></label>       
<br />
  <ToggleButton
 className="mb-2"
 id="toggle-check"
 type="checkbox"
 variant="outline-danger"
 checked={checked}
 value="1"
 onChange={(e) => setChecked(e.currentTarget.checked)}
 onClick={handleClick}
>
  Ingresa {referencia}
</ToggleButton> 

<Overlay
 show={show}
 target={target}
 placement="right"
 container={ref}
 containerPadding={20}
>
 <Popover id="popover-contained">
   <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
   <Popover.Body>
   <InputGroup className="mb-3">
 <Form.Control
   ref={addTelefonoRef}
   aria-label="Recipient's username"
   aria-describedby="basic-addon2"
 />
 <Button variant="outline-danger" id="button-addon2"   onClick={
()=>{
  try {
    addTelefono(ID, addTelefonoRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

} >
   Listo
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
    addEmpresa(ID, Empresa).then(fetchOnlyUser(ID)).then( handleClick() )
  } catch (error) {
    console.log(error)
  }

}

}>
  Selecciona
</Button>
 <SelectSearch options={optionsEmpresas} 
  search
 value={Empresa}  autoFocus onChange={setEmpresa} name="empresa" placeholder={dato} />






  
  
</Col>
)
break;
case 'Domicilio':
  return( 

    <Col ref={ref}  style={{ textAlign: "start" }} >

<label style={{color:'black' }}><h4>Domicilio:</h4></label>       
<br />
    <ToggleButton
   className="mb-2"
   id="toggle-check"
   type="checkbox"
   variant="outline-danger"
   checked={checked}
   value="1"
   onChange={(e) => setChecked(e.currentTarget.checked)}
   onClick={handleClick}
 >
    Ingresa {referencia}
 </ToggleButton> 
 
 <Overlay
   show={show}
   target={target}
   placement="right"
   container={ref}
   containerPadding={20}
 >
   <Popover id="popover-contained">
     <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
     <Popover.Body className='text-center'>
     <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control ref={addDomicilioRef} as="textarea" rows={3} />
    <br />
    <Button variant='danger' 
    onClick={
      ()=>{
        try {
          addDomicilio(ID, addDomicilioRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
        } catch (error) {
          console.log(error)
        }
      
      }
      
      }
    >Listo</Button>
  </Form.Group>
     </Popover.Body>
 
   </Popover>
 </Overlay>
</Col>



    
  )
  break;

case 'Email': 
return(

  <Col ref={ref}  style={{ textAlign: "start" }} >

<label style={{color:'black', textAlign: "start"   }}><h4>Email:</h4></label>        
<br />
  <ToggleButton
 className="mb-2"
 id="toggle-check"
 type="checkbox"
 variant="outline-danger"
 checked={checked}
 value="1"
 onChange={(e) => setChecked(e.currentTarget.checked)}
 onClick={handleClick}
>
  Ingresa {referencia}
</ToggleButton> 

<Overlay
 show={show}
 target={target}
 placement="left"
 container={ref}
 containerPadding={20}
>
 <Popover id="popover-contained">
   <Popover.Header as="h3">Agrega {referencia}</Popover.Header>
   <Popover.Body>
   <InputGroup className="mb-3">
 <Form.Control
  ref={addEmailRef}
   aria-label="Recipient's username"
   aria-describedby="basic-addon2"
 />
 <Button variant="outline-danger" id="button-addon2"      onClick={
      ()=>{
        try {
          addEmail(ID, addEmailRef.current.value).then(fetchOnlyUser(ID)).then( handleClick() )
        } catch (error) {
          console.log(error)
        }
      
      }
      
      } >
   Listo
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
