import React, {useState, useRef, useContext, useEffect} from 'react'
import {  Button, Form, Row, Col} from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
//import { getAuth } from 'firebase/auth'; 
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase/firebase';
import SelectSearch from "react-select-search";
import 'react-select-search/style.css'
import UsuariosContext from '../../context/UsuariosContext';
import {getFirestore, setDoc, updateDoc, arrayUnion, doc, onSnapshot, addDoc ,getDoc, collection,  query, where,} from 'firebase/firestore'

export const FormCreadorUser = () => {
    //necesario para registrar  en dos modalidades, manual y por google unicamente
  const {Usuarios, getUsuarios} = useContext(UsuariosContext)    


    const [error, setError] = useState('');
    const [UidUser, setUidUser]=useState('')
    const {createUser} = UserAuth();
   
    const [Perfil, setPerfil] = useState('')
   
      


      const options = [
        {
          type: "group",
          name: "CIVILES",
          items: [
            
            { name: "Residente de obra", value: "Residente de obra" },
            { name: "Arquitecto proyectista", value: "Arquitecto proyectista" },
            { name: "Cabo albañil", value: "Cabo albañil" },
            { name: "Oficial albañil", value: "Oficial albañil" }, 
            { name: "Ayudante albañil", value: "Ayudante albañil" },
            { name: "Ayudante general", value: "Ayudante general" },
            { name: "Operador", value: "Operador" }
            
          ] 
        },
        {
          type: "group",
          name: "SEGURIDAD E HIGIENE",
          items: [
            { name: "Coordinador de SHE", value: "Coordinador de SHE" },
            { name: "Supervision de SHE", value: "Supervision de SHE" }
           
          ]
        },
        {
          type: "group",
          name: "ELECTRICOS",
          items: [ 
            { name: "Residente electrico", value: "Residente electrico" },
            { name: "Oficial electrico", value: "Oficial electrico" },
            { name: "Ayudante electrico", value: "Ayudante electrico" }      
          ]
        }, 
        {
          type: "group",
          name: "HERRERIA",
          items: [ 
            { name: " Cabo soldador", value: "Cabo soldador" },
            { name: "Soldador", value: "Soldador" },
            { name: "Herrero", value: "Herrero" },
            { name: "Ayudante de soldador", value: "Ayudante de soldador" },
            { name: "Maestro aluminiero", value: "Maestro aluminiero" },
               ]
        },
        {
          type: "group",
          name: "DIRECCION",
          items: [ 
            { name: "Director MacBrick", value: "Director MacBrick" },
            { name: "Director inmobiliaria", value: "Director inmobiliaria" },
            { name: "Director SIARSA", value: "Director SIARSA" },
            { name: "Director SECMA", value: "Director SECMA" }, 
            { name: "Director CE2000", value: "Director CE2000" },
            { name: "Director SOLCOM", value: "Director SOLCOM" }     
          ]
        },
        {
          type: "group",
          name: "SIARSA",
          items: [ 
            { name: "Gerente de operaciones", value: "Gerente de operaciones" },
            { name: "Tecnico especialista", value: "Tecnico especialista" }
          ]
        },
        {
          type: "group",
          name: "SECMA",
          items: [ 
            { name: "Proyectos CCTV", value: "Proyectos CCTV" },
            { name: "Operacion CCTV", value: "Operacion CCTV" },
            { name: "Tecnico CCTV", value: "Tecnico CCTV" }
          ]
        },
        {
          type: "group",
          name: "SOLCOM",
          items: [ 
            { name: "Asistente Direccion", value: "Asistente Direccion" }
          
          ]
        },
        {
          type: "group",
          name: "ALMACEN",
          items: [ 
            { name: "Chofer", value: "Chofer" }
          
          ]
        }


      ];
      
      
      
     
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
  activo: false ,
  asignador:radioValueAsig ==='3'?false:true,
  checador: radioValueChec ==='5'?false:true,
  email: '', 
  password: '',
  empresa:'', 
  lectoreAsistencia: radioValueAsis==='1'?false:true, 
  nombre: '',
  ocupado: false,  
  perfil: Perfil.toString(), 
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
 
console.log("values:", values)
console.log(formCreatorUser)
 
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
  asignador:values.asignador,
  checador: values.checador,
  email: values.email, 
  password: values.password,
  empresa:values.empresa, 
  lectoreAsistencia : values.lectoreAsistencia, 
  nombre: values.nombre,
  ocupado: values.ocupado,  
  perfil: formCreatorUser.perfil, 
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
  } catch(e) {
    setError(e.message)
    console.log(e.message)
  }
}; 


/* 


useEffect( 
  ()=>{

    
  }
  
,[  handleregisterUser()])


 */






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
<Form.Select name='empresa' id='empresa'   onChange={handleInputChange}  aria-label="Default select example">
      <option>Empresas</option>
      <option value="CE2000">CE2000</option>
      <option value="SECMA">SECMA</option>
      <option value="SIARSA">SIARSA</option>
      <option value="MCBRICK">MCBRICK</option>
      <option value="SOLCOM">SOLCOM</option>
      <option value="INMOBILIARIA">INMOBILIARIA</option>
    </Form.Select>
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

