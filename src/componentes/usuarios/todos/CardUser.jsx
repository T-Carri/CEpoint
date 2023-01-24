import React from 'react'
import { Card,  Button,  Offcanvas, Form, Row, Col, Overlay, Popover } from 'react-bootstrap'

export const CardUser = ({prop}) => {
  return (
    
    <Card  className='trabajadores' /* ref={ref} */ >
    <Card.Body>
    
    <Card.Title>{prop.perfil}</Card.Title>
    <Card.Title><strong>{prop.nombre}</strong></Card.Title>
    <Card.Title>{prop.email}</Card.Title>
    <Card.Title>{prop.password}</Card.Title>
    <Card.Title>{prop.Uid}</Card.Title>
     
    {/*  <Button className='actualizarUser' variant='success' onClick={
       ()=>(
       
        handleShow3(),
        fetchOnlyUser(s.Uid),
        setId(s.Uid)
      )
      }>
      Actualizar
     </Button> */}
     <br/>
     <br/>
    <Row>
     <Col>   
    {/*  <Button variant='secondary' id='desactiva' onClick={
     ()=>{
      try {
        
          desactivaUser(s.Uid)
      } catch (error) {
        console.log(error)
      }
        
      }
    }>
      Desactivar
     </Button> */}
     </Col>
     <Col>   
    {/*  <Button variant='danger' id='desactiva' >
      foto  
     </Button> */}
     </Col>
     <Col>   
    {/*   <Button variant='danger' id='desactiva' 
     
       onClick={
       (event) => {
         setShow1(!show1);
         setTarget(event.target);
         setUserQr(s)
         toDataURL(`${s.Uid}`,  function (err, url) {
           console.log(url)
           setQRurl(url)
          
       
         })
      
       }
       
       }>
      QR
     </Button> */}
   
   
    {/*  <Overlay
       show={show1}
       target={target}
       placement="bottom"
       //container={ref}
       containerPadding={20}
     >
       <Popover id="popover-contained">
         <Popover.Header as="h3">{UserQr?UserQr.nombre:null}</Popover.Header>
         <Popover.Body>

       <img  src={ QRurl }
        />
         
         <Button variant='success'>Descargar</Button>
         
         </Popover.Body>
       </Popover>
     </Overlay> */}
    
     </Col>

    </Row>
  
     
    
    
    </Card.Body>
     
    
    {/*  <Offcanvas show={show3} onHide={handleClose3} placement='end' responsive="lg">
     
     
     <Offcanvas.Header closeButton>
      <Offcanvas.Title>{OnlyUser?OnlyUser.nombre:null}</Offcanvas.Title>
     </Offcanvas.Header>
     <Offcanvas.Body>
         <Form >
         <Form.Group className="mb-3" controlId="formGroup1">
       <Form.Label>Actualiza nombre</Form.Label>
       <Form.Control type="text" ref={nombreRef} placeholder={OnlyUser?OnlyUser.nombre:null} />
       <Button id='Cnombre' variant='primary' onClick={()=>{
        try {
      acNombre(OnlyUser.UID, nombreRef.current.value )  
      fetchOnlyUser(OnlyUser.UID)
       } catch (error) {
        console.log('No se puede porque:  ', error)
       }
      }}>Cambiar nombre</Button>
     </Form.Group>
     
     
     <Form.Group className="mb-3" controlId="formGroup1">
       <Form.Label>Actualiza perfil</Form.Label>
       <SelectSearch options={options}  onChange={setPerfil}
           search 
           name="perfil" placeholder={OnlyUser?OnlyUser.perfil:null} />
       
       <Button id='Cperfil' variant='success' onClick={()=>{
        try{
    acPerfil(OnlyUser.UID, Perfil)
    fetchOnlyUser(OnlyUser.UID)
        } catch(error){
          console.log('No se puede porque:  ', error)
        }
       }}>Actualiza</Button>
     </Form.Group>
     
     <Form.Group className="mb-3" controlId="formGroup1">
       <Form.Label>Actualiza empresa</Form.Label>
       <SelectSearch options={optionsEmpresas} 
           search   onChange={setEmpresa}
           name="empresa" placeholder={OnlyUser?OnlyUser.empresa:null} />
       
       <Button id='Cempresa' variant='success' 
       onClick={()=>{
        try {
          acEmpresa(OnlyUser.UID, Empresa)
          fetchOnlyUser(OnlyUser.UID)
        } catch (error) {
          
        }
       }}>Actualiza</Button>
     </Form.Group>
     
     <Form.Check 
            type="switch"
            id="custom-switch"
            label="¿Esta ocupado este usuario?"
            checked={OnlyUser?OnlyUser.ocupado:null}
            isValid={true}
            onChange={
              ()=>{
                OnlyUser.ocupado?enableOcupado(OnlyUser.UID):ableOcupado(OnlyUser.UID);
                fetchOnlyUser(OnlyUser.UID)
              }
            }
          />
          <br/>
          <Form.Check 
            type="switch"
            id="custom-switch"
            checked={OnlyUser?OnlyUser.checador:null}
            onChange={
              ()=>{
                OnlyUser.checador?enableChecador(OnlyUser.UID):ableChecador(OnlyUser.UID);
                fetchOnlyUser(OnlyUser.UID)
              }
            }
            isValid={true}
            label="¿Tiene habilitado el checador?"
          />
          <br/>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="¿Es asignador?"
            checked={OnlyUser?OnlyUser.asignador:null}
            isValid={true}
            onChange={
              ()=>{
                OnlyUser.asignador?enableAsignador(OnlyUser.UID):ableAsignador(OnlyUser.UID);
                fetchOnlyUser(OnlyUser.UID)
              }
            }
          />
          <br/>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="¿Es lector de asistencias?"
            checked={OnlyUser?OnlyUser.lectoreAsistencia:null}
            isValid={true}
            onChange={
              ()=>{
                OnlyUser.lectoreAsistencia?enableAsistencias(OnlyUser.UID):ableAsistencias(OnlyUser.UID);
                fetchOnlyUser(OnlyUser.UID)
              }
            }
          />
     </Form>    
       </Offcanvas.Body>
    </Offcanvas> */}
    
     </Card>
    
  )
}
