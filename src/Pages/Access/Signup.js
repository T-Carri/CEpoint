import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import GoogleButton from 'react-google-button'

export  function Signup() {
  const emailRef = useRef()
  const passwordRef= useRef()
  const passwordConfirmRef= useRef()
  
   return (
    <>
    <Card>
      <Card.Body>
        <h2>Sign in</h2>
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
<Form.Group id="email">
<Form.Label>Password Confirmation</Form.Label>
<Form.Control type="email" ref={passwordConfirmRef} required>
</Form.Control>
</Form.Group>

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




