import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import CEpointContext from '../../../context/CEpointContext'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const Proyecto = () => {
    const {electo } = useParams()

    const {state, getSelectProyect }=useContext(CEpointContext)

/*     useEffect(()=>{

        async function fetchData() {
          await getUsuariosChecador();
        }
        fetchData();

    },[])  */

useEffect( ()=>{
    getSelectProyect(electo)
} ,[electo])


console.log(state.selectProyecto)
  return (
    <div>

<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          {electo}
        </Typography>
   
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
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