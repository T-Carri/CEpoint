import React, {useContext} from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import {BsArrowLeftCircle} from 'react-icons/bs'
import UiContext from '../../../context/UiContext'
import CEpointContext from '../../../context/CEpointContext'
import { TYPES } from '../../../redux/Types'
export const FormularioDatosTrabajador = () => {
  const{ inFormulario, 
    setInFormulario }= useContext(UiContext)  

    const{ state, dispatch }= useContext(CEpointContext)  

  return (

    <Container fluid>
         <Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" 
         onClick={()=>{
          setInFormulario(false)
          dispatch({type: TYPES.FETCH_ONLYUSER, payload:'' })
         }}>  
         <BsArrowLeftCircle /> Trabajadores  </Button>

<h1>{state.OnlyUser.nombre}</h1>
<Card style={{backgroundColor: 'coral',  width: '18rem', height: '15em' }}>

</Card>



    </Container>
   
  )
}
