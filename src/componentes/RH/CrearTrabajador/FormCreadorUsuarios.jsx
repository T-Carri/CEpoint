import React, {useState, useRef, useContext, useEffect} from 'react'
import {  Form, Row, Col} from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { 
    useNavigate
  } from 'react-router-dom';
import { ref,  uploadBytes } from "firebase/storage";
  import GppGoodIcon from '@mui/icons-material/GppGood';
  import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { db } from '../../../firebase/firebase';
import SelectSearch from "react-select-search";
import 'react-select-search/style.css'
import UiContext from '../../../context/UiContext';
import CEpointContext from '../../../context/CEpointContext';
import {setDoc, doc } from 'firebase/firestore'
import { storage } from '../../../firebase/firebase';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import {options, searchArea, optionsEmpresas} from './options'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Typography from '@mui/material/Typography';
import usuarioImg from './user.jpg'
import Webcam from "react-webcam";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

export const FormCreadorUser = () => {



    const { setToggleRH }=useContext(UiContext)
    const {state} = useContext(CEpointContext)    

      const navigate = useNavigate();
    
  
  const [error, setError] = useState('');
   

   
  
    
   const [IdUsario, setIdUsuario]=useState()
      
 

   
      
  







  console.log('uid:', IdUsario)




 

function searchDato(dato) {
  return dato;
}

/* function checkIf(dato) {
  if(dato==='1'){
    return false
  } else if(dato==='5'){
    return false
  } else if (dato ==='3'){
     return false 
    } else{
      return true
    }
  
} */



  const nombreRef= useRef(null)
  const NssRef = useRef(null)
  //Fecha de nacimiento
  const addFeNacRef=useRef(null)

  const emailRef = useRef(null)
  const telefonoUnoRef = useRef(null)
  const telefonoDosRef = useRef(null)

  const domicilioRef = useRef(null) 
  const fechaIngresoRef= useRef(null) 

const [Perfil, setPerfil] = useState('')
const [Empresa, setEmpresa]= useState('Elige empresa')
const [startDate, setStartDate] = useState(new Date());
const [Image, setImage] = useState(null)
const [openCamera, setOpenCamera] = useState(false)
const [backdropOpen, setBackdropOpen] = useState(false);
const [snackbarOpen, setSnackbarOpen] = useState(false);

const handleBackdropClose = () => {
    setBackdropOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };


const handleOpen = () => {setOpenCamera(true)
    console.log(openCamera)};
const handleClose = () => setOpenCamera(false);

  const cameraRef = useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = cameraRef.current.getScreenshot();
      setImage(imageSrc);
      setOpenCamera(false)
      
    },
    [cameraRef]
  );
 useEffect(()=> {
   const test= ()=> {
        if(!Image){
            console.log()
        }
    }
    test()
},[Image])

const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };


useEffect(()=>{
  setIdUsuario(uuidv4())
},[])




