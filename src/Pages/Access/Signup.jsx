import React, {useRef, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import {useDispatch} from 'react-redux'

export const Signup = () => {
  const [nombre, setNombre]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [error, setError] =useState('')
   const {createUser}= UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e)=> {
    e.preventDefault();
    
    if (password.current.value!== passwordConf.current.value){
      return setError("Password do not match")
    } 
    setError('')
    try{
       await createUser(nombre, email, password);
   const res= await axios.post("/auth/signup",{
    nombre, email, password
   })   
      
       navigate('/login')
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  };


  
   return (
    <>
    <Card>
      <Card.Body>
        <h2>Sign in</h2>
        <Form onSubmit={handleSubmit}>
<Form.Group id="nombre">
<Form.Label>Nombre</Form.Label>
<Form.Control type="nombre" onChange={(e) => setNombre(e.target.value)} required>
</Form.Control>
</Form.Group>
<Form.Group id="email">
<Form.Label>Email</Form.Label>
<Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required>
</Form.Control>
</Form.Group>
<Form.Group id="password">
<Form.Label>Password</Form.Label>
<Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required>
</Form.Control>
</Form.Group>
<Form.Group id="password-confirm">
<Form.Label>Password Confirmation</Form.Label>
<Form.Control type="password" onChange={(e) => setPasswordConf(e.target.value)} required>
</Form.Control>
</Form.Group>
<button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign Up
        </button>
<div className='buttonGoogle' >
<GoogleButton 
  onClick={() => { console.log('Google button clicked') }} 
/>
</div>

    </Form>
      </Card.Body>
    </Card>
    
    </>
    


  )
}




