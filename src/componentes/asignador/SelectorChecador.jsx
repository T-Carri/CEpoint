import React, { useContext } from 'react'
import {Form} from 'react-bootstrap' 
import UsuariosContext from '../../context/UsuariosContext';

export const SelectorChecador = (prop) => {
    const { UserChecador}=useContext(UsuariosContext)
    console.log('desde selector:',UserChecador)
  return (
    <Form.Select onChange={prop}>
 <option>Open this select menu </option>
{
 UserChecador.map((e)=>( 
     e.map((s)=>( 
        <option value={s.uid}>{s.nombre}</option>
        
       ))

))
} 
        </Form.Select>
)
}


        
