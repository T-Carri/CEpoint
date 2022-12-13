import React, {useState, createContext} from 'react'
//import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc,  } from 'firebase/firestore';

const AlmacenContext = createContext()
export default AsignacionContext; 

export const AlmacenProvider = ({children}) => {
   
    return (

<AlmacenContext.Provider
value={{

  
}}>
{children}
</AlmacenContext.Provider>

    
  )
}