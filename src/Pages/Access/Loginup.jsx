import React, { useState, useRef} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export const Loginup=()=> {
  const emailRef=useRef()
  const passwordRef=useRef()
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signIn(emailRef.current.value, passwordRef.current.value).then((response)=>{
        navigate('/account')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)

      })
             
      
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
<Form.Control type="email" ref={emailRef} required>
</Form.Control>
</Form.Group>
<Form.Group id="password">
<Form.Label>Password</Form.Label>
<Form.Control type="password" ref={passwordRef} required>
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

