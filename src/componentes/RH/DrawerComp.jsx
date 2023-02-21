import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { options } from './CrearTrabajador/options';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Input from '@mui/material/Input';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import Chip from '@mui/material/Chip';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddIcon from '@mui/icons-material/Add';
import  Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));


export default function DrawerComp({state, toggleDrawer}) {
 

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

console.log(JSON.stringify(options))

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      //onClick={toggleDrawer()}
     // onKeyDown={toggleDrawer()}
    >
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   
  
   <Grid container   direction="row"
  justifyContent="center"
  alignItems="center">
    <Grid item> <Chip icon={<EngineeringIcon />} label={<h4>Puestos, Cargos</h4>} />  </Grid>
    <Grid item> 
    <Chip color="success" icon={   <AddIcon />} onClick={handleClickOpen} >
      
              </Chip>
      
              </Grid>
              <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agrega un puesto</DialogTitle>
        <DialogContent>
     
        <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          /* alue={age} */
          onChange={handleChange}
          input={<BootstrapInput />}
        >

{options.map((e)=>{
 return <option value={e.name}>{e.name}</option>
})}

          
        </NativeSelect>
      </FormControl>


          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Agrega puesto"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Agregar</Button>
        </DialogActions>
      </Dialog>
          
   </Grid>

      <Divider />



      <div>
{
options.map((element) => {

  
  return <Accordion key={element.name} expanded={expanded === element.name} onChange={handleChange(element.name)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        
          <Typography sx={{ color: 'text.secondary' }}>{element.name}</Typography>  
          

        </AccordionSummary>
        <AccordionDetails>
         {
          element.items.map(
            (item)=>{
return  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  


<ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
              <DoneOutlineOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              
            />
          </ListItem>



</List>
            }
          )
         }
        </AccordionDetails>
      </Accordion> 
  

  
})}

      
   
   
    </div>







   {/*    */}
    </Box>
  );

  return (
    <div>
  
        <React.Fragment /* key={anchor} */>
          
          <SwipeableDrawer
            anchor="right"
            open={state}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    
    </div>
  );
}