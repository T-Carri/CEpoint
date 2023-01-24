import React, { useContext } from 'react'
import {Form} from 'react-bootstrap' 
import CEpointContext from '../../context/CEpointContext'

export const SelectorChecador = (prop) => {
    const { state}=useContext(CEpointContext)

  return (
    <Form.Select onChange={prop}>
 <option>Open this select menu </option>
{
 state.UserChecador.map((e)=>( 
     e.map((s)=>( 
        <option value={s.uid}>{s.nombre}</option>
        
       ))

))
} 
        </Form.Select>
)
}


        
