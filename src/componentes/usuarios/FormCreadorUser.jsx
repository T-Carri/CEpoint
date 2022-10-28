import React, {useState} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
//import { getAuth } from 'firebase/auth'; 
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase/firebase';

import {getFirestore, setDoc, updateDoc, arrayUnion, doc, onSnapshot, addDoc ,getDoc, collection,  query, where,} from 'firebase/firestore'
import { useEffect } from 'react';
export const FormCreadorUser = () => {
    //necesario para registrar  en dos modalidades, manual y por google unicamente
    const [error, setError] = useState('');
    const [UidUser, setUidUser]=useState('')
    const {createUser} = UserAuth();
    const [radioValueAsis, setRadioValueAsis] = useState('1');
    const [radioValueAsig, setRadioValueAsig] = useState('3');
    const [radioValueChec, setRadioValueChec] = useState('5');
    const radiosAsis = [
      { name: 'Deshabilitado', value: '1' },
      { name: 'Habilitar', value: '2' },
       ];
    
    const radiosAsig = [
      { name: 'Deshabilitado', value: '3' },
      { name: 'Habilitar', value: '4' },
      ];
      const radiosChec = [
        { name: 'Deshabilitado', value: '5' },
      { name: 'Habilitar', value: '6' },
      ];
      


 const formCreatorUser= {
  activo: false ,
  asignador: radioValueAsig ==='1'? false: true,
  checador: radioValueChec ==='5'? false: true,
  email: '', 
  password: '',
  empresa:'', 
  lectoreAsistencia :radioValueAsis ==='3'? false: true, 
  nombre: '',
  ocupado: false,  
  perfil: '', 
  rol: 'usuario',
  usator: false, 
  fechaDeCreacion: Date()

 }


const [values, setValues] = useState(formCreatorUser)
const [email, setEmail]= useState('')

const [password, setPassword]= useState('')
 //TODO: HANDLE


  const handleInputChange = (e) =>{
  const {name, value} = e.target;
  setValues({...values, [name]: value}); 
  setEmail(values.email);
  setPassword(values.password);
  
 }  

 const handleregisterUser = async (e)=> {
  e.preventDefault();
  try{
    setError('')
   const infouser = await createUser(email, password);
    console.log(infouser.user.uid)
     setUidUser(infouser.user.uid)
const docuRef =doc(db, `users/${infouser.user.uid}`);
setDoc(docuRef, { 
  activo: false ,
  asignador: values.asignador,
  checador: values.checador,
  email: values.email, 
  password: values.password,
  empresa:values.empresa, 
  lectoreAsistencia : values.lectoreAsistencia, 
  nombre: values.nombre,
  ocupado: values.ocupado,  
  perfil: values.perfil, 
  rol: 'usuario',
  usator: false, 
  fechaDeCreacion: Date()
 }
 )


  } catch(e) {
    setError(e.message)
    console.log(e.message)
  }
};










  return (


<Form    onSubmit={handleregisterUser}   >
    <Row>
        <Col> <Form.Group className="mb-2" >
                 <Form.Label>Email</Form.Label>
<Form.Control type="String" name="email" id='email' onChange={handleInputChange} placeholder="Correo" />
              </Form.Group></Col>
       <Col> <Form.Group className="mb-2" >
                <Form.Label>Password</Form.Label>
<Form.Control type="String" name="password" id='password' onChange={handleInputChange} placeholder="password"  />
           </Form.Group></Col>
</Row>
<Row>
<Col> <Form.Group className="mb-2" >
               <Form.Label>Nombre del trabajador</Form.Label>
<Form.Control type="String" name="nombre" id='nombre'  onChange={handleInputChange}  placeholder="Nombre" />

            </Form.Group></Col>
<Col>
<Form.Label>Elige su empresa</Form.Label>
<Form.Select name='empresa' id='empresa'   onChange={handleInputChange}  aria-label="Default select example">
      <option>Empresas</option>
      <option value="CE2000">CE2000</option>
      <option value="SECMA">SECMA</option>
      <option value="SIARSA">SIARSA</option>
      <option value="MCBRICK">MCBRICK</option>
      <option value="SOLCOM">SOLCOM</option>
      <option value="INMOVILIARIA">INMOVILIARIA</option>
    </Form.Select>
     </Col>
     

    
</Row>
<Row>
<Col>
 <Form.Group className="mb-2" >
   <Form.Label>Perfil</Form.Label>
   <Form.Control type="String" name="perfil" id='perfil'  onChange={handleInputChange}  placeholder="Perfil del trabajador" />

  </Form.Group>
</Col>
</Row>
<Row>

 
     <Form.Label> <h5><strong> Asistencias  </strong>    </h5>  </Form.Label>
     <ButtonGroup>
        {radiosAsis.map((radio, idxAs) => (
          <ToggleButton
            key={idxAs}
            id={`radio1-${idxAs}`}
            type="radio"
            variant={idxAs % 2 ? 'outline-warning' : 'outline-danger'}
            name="radio1"
            value={radio.value}
            checked={radioValueAsis === radio.value}
            onChange={(e) => setRadioValueAsis(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
     
 
</Row>
<Row>

 
     <Form.Label> <h5><strong> Asignador </strong>    </h5>   </Form.Label>
     <ButtonGroup>
        {radiosAsig.map((radio, idxA) => (
          <ToggleButton
            key={idxA}
            id={`radio2-${idxA}`}
            type="radio"
            variant={idxA % 2 ? 'outline-warning' : 'outline-danger'}
            name="radio2"
            value={radio.value}
            checked={radioValueAsig === radio.value}
            onChange={(e) => setRadioValueAsig(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
</Row>
<Row>

 
     <Form.Label> <h5><strong> Habilitar Checador  </strong>    </h5>  </Form.Label>
     <ButtonGroup>
        {radiosChec.map((radio, idxC) => (
          <ToggleButton
            key={idxC}
            id={`radio3-${idxC}`}
            type="radio"
            variant={idxC % 2 ? 'outline-warning' : 'outline-danger'}
            name="radio3"
            value={radio.value}
            checked={radioValueChec === radio.value}
            onChange={(e) => setRadioValueChec(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    
</Row>
<Col>
        <Button className='crearUser' variant='success' size='lg' type="submit" >Enviar</Button>
     </Col>
</Form>
  )
}

