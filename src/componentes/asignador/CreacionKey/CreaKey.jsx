import React, {useRef, useState} from 'react'
import { Grid } from '@mui/material';
import { Card, Container, Toast, Button,  Form, Badge, Row, Col } from 'react-bootstrap'
import { UserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase/firebase';
import {setDoc, doc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
export const CreaKey = () => {
  const [error, setError] = useState('');
  const [UidUser, setUidUser]=useState('')
  const {createUsuario} = UserAuth();

const emailRef=useRef(null)
const passwordRef=useRef(null)
const keyRef=useRef(null)

const navigate=useNavigate()




  const handleregisterUser = async (e)=> {
    e.preventDefault();
    try{
    setError('')
    const infouser = await createUsuario(emailRef.current.value, passwordRef.current.value);
    console.log(infouser.user.uid)
     setUidUser(infouser.user.uid)
    const docuRef =doc(db, `cuentas/${infouser.user.uid}`);
    setDoc(docuRef, { 
      UID:infouser.user.uid, 
      activo: true ,
      almacen: null,
      area: 'CUENTAKEYCHECADOR',
      perfil:'CHECADOR',
      asignador:  false,
      checador:false ,
      email: emailRef.current.value, 
      
      lectoreAsistencia : false, 
      nombre: keyRef.current.value,
      password: passwordRef.current.value,
      
      rh: false,
      rol: 'usuario',
      usator: false, 
      fechaDeCreacion: Date(), 
    }
    ).then(()=>navigate('../creaproyecto'))
 
    } catch(e) {
    setError(e.message)
    console.log(e.message)
    }
    };  



  return (
    <Grid container>
      <Grid container direction='row' justifyContent='center'  alignItems="center"> 
<Grid item ><strong className="me-auto">
      <h4>Creando llave para ingresar a checador app movil</h4>
      </strong></Grid>
</Grid>
    <Form     onSubmit={handleregisterUser}     >
    <Row>
      <Col> <Form.Group className="mb-2" >
               <Form.Label>Email</Form.Label>
    <Form.Control type="String" name="email" id='email' ref={emailRef} placeholder="Correo" />
            </Form.Group></Col>
     <Col> <Form.Group className="mb-2" >
              <Form.Label>Password</Form.Label>
    <Form.Control type="String" name="password" id='password' ref={passwordRef}  placeholder="password"  />
         </Form.Group></Col>
    </Row>
    <Row>
    <Col> <Form.Group className="mb-2" >
             <Form.Label>Nombre de la llave</Form.Label>
    <Form.Control type="String" name="nombre" id='nombre'  ref={keyRef}   placeholder="Asigna nombre a esta llave (Por ejemplo: presupuesto 9)" />
    
          </Form.Group></Col>

    
    
    
    </Row>
    <Row>

    <Col>
      <Button className='crearUser' variant='success' size='lg' type="submit" >Crear</Button>
    </Col>
    </Row>
    <Row>
    
    </Row>
  
    
    </Form>
    </Grid>
  )
}
