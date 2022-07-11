import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import GoogleButton from 'react-google-button'

import {authentication} from '../../firebase/firebase';

export  function Loginup() {
    const emailRef = useRef()
    const passwordRef= useRef()
    
  const signInWithGoogle=()=>{
    const provider= new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re=>{
      console.log(re);
    }) 
    .catch((err)=>{
      console.log(err)
    }))
  }
    
    

  return (
    <>
    <Card>
      <Card.Body>
        <h2>Inicia sesion </h2>
        <Form>
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

<Button>Entrar</Button>
    </Form>

 <div className='buttonGoogle' >
<GoogleButton 
  onClick={signInWithGoogle} 
/>
</div>
      </Card.Body>
    </Card>
    
    </>
    

  )


}

