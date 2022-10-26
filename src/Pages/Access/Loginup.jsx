import React, { useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export const Loginup=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

 
 
 
  /*const signInWithGoogle=()=>{
    const provider= new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re=>{
      console.log(re);
    }) 
    .catch((err)=>{
      console.log(err)
    }))
  }*/
    
    

  return (
    <>
    <Card >
      <Card.Body>
        <h2>Inicia sesion </h2>
        {error&&<Alert variant="danger">{error}</Alert>}
        <Form onClick={handleSubmit}>
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

<Button type="submit">Entrar</Button>


    </Form>

 <div className='buttonGoogle' >
<GoogleButton 
  
/>
</div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign up</Link>
    </div>
    </>
    

  )


}

