import React, {useContext, useEffect} from 'react'
import { Button, NavbarBrand, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import UserContext from '../../context/AuthContext';
import CEpointContext from '../../context/CEpointContext';
import './Account.css'
const NavbarCepoint = ({handleLogout}) => {

  const {accessKey}=useContext(CEpointContext)

  const {user} = useContext(UserContext)


  useEffect(()=>{
    accessKey()
  }, [user])


  return (
   <header xs={12}> 
    {/* //navbar */}
    <Navbar bg="warning" variant="warning" expand="lg">
       
        <NavbarBrand id="logo" className="logo" href="/">
            <strong>
           CEpoint 

            </strong>
         </NavbarBrand>
         
        
       
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Salir"
              menuVariant="dark"
              
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Button onClick={handleLogout}>logout</Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
         
      
      </Navbar>

</header>
  )
}

export default React.memo(NavbarCepoint)