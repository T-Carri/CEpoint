import React, {useEffect, useContext, useRef} from 'react'
import { useParams } from 'react-router-dom'
import CEpointContext from '../../../context/CEpointContext'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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

    const {state, getSelectProyect, editaEstado }=useContext(CEpointContext)



    const estadoRef = useRef(null)
    const empresaRef= useRef(null)
    const presupuestoRef= useRef(null)
    const obraRef= useRef(null)



const handleEstadoChange = (event) => {
  estadoRef.current = event.target.value;
  console.log(
    estadoRef.current,  empresaRef.current, presupuestoRef.current, obraRef.current
   )
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


const clickEstado=()=>{
  editaEstado(state.selectProyecto.presupuesto, estadoRef.current )
  console.log(state.selectProyecto.presupuesto, estadoRef.current)
}


console.log(state.selectProyecto)
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
      <div>
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
      <Button onClick={clickEstado}>Aceptar</Button>
      </div>
      <div>
        <TextField
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
        </TextField>
      <Button>Aceptar</Button>
      </div>

<div>
  <TextField id="outlined-basic" 
  onChange={(e) => {
            
    presupuestoRef.current = e.target.value;
  }}
label="No. Presupuesto" variant="outlined" />  <Button>Aceptar</Button>
</div>

<div><TextField id="outlined-basic" 
  onChange={(e) => {
            
    obraRef.current = e.target.value;
  }}
label="Obra" variant="outlined" />  <Button>Aceptar</Button></div>
      
  
    </Box>




        </AccordionDetails>
      </Accordion>
</Grid>
<Grid item xs={6}>
<Card sx={{ maxWidth: 345 }}>

<CardContent>
 <Typography gutterBottom variant="h5" component="div">
 {state.selectProyecto.presupuesto}
 </Typography>
 <Typography variant="body2" color="text.secondary">
 {state.selectProyecto.horario}
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
            <AssistantPhotoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Estado" secondary={state.selectProyecto.Estado} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Empresa" secondary= {state.selectProyecto.Empresa} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Diversity3Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={state.selectProyecto.obra} secondary={state.selectProyecto.ubicacion} />
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