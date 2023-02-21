import React, {useEffect, useContext, useRef, useState} from 'react'
import { useParams } from 'react-router-dom'
import CEpointContext from '../../../context/CEpointContext'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import WorkIcon from '@mui/icons-material/Work';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PersonIcon from '@mui/icons-material/Person';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const currencies = [
  {
    value: 'Activo',
    label: 'Activo',
  },
  {
    value: 'Adicional',
    label: 'Adicional',
  },
  {
    value: 'Garantia',
    label: 'Garantia',
  },
  {
    value: 'Inactivo',
    label: 'Inactivo',
  },
];


const empresas = [
  {
    value: 'CE2000',
    label: 'CE2000',
  },
  {
    value: 'MCBRICK',
    label: 'MCBRICK',
  },
  {
    value: 'SIARSA',
    label: 'SIARSA',
  },
  {
    value: 'SECMA',
    label: 'SECMA',
  },
  {
    value: 'SOLCOM',
    label: 'SOLCOM',
  },
];



export const Proyecto = () => { 

    const {electo } = useParams()

  
  const {state, getSelectProyect, editaEstado, fetchChecadorAsignadoUser, getUsuariosChecador, editaEmpresa, editaPresupuesto,  editaObra, editaUbicacion, editaResidenteUid  }=useContext(CEpointContext)



    const estadoRef = useRef(null)
    const nombreRef = useRef(null)
    const empresaRef= useRef(null)
    const presupuestoRef= useRef(null)
    const obraRef= useRef(null)
    const ubicacionRef= useRef(null)



const handleEstadoChange = (event) => {
  estadoRef.current = event.target.value;
  console.log(
    estadoRef.current,  empresaRef.current, presupuestoRef.current, obraRef.current
   )
};
const [name, setName]=useState()
const handleNameChange = (event) => {
  nombreRef.current = event.target.value;
  setName( event.target.value)
   console.log(nombreRef.current)
};
const handleEmpresaChange = (event) => {
  empresaRef.current = event.target.value;
  console.log(
    estadoRef.current,  empresaRef.current, presupuestoRef.current, obraRef.current
   )
};

/*     useEffect(()=>{

        async function fetchData() {
          await getUsuariosChecador();
        }
        fetchData();

    },[])  */

useEffect( ()=>{
  
    getSelectProyect(electo)
 
    
 
    
} ,[electo])

useEffect(()=>{
  fetchChecadorAsignadoUser(state.selectProyecto.residenteUid)
},[state.selectProyecto.presupuesto])

useEffect(()=>{
  fetchChecadorAsignadoUser(state.selectProyecto.residenteUid)
},[state.selectProyecto.residenteUid])


/* useEffect(()=>{
  fetchChecadorAsignadoUser(state.selectProyecto.residenteUid)
},[state.selectProyecto.residenteUid])
 */


const [open, setOpen] = useState(false)



useEffect(()=>{
  const fetchAccounts = ()=>{
    if(open){
      getUsuariosChecador()
      console.log('fetched :)')
    } 
  }
  fetchAccounts()

} ,[open])

const clickEstado=()=>{
  editaEstado(state.selectProyecto.idProyecto, estadoRef.current )
  
}

const clickEmpresa=()=>{
  editaEmpresa(state.selectProyecto.idProyecto, empresaRef.current )

}

const clickPresupuesto=()=>{
  editaPresupuesto(state.selectProyecto.idProyecto, presupuestoRef.current )
 
}

const clickObra=()=>{
  editaObra(state.selectProyecto.idProyecto, obraRef.current )
 
}
const clickUbicacion=()=>{
  editaUbicacion(state.selectProyecto.idProyecto, ubicacionRef.current )
  
}

const clickName=()=>{
  editaResidenteUid(state.selectProyecto.idProyecto, nombreRef.current )
  
}

//console.log(state.selectProyecto)

//console.log(state.selectProyecto.residenteUid?state.selectProyecto.residenteUid:null)


console.log(open)




  return (
    <div>

<Card sx={{ minWidth: 275 }}>


 
 <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
   {electo}
 </Typography>

<Grid container spacing={2}>
<Grid item xs={6}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={()=>setOpen(!open)}
        >
          <Typography>
           <strong>Editar proyecto</strong>  </Typography>
        </AccordionSummary>
        <AccordionDetails>
         

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container   direction="row"
  justifyContent="center"
  alignItems="center">
        <Grid item >
        <TextField
       
          id="outlined-select-currency"
          select
          label="Cambia estado"
          onChange={handleEstadoChange}
          
          helperText="Selecciona estado de proyecto"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value}     value={option.value}>
              {option.label}
            </MenuItem>  
          ))}
        </TextField>

        </Grid>
        <Grid item sx={{pb:3}}>
  
        <Button variant="contained" color="success" onClick={clickEstado}>Aceptar</Button>

        </Grid>

     
      </Grid>