const handleregisterUser = async (e)=> {
    e.preventDefault();
    try{
    setError('')
    setBackdropOpen(true);
    const docuRef =doc(db, `users/${IdUsario}`);
    setDoc(docuRef, { 
        nombre: nombreRef.current ,
        nss:NssRef.current, 
        perfil: searchDato(Perfil),
        empresa:searchDato(Empresa), 
        area: searchArea(Perfil),
        fechaIngreso:fechaIngresoRef.current, 
        email:emailRef.current,
        telefonoTrabajador: telefonoUnoRef.current, 
        telefonoEmergencia:telefonoDosRef.current, 
      
        activo: true,
        ocupado: false,  
        UID:IdUsario,
        fechaDeCreacion: Date(), 
        alergias:[], 
        hitoriaClinica:[], 
        licencia: false,
        herramientas:[], 
        Miscelaneos:[],
        Maquinaria:[]
     
    }
    ).then(
        uploadFile(Image)
      

    ).then(
        ()=>{
            setPerfil("");
            setEmpresa("");
            setImage(null)
            nombreRef.current = "";
            NssRef.current = "";
            addFeNacRef.current = "";
            emailRef.current = "";
            telefonoUnoRef.current = "";
            telefonoDosRef.current = "";
            domicilioRef.current = "";
            fechaIngresoRef.current = "";
        }
    )

    setTimeout(() => {
        setBackdropOpen(false);
        setSnackbarOpen(true);
        setIdUsuario(uuidv4());

       
        
      }, 2000);
     
   
    } catch(e) {
    setError(e.message)
    console.log(e.message)
  
    }
    };  

     
    async function uploadFile(file) {
        const blob = await new Promise((resolve, reject)=>{
          const xhr = new XMLHttpRequest()
        xhr.onload= function (){
          resolve(xhr.response);
        };
        xhr.responseType ="blob";
        xhr.open("GET", file, true);
        xhr.send(null) 
        })
        
          const storageRef = ref(storage, `cepoint/${nombreRef.current}`)
          uploadBytes(storageRef, blob).then((snapshot)=>{
            console.log('Uploaded a data_url string!')
          })
          
        } 
     
      
      
      
    
  
  
   
  







  return (
    <>
      <Backdrop  open={backdropOpen} onClick={handleBackdropClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >

<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
        
      </Snackbar>






<Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" 
    onClick={()=>{
      navigate("../../recursosHumanos",  {replace:true}) 
      setToggleRH(false)
    }}><BsArrowLeftCircle /> Home
                                </Button>

<Box    component="form"   sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}    onSubmit={handleregisterUser}     >
    <Row>
        <Col>    <br />
<Chip label={IdUsario&&<GppGoodIcon/>} color="success"   />
       </Col>
        <Col>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={Image?Image:usuarioImg}
        alt="Live from space album cover"
      />
        </Col>

    </Row>

 
<Row>
<Col> <Form.Group className="mb-2" >
               <Form.Label>Nombre del trabajador</Form.Label>
               <br />

               <TextField
          required
          id="outlined-required"
          label="Required"
           
          onChange={(e) => {
              
              nombreRef.current = e.target.value.toUpperCase();
          }}
        />



            </Form.Group></Col>
            <Col> <Form.Group className="mb-2" >
               <Form.Label>NSS</Form.Label>
               <br />
               <TextField
          required
          id="outlined-required"
          label="Required"
           
          onChange={(e) => {
              
            NssRef.current = e.target.value.toUpperCase();
          }}
        />


            </Form.Group></Col>

     

    
</Row>
<Row>
<Col>
 <Form.Group className="mb-2" >
   <Form.Label>Perfil</Form.Label>
  <br />
    <SelectSearch options={options} 
     /* renderValue={options} */  search
      value={Perfil} onChange={setPerfil} name="perfil" placeholder="Elige el perfil" />

  </Form.Group>
</Col> 
<Col>
<Form.Label>Elige su empresa</Form.Label>

<SelectSearch options={optionsEmpresas} 
       search
      value={Empresa} onChange={setEmpresa} name="empresa" placeholder="Elige la empresa" />
     </Col>

</Row>


<Row>
<Col> <Form.Group className="mb-2" >
                <Form.Label>Fecha de ingreso</Form.Label>
                <br />
                <br />
<DatePicker 
    
     
    selected={startDate} onChange={(date) => {
     setStartDate(date);
     fechaIngresoRef.current = date;}} locale={es} />  
            </Form.Group></Col>
            <Col> <Form.Group className="mb-2" >
               <Form.Label>Email</Form.Label>
               <br />
               <TextField
          required
          id="outlined-required"
          label="Required"
           
          onChange={(e) => {
              
            emailRef.current = e.target.value;
          }}
        />

            </Form.Group></Col>

</Row>

<Row>
<Col> <Form.Group className="mb-2" >
               <Form.Label>Telefono</Form.Label>
               <br />
               <TextField
          required
          id="outlined-required"
          label="Required"
           
          onChange={(e) => {
              
            telefonoUnoRef.current = e.target.value;
          }}
        />

            </Form.Group></Col>
            <Col> <Form.Group className="mb-2" >
               <Form.Label>Telefono de emergencia</Form.Label>
               <br />
               <TextField
          required
          id="outlined-required"
          label="Required"
           
          onChange={(e) => {
              
            telefonoDosRef.current = e.target.value;
          }}
        />

            </Form.Group></Col>

</Row>

<Row>
<Col>
<Form.Group className="mb-2" >
               <Form.Label>Domicilio</Form.Label>
               <br />
               <TextField
          id="outlined-textarea"
          label="Domicilio"
          placeholder="Placeholder"
          multiline 
          onChange={(e) => {
              
            domicilioRef.current = e.target.value;
          }}
        />


            </Form.Group>
            </Col>
            <Col> <Form.Group className="mb-2" >
            <Form.Label>Fecha de nacimiento</Form.Label>
            <br />
                <br />
<DatePicker 
    
     
    selected={startDate} onChange={(date) => {
     setStartDate(date);
     addFeNacRef.current = date;}} locale={es} />  
            </Form.Group></Col>
</Row>


<Row>

          
    <Col>  
    <Form.Label>Agrega foto de trabajador</Form.Label>
      <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" onChange={handleChange} />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleOpen}>
       
        <PhotoCamera />
      </IconButton>
    </Stack>

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCamera}
        onClose={handleClose}
        closeAfterTransition
      
      >
        <Fade in={openCamera}>
          <Box sx={style} >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Tomar foto
            </Typography>
            <Webcam audio={false} height={350} ref={cameraRef} width={350} />
      <Button   variant="contained" onClick={capture}>Capture photo</Button>

          </Box>
        </Fade>
      </Modal>

    </Col>


<Col>
<br />
        <Button className='crearUser' variant="contained" type="submit"  size="large" color="success" >Crear</Button>
     </Col>
</Row>
</Box>
</>
  )
}