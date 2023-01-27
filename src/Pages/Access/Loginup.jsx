import React, { useState, useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './Login.css';

export const Loginup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();






  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación del formato del correo electrónico
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailRef.current.value)) {
        setEmailError('El correo electrónico es inválido.');
        return;
    }
    setEmailError('');
    try {
        await signIn(emailRef.current.value, passwordRef.current.value).then((response)=>{
            navigate('/account')
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        });
    } catch (e)  {
      if(e.code === 'auth/invalid-email'){
        setError('El correo electrónico es inválido')
      }else if(e.code === 'auth/user-not-found'){
        setError('El usuario no existe')
      }else if(e.code === 'auth/wrong-password'){
        setError('La contraseña es incorrecta')
      }else{
        setError(e.message)
      }
    }
};

 






      
    
 

  return (
    <>
      <Card className="background-image">
        <Card.Body>
          <h2 className="text-center">Inicia sesion</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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
            <br />
            <br />

            <div className="text-center">
              <Button style={{ width: '10em' }} type="submit">Entrar</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
