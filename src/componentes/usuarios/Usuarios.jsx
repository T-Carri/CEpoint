import React, {useState, useContext, useEffect} from 'react'
import { Card, Container, Toast,  Nav } from 'react-bootstrap'
import { FormCreadorUser } from './FormCreadorUser'; 
import './Usuarios.css'
import {useNavigate, Outlet} from 'react-router-dom'
import CEpointContext from '../../context/CEpointContext';


 const Usuarios = () => {
  const {
    getUsuarios}=useContext(CEpointContext)

    const navigate = useNavigate(); 
   
    useEffect(() => {
      getUsuarios()
    }, [])

    const [showA, setShowA] = useState(false);
    const toggleShowA   = () => setShowA(!showA);






  return (
     
    <Container className="cardContenedora" style={{ width: '100em', height:'100%'}}>
   
   <Card>
    <Card.Body>
   
     <Card.Title>Gestion de usuarios</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">controles para controlar usuarios</Card.Subtitle>

    </Card.Body>
    
  </Card>
      
   
  
         

    



<Nav fill variant="pills" defaultActiveKey="todos">
      <Nav.Item>
        <Nav.Link  onClick={()=>{navigate("todos")
      setShowA(false)
         }}  eventKey="todos">Todos los usuarios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link   onClick={()=>{navigate("inactivos")
       setShowA(false) 
      }} eventKey="link-1">inactivos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  onClick={toggleShowA}  eventKey="link-2">Crear usuario</Nav.Link>
      </Nav.Item>
      
    </Nav>


    <Toast show={showA} onClose={toggleShowA} style={{width:'50em', height:'40em'}}>
          <Toast.Header>
           
            <strong className="me-auto">Creando usuario</strong>
            <small> # semana</small>
          </Toast.Header>
          <Toast.Body>
           <FormCreadorUser />
          </Toast.Body>
        </Toast>  

        
     <Container fluid>  <Outlet/></Container>

































  </Container>
  
  )
}

export default React.memo(Usuarios)






{/* <Button variant='dark' onClick={()=>{navigate("todos")}} className="mb-2">
          
</Button> {''}
<Button variant='dark'  onClick={toggleShowA}  className="mb-2" onClick={()=>{navigate("ocupados")}} >
  Ocupados
</Button> {''}
<Button variant='dark' onClick={toggleShowA}  className="mb-2" onClick={()=>{navigate("desocupados")}} >
  Desocupados
</Button> {''}
<Button variant='danger'  onClick={toggleShowA}  className="mb-2" >
  inactivos
</Button> {''}
<Button variant='success' onClick={toggleShowA} className="mb-2">
  <strong>+</strong>  Crear usuario
</Button>   
 */}