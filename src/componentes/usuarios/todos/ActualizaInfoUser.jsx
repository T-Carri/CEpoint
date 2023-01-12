import React, {useContext, useState, useRef} from 'react'
import UsuariosContext from '../../../context/UsuariosContext';
import UiContext from '../../../context/UiContext';
import { Card,  Button,  Offcanvas, Form, Row, Col, Overlay, Popover, Container } from 'react-bootstrap'
import SelectSearch from "react-select-search";
import {options,  optionsEmpresas} from '../options'

 const ActualizaInfoUser = ({prop}) => {
    const {
        fetchOnlyUser,
         OnlyUser, 
         acNombre, 
         acPerfil, 
         acEmpresa,
         ableChecador,
         enableChecador,
         ableOcupado,
         enableOcupado, 
         ableAsignador, 
         enableAsignador, 
         ableAsistencias, 
         enableAsistencias 
       }=useContext(UsuariosContext)
        
      
       const{show3, handleClose3 }=useContext(UiContext)
       const [Empresa, setEmpresa]=useState('')
       const [Perfil, setPerfil] = useState('')
    

   const nombreRef =useRef("")
  return (
     
 
 <Offcanvas show={show3} onHide={handleClose3} placement='end' responsive="lg">
      
      
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
     </Offcanvas>
 
  
 
    )
}

export default React.memo(ActualizaInfoUser)