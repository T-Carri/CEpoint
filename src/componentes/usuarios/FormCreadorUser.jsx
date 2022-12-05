import React, {useState, useRef, useContext, useEffect} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase/firebase';
import SelectSearch from "react-select-search";
import 'react-select-search/style.css'
import UsuariosContext from '../../context/UsuariosContext';
import {setDoc, doc} from 'firebase/firestore'

import {options, searchArea, optionsEmpresas} from './options'
export const FormCreadorUser = () => {
    //necesario para registrar  en dos modalidades, manual y por google unicamente
  const {Usuarios, getUsuarios} = useContext(UsuariosContext)    


    const [error, setError] = useState('');
    const [UidUser, setUidUser]=useState('')
    const {createUsuario} = UserAuth();
   
    const [Perfil, setPerfil] = useState('')
    const [Empresa, setEmpresa]= useState('Elige empresa')
    
   
      
 

   
      
      
      
     
      const radiosAsis = [
        { name: 'Deshabilitado', value: '1' },
        { name: 'Habilitar', value: '2' }
         ];
         const [radioValueAsis, setRadioValueAsis] = useState('1');
      
      const radiosAsig = [
        { name: 'Deshabilitado', value: '3' },
        { name: 'Habilitar', value: '4' }
        ];
        const [radioValueAsig, setRadioValueAsig] = useState('3');
        const radiosChec = [
          { name: 'Deshabilitado', value: '5' },
        { name: 'Habilitar', value: '6' }
        ];
        const [radioValueChec, setRadioValueChec] = useState('5');
    
           
     


    const formCreatorUser= {
        email: '', 
        password: '',
        nombre: ''
      

 }   
 //radioValueAsis==='1'?false:true


const [values, setValues] = useState('')
const [Email, setEmail]= useState('')
const [Password, setPassword]= useState('')
const [Nombre, setNombre] = useState('')
 //TODO: HANDLE


  const handleInputChange = async (e) =>{
  const {name, value} = e.target;
 await setValues({...values, [name]: value}); 
     setEmail(values.email)
   setPassword(values.password)
   setNombre(values.nombre)
   setPassword(values.password)
  
 }   
 

/*  useEffect(   
  handleInputChange()
   ,[]) */
//console.log("values:", values)
//console.log(formCreatorUser)
//console.log(Perfil)
//console.log('Perfil search', searchDato(Perfil) )
//console.log('Area:', searchArea(Perfil))
//console.log(Empresa)
//console.log('empresa search', searchDato(Empresa) )

//console.log(Email)
//console.log(Password)
//console.log( 'nombre:', Nombre)
   const handleregisterUser = async (e)=> {
    e.preventDefault();
    try{
      setError('')
     const infouser = await createUsuario(values.email, values.password);
      console.log(infouser.user.uid)
       setUidUser(infouser.user.uid)
  const docuRef =doc(db, `users/${infouser.user.uid}`);
  setDoc(docuRef, { 
    activo: false ,
    asignador:  checkIf(radioValueAsig),
    checador:checkIf(radioValueChec) ,
    email: values.email, 
    password: values.password,
    empresa:searchDato(Empresa), 
    lectoreAsistencia : checkIf(radioValueAsis), 
    nombre: values.nombre,
    ocupado: false,  
    perfil: searchDato(Perfil),
    area: searchArea(Perfil),
    rol: 'usuario',
    usator: false, 
    fechaDeCreacion: Date(), 
    UID:infouser.user.uid
   }
   )
    setValues({...formCreatorUser}) 
   setRadioValueChec('5')
   setRadioValueAsig('3')
   setRadioValueAsis('1')
   setPerfil('')
   setEmpresa('') 
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  };  

/* 
const handleregisterUser = async (e)=> {
  e.preventDefault();
  getAuth(app)
  .createUser({
     email: values.email,
    phoneNumber: values.password
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });
} */
/*   
  const handleregisterUser = async (e)=> {
    e.preventDefault();
    try{
      setError('')

getAuth.createUser({
  email: values.email,
  password: values.password
}).then(
  (userRecord)=>{
    console.log(userRecord.uid)
    setUidUser(userRecord.uid)
const docuRef =doc(db, `users/${userRecord.uid}`);
setDoc(docuRef, { 
 activo: false ,
 asignador:  checkIf(radioValueAsig),
 checador:checkIf(radioValueChec) ,
 email: values.email, 
 password: values.password,
 empresa:searchDato(Empresa), 
 lectoreAsistencia : checkIf(radioValueAsis), 
 nombre: values.nombre,
 ocupado: false,  
 perfil: searchDato(Perfil),
 area: searchArea(Perfil),
 rol: 'usuario',
 usator: false, 
 fechaDeCreacion: Date(), 
 UID:userRecord.uid
}
)
 setValues({...formCreatorUser}) 
setRadioValueChec('5')
setRadioValueAsig('3')
setRadioValueAsis('1')
setPerfil('')
setEmpresa('') 
  }
)





     
     
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  }; */




 

function searchDato(dato) {
  return dato;
}

function checkIf(dato) {
  if(dato==='1'){
    return false
  } else if(dato==='5'){
    return false
  } else if (dato ==='3'){
     return false 
    } else{
      return true
    }
  
}






  return (


<Form     onSubmit={handleregisterUser}    >
    <Row>
        <Col> <Form.Group className="mb-2" >
                 <Form.Label>Email</Form.Label>
<Form.Control type="String" name="email" id='email' value={values.email}  onChange={handleInputChange} placeholder="Correo" />
              </Form.Group></Col>
       <Col> <Form.Group className="mb-2" >
                <Form.Label>Password</Form.Label>
<Form.Control type="String" name="password" id='password' value={values.password}  onChange={handleInputChange} placeholder="password"  />
           </Form.Group></Col>
</Row>
<Row>
<Col> <Form.Group className="mb-2" >
               <Form.Label>Nombre del trabajador</Form.Label>
<Form.Control type="String" name="nombre" id='nombre' value={values.nombre}  onChange={handleInputChange}  placeholder="Nombre" />

            </Form.Group></Col>
<Col>
<Form.Label>Elige su empresa</Form.Label>

<SelectSearch options={optionsEmpresas} 
       search
      value={Empresa} onChange={setEmpresa} name="empresa" placeholder="Elige la empresa" />
     </Col>
     

    
</Row>
<Row>
<Col>
 <Form.Group className="mb-2" >
   <Form.Label>Perfil</Form.Label>
  
    <SelectSearch options={options} 
     /* renderValue={options} */  search
      value={Perfil} onChange={setPerfil} name="perfil" placeholder="Elige el perfil" />

  </Form.Group>
</Col>
<Col>
        <Button className='crearUser' variant='success' size='lg' type="submit" >Crear</Button>
     </Col>
</Row>
<Row>

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

</Form>
  )
}

