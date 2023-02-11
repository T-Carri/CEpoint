import React, {useContext, useEffect} from 'react'
import { Button, Container} from 'react-bootstrap'
import UserContext from '../../context/AuthContext';
import CEpointContext from '../../context/CEpointContext';
import AlmacenContext from '../../context/AlmacenContext';
import UiContext from '../../context/UiContext';

//import './Account.css'
import { 
    useNavigate
  } from 'react-router-dom';
 
 const GreyBar = () => {

 

    const {setToggle}=useContext(AlmacenContext)
    const {state}=useContext(CEpointContext)
    const {setToggleRH}=useContext(UiContext)
 
    const {accessKey}=useContext(CEpointContext)

    const {user} = useContext(UserContext)
  
    useEffect(()=>{
      accessKey()
    }, [])





  console.log('BIGSTATE', state)
   
  
    const navigate = useNavigate();
  //  const proyectosActivos = useCallback(getLinks(),[asig])
    return (

<div className="a1" style={{display: "flex", flexDirection: "column", height: '90vh'}}>


    
 {state.UsuarioSesion.usator?<Button style={{margin: "1.5vh 0"}}  variant='warning' className="btnx1" onClick={()=>{
  navigate("usuarios")

  }}>
 <strong>Usuarios
   </strong></Button>:null} 

   
   {state.UsuarioSesion.rh?<Button style={{margin: "1.5vh 0"}} variant='dark' className="btnx4" onClick={()=>{navigate("recursosHumanos")
   setToggleRH(false)
}}>
<strong> Recursos humanos  </strong> </Button>:null}

{state.UsuarioSesion.lectoreAsistencia? <Button  style={{margin: "1.5vh 0"}}  className="btnx2"  onClick={() =>{
    navigate("horario");
  }}> <strong>Asistencia</strong></Button>:null}    
{state.UsuarioSesion.asignador?<Button style={{margin: "1.5vh 0"}}  variant='warning' className="btnx3" onClick={()=>{navigate("asignadorEndiseño")}}>
<strong> Asignador  </strong> </Button>:null}
{state.UsuarioSesion.almacen?<Button style={{margin: "1.5vh 0"}}  variant='dark' className="btnx4" onClick={()=>{navigate("almacen")
setToggle(false)
}}>
<strong> Almacen  </strong> </Button>:null}
<Button  style={{margin: "1.5vh 0"}}  className="btnx1" variant="success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Trabaja en otras funciones</Button>




</div>

  )
}

export default React.memo(GreyBar)