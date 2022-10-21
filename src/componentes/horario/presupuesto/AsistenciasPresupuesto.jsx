import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export const AsistenciasPresupuesto = (props) => {

  const [itinerante, setItinerante] = useState([])
      
    return props.dato.reduce((past, current)=>{
      const foundItem =  past.find(it => it.semana === current.semana)
      console.log('past:', past);
 if (foundItem ){
   foundItem.data=foundItem.data
   ?[...foundItem.data, {'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida}]
   :[{ 'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida   }]
}else{ past.push( {
  'semana': current.semana,
  'data': [{
    'trabajador': current.trabajador,'entrada':current.entrada, 'salida': current.salida
  }]
} ) }  

  
return past;

    }, [])

    
 
  return (

<div>

<h1>test</h1>

</div>


  )
}
