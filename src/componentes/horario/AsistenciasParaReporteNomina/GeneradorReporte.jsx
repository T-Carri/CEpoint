
import React, {useState, useContext} from 'react'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import  CEpointContext  from "../../../context/CEpointContext";
import { useEffect } from "react";
import Container  from "@mui/system/Container";
import TextField from '@mui/material/TextField';
import { addDays } from 'date-fns';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import moment from 'moment';
import dayjs from "dayjs";

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import * as XLSX from 'xlsx/xlsx.mjs';



const theme = createTheme({
  Container: {
    height: '500px',
    overflow: 'scroll',
  },
});



//seleccionador
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function GeneradorReporte() {

  const locale = 'es'; // change this to the desired language code
  dayjs.locale(locale);
  

const {state, getConsultaConstruida} = useContext(CEpointContext)


const [State, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);





  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([...state.proyectonames]);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  } ;

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };


console.log(state.proyectonames&&state.proyectonames, 'right:', right, "Fecha?", State[0].startDate, State[0].endDate)

  














  const customList = (title, items) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 300,
          height: 230,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={` ${value }`} />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );







 /*  trabajador: worker.trabajador, */

  function groupByWorker(data) {
    const result = [];
    const workerMap = new Map();
    
    for (const item of data) {
      for (const worker of item.asistencias) {
        if (!workerMap.has(worker.trabajador)) {
          workerMap.set(worker.trabajador, {
          
            asistencias: []
          });
        }
        workerMap.get(worker.trabajador).asistencias.push({
          trabajador:worker.trabajador,
          tipoAsistencia: worker.tipoAsistencia,
          semana: worker.semana,
          presupuesto: worker.presupuesto,
         fecha : moment(worker.date).format('LL'),
         hora:  moment(worker.date).format('LT')
         
          
        });
      }
    }
  
    for (const worker of workerMap.values()) {
      result.push(worker);
    }
  
    return result;
  } 
  



    
  function reductora(arr) {
    return arr.reduce((acumulador, objeto) => acumulador.concat(objeto.asistencias), []);
  }

  console.log(
    reductora(groupByWorker(state.test&&state.test))
    )



    
function convertArrayToExcel(array, fileName) {
  const ws = XLSX.utils.json_to_sheet(array);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, `${fileName}.xlsx`);
}
  
  
 
   
 
  
 


useEffect(()=>{
  getConsultaConstruida(right)
},[right])
  


  return (
    <ThemeProvider theme={theme}>
    <Container fixed>
       <Stack spacing={3}>
    <Grid container  xs={12} sm={10} spacing={2} justifyContent="space-evenly" alignItems="baseline" >
      <Grid item>{left? customList('Selecciona presupuestos', left)
                  :<Skeleton variant="rectangular" width={210} height={60} />}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Presupuestos elegidos', right)}</Grid>
    </Grid>
     


    <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={State}
  direction="horizontal"
/>

<Button variant="contained" color="success" onClick={()=>{
  try {
    

    convertArrayToExcel(reductora(groupByWorker(state.test&&state.test)), 'Reporte' )  
    
    
  } catch (error) {
    console.log(error)
  }

}}>
  Generar excel
</Button>
      </Stack>

    </Container>
    </ThemeProvider>
  );
}

