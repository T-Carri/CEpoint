import React, {useRef, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
export const Signup = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [error, setError] =useState('')
   const {createUser}= UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setError('')
    try{
      await createUser(email, password);
      navigate('/account')
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




