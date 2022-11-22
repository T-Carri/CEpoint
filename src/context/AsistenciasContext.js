import React, {createContext, useState} from 'react'


const AsistenciasContext = createContext()
export default AsistenciasContext; 

export const AsistenciasProvider = ({children}) => {
 
 
 
    return (

<AsistenciasContext.Provider
value={{

}}>

</AsistenciasContext.Provider>

    
  )
}