{state.UsuariosDisponiblesChecador&&
  <Grid container  direction="row"
  justifyContent="center"
  alignItems="center">
    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Cuenta</InputLabel>
    <Select
   
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={name}
      label="Cuenta"
      onChange={handleNameChange}
    >
          {state.UsuariosDisponiblesChecador.map((option) => (
        <MenuItem key={option.UID} value={option.UID}>
          {option.email}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
    </Grid>
    <Grid item sx={{pl:1}}>

    <Button variant="contained" color="success" onClick={clickName}>Aceptar</Button>
    </Grid>

 



  </Grid>


}




<br />


    


      <Grid container direction="row"
  justifyContent="center"
  alignItems="center">

        <Grid item ><TextField
          id="outlined-select-currency"
          select
          label="Cambia empresa"
       onChange={handleEmpresaChange}
          helperText="Selecciona empresa de proyecto"
          
        >
          {empresas.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></Grid>
        <Grid item sx={{pb:2}}><Button  variant="contained" color="success" onClick={clickEmpresa}>Aceptar</Button></Grid>

        
      
      </Grid>

<Grid container direction="row"
  justifyContent="center"
  alignItems="center">

  <Grid item>
  <TextField id="outlined-basic" 
  onChange={(e) => {
            
    presupuestoRef.current = e.target.value;
  }}
label="No. Presupuesto" variant="outlined" /> 

  </Grid>
  <Grid item><Button  variant="contained" color="success" onClick={clickPresupuesto}>Aceptar</Button></Grid>

 

 
</Grid>

<Grid container  direction="row"
  justifyContent="center"
  alignItems="center" >
  <Grid item >
  <TextField id="outlined-basic" 
  onChange={(e) => {
            
    obraRef.current = e.target.value;
  }}
label="Obra" variant="outlined" /> 
  </Grid>
  <Grid item >
  <Button variant="contained" color="success" onClick={clickObra}>Aceptar</Button>
  </Grid>

  
</Grid>
      
<Grid container  direction="row"
  justifyContent="center"
  alignItems="center" >
  <Grid item >
  <TextField id="outlined-basic" 
  onChange={(e) => {
            
    ubicacionRef.current = e.target.value;
  }}
label="Ubicacion" variant="outlined" /> 
  </Grid>
  <Grid item >
  <Button variant="contained" color="success" onClick={clickUbicacion}>Aceptar</Button>
  </Grid>

  
</Grid>
      

    </Box>




        </AccordionDetails>
      </Accordion>
</Grid>
<Grid item xs={6}>
<Card sx={{ maxWidth: 345 }}>

<CardContent>
 <Typography gutterBottom variant="h5" component="div">
  {state.selectProyecto.presupuesto&&state.selectProyecto.presupuesto} 
 </Typography>
 <Typography variant="body2" color="text.secondary">
 {state.selectProyecto.horario&&state.selectProyecto.horario}
 </Typography>

 <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContentPasteGoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Estado" secondary={state.selectProyecto.Estado&&state.selectProyecto.Estado} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Empresa" secondary= {state.selectProyecto.Empresa&&state.selectProyecto.Empresa} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          
            <PersonIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cuenta" secondary={state.ChecadorAsignadouser.email?state.ChecadorAsignadouser.email:'NOT FOUND'} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <MyLocationIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={state.selectProyecto.obra&&state.selectProyecto.obra} secondary={state.selectProyecto.ubicacion&&state.selectProyecto.ubicacion} />
      </ListItem>
    </List>

</CardContent>
<CardActions>
 <Button size="small">Share</Button>

 <Button size="small">Learn More</Button>

</CardActions>
</Card>
</Grid>

</Grid>
</Card>









       
    </div>
  )
}



/*

   <Form>
<Row><Col> <Form.Group className="mb-2" >
<Form.Label>Actualiza el responsable de checar en proyecto</Form.Label>
 {state.UsuariosDisponiblesChecador&&    
<Form.Select name="residenteUid"   value={values.residenteUid}  onChange={handleInputChange}  >
 <option>Selcciona una cuenta para este proyecto</option>
{
 state.UsuariosDisponiblesChecador.map((e)=>( 
      
        <option value={e.UID}>{e.nombre}</option>
       )

)
} 
        </Form.Select>}   
  </Form.Group>
  </Col>
  <br />
  <br />
 <Button  className="mb-2" size='lg' variant='success' onClick={()=>{
    try {
      acUsChec( state.Proyecto.idProyecto, values.residenteUid)
      console.log('yeah you get it')
     
    } catch (error) {
      console.log(error)
    }
    

  }}>Actualiza residente</Button> 
  </Row>
  <br />
  <Col> <Form.Group className="mb-2" >
<Form.Label>Ubicacion</Form.Label>


</Form.Group></Col>
        <Row>
  <Col> <Form.Group className="mb-2" >
<Form.Label>Numero de presupuesto</Form.Label>

</Form.Group></Col>

<Col> <Form.Group className="mb-2" >
<Form.Label>Obra</Form.Label>
<Form.Control type="String" name="obra" disabled  />

</Form.Group></Col>
</Row>


    </Form>










*/


{/* <Form.Control type="String" name="presupuesto" disabled  value={values.presupuesto} onChange={handleInputChange}   placeholder={candidatoActualizar.presupuesto} />
 */}



 /* value={values.obra} onChange={handleInputChange}   placeholder={candidatoActualizar.obra}*/



 {/* <Form.Control type="String" name="ubicacion"  disabled  value={values.ubicacion}   onChange={handleInputChange}  placeholder={candidatoActualizar.ubicacion}  /> */}