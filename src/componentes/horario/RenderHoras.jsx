import React from 'react'

export const RenderHoras = (dato) => {
  return (
    dato.map(element => {
        <h1>{element.trabajador}</h1>  
    })
  )
}
