import {Form, Button, Card, NavbarBrand} from 'react-bootstrap'
import React, {useRef, useState} from 'react'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

   function Totalsignup() {
    
    
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const [error, setError] =useState('')
     const {createUser}= UserAuth()
    const navigate = useNavigate()
  
    const handleSubmit = async (e)=> {
      e.preventDefault();
      if (password!== passwordConf){
        return setError("Password do not match")
      } 
  
      try{
        setError('')
        await createUser(email, password);
        navigate('/account')
      } catch(e) {
        setError(e.message)
        console.log(e.message)
      }
    };
  

    
   
    
    
    
    
      return (
        <div className="Bienvenida">
         <nav className="navbar navbar-expand-lg bg-warning w-100 p-5 h-150 d-inline-block">
         <NavbarBrand className="logo" href="/">
          CEpoint
        </NavbarBrand>
       <div className="d-grid gap-2  d-md-flex justify-content-md-end">
     
   
      
    </div>
         </nav>
     
       
    
    
    <div className="justify-content-center">
    <Card>
      <Card.Body>
        <Card.Title >REGISTRATE</Card.Title>
        <Form onSubmit={handleSubmit}>
<Form.Group id="email">
<Form.Label>Email</Form.Label>
<Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required>
</Form.Control>
</Form.Group>
<Form.Group id="password">
<Form.Label>Password</Form.Label>
<Form.Control type="password"  onChange={(e) => setPassword(e.target.value)} required>
</Form.Control>
</Form.Group>
<Form.Group id="password-confirm">
<Form.Label>Password Confirmation</Form.Label>
<Form.Control type="password" onChange={(e) => setPasswordConf(e.target.value)} required>
</Form.Control>
</Form.Group>
<Button type="submit" >Sign up</Button>
<div className='buttonGoogle' >
<GoogleButton 
  onClick={() => { console.log('Google button clicked') }} 
/>
</div>
    </Form>
      </Card.Body>
    </Card>
    </div>
   
   
    
    
    
        </div>
      );
    }
    
    export default Totalsignup; 



    /*    <div className='buttonGoogle' >
<GoogleButton 
  onClick={() => { console.log('Google button clicked') }} 
/>
</div>*/