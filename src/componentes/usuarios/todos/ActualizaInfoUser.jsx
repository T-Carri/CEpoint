import React, {useContext, useState, useRef} from 'react'

import CEpointContext from '../../../context/CEpointContext';
import UiContext from '../../../context/UiContext';
import {   Button,  Offcanvas, Form } from 'react-bootstrap'
import SelectSearch from "react-select-search";
import {options,  optionsEmpresas} from '../options'

 const ActualizaInfoUser = ({prop}) => {

        const {state,
           fetchOnlyUser, 
           acNombre, 
           acPerfil, 
           acEmpresa,
            enableChecador, 
             ableChecador, 
             ableOcupado, 
             enableOcupado,
              ableAsignador, 
              enableAsignador, 
               ableAsistencias, enableAsistencias
               }= useContext(CEpointContext)
      
       const{show3, handleClose3 }=useContext(UiContext)
       const [Empresa, setEmpresa]=useState('')
       const [Perfil, setPerfil] = useState('')
    

   const nombreRef =useRef("")
  return (
     
 
 <Offcanvas show={show3} onHide={handleClose3} placement='end' responsive="lg">
      
      
      <Offcanvas.Header closeButton>
       <Offcanvas.Title>{state.OnlyUser?state.OnlyUser.nombre:null}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
          <Form >
          <Form.Group className="mb-3" controlId="formGroup1">
        <Form.Label>Actualiza nombre</Form.Label>
        <Form.Control type="text" ref={nombreRef} placeholder={state.OnlyUser?state.OnlyUser.nombre:null} />
        <Button id='Cnombre' variant='primary' onClick={()=>{
         try {
       acNombre(state.OnlyUser.UID, nombreRef.current.value )  
       fetchOnlyUser(state.OnlyUser.UID)
        } catch (error) {
         console.log('No se puede porque:  ', error)
        }
       }}>Cambiar nombre</Button>
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formGroup1">
        <Form.Label>Actualiza perfil</Form.Label>
        <SelectSearch options={options}  onChange={setPerfil}
            search 
            name="perfil" placeholder={state.OnlyUser?state.OnlyUser.perfil:null} />
        
        <Button id='Cperfil' variant='success' onClick={()=>{
         try{
     acPerfil(state.OnlyUser.UID, Perfil)
     fetchOnlyUser(state.OnlyUser.UID)
         } catch(error){
           console.log('No se puede porque:  ', error)
         }
        }}>Actualiza</Button>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroup1">
        <Form.Label>Actualiza empresa</Form.Label>
        <SelectSearch options={optionsEmpresas} 
            search   onChange={setEmpresa}
            name="empresa" placeholder={state.OnlyUser?state.OnlyUser.empresa:null} />
        
        <Button id='Cempresa' variant='success' 
        onClick={()=>{
         try {
           acEmpresa(state.OnlyUser.UID, Empresa)
           fetchOnlyUser(state.OnlyUser.UID)
         } catch (error) {
           
         }
        }}>Actualiza</Button>
      </Form.Group>
      
      <Form.Check 
             type="switch"
             id="custom-switch"
             label="¿Esta ocupado este usuario?"
             checked={state.OnlyUser?state.OnlyUser.ocupado:null}
             isValid={true}
             onChange={
               ()=>{
                 state.OnlyUser.ocupado?enableOcupado(state.OnlyUser.UID):ableOcupado(state.OnlyUser.UID);
                 fetchOnlyUser(state.OnlyUser.UID)
               }
             }
           />
           <br/>
           <Form.Check 
             type="switch"
             id="custom-switch"
             checked={state.OnlyUser?state.OnlyUser.checador:null}
             onChange={
               ()=>{
                 state.OnlyUser.checador?enableChecador(state.OnlyUser.UID):ableChecador(state.OnlyUser.UID);
                 fetchOnlyUser(state.OnlyUser.UID)
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
             checked={state.OnlyUser?state.OnlyUser.asignador:null}
             isValid={true}
             onChange={
               ()=>{
                state.OnlyUser.asignador?enableAsignador(state.OnlyUser.UID):ableAsignador(state.OnlyUser.UID);
                 fetchOnlyUser(state.OnlyUser.UID)
               }
             }
           />
           <br/>
           <Form.Check 
             type="switch"
             id="custom-switch"
             label="¿Es lector de asistencias?"
             checked={state.OnlyUser?state.OnlyUser.lectoreAsistencia:null}
             isValid={true}
             onChange={
               ()=>{
                state.OnlyUser.lectoreAsistencia?enableAsistencias(state.OnlyUser.UID):ableAsistencias(state.OnlyUser.UID);
                 fetchOnlyUser(state.OnlyUser.UID)
               }
             }
           />
      </Form>    
        </Offcanvas.Body>
     </Offcanvas>
 
  
 
    )
}

export default React.memo(ActualizaInfoUser)