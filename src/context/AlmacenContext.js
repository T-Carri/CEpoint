import React, {useState, createContext} from 'react'
//import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc,  } from 'firebase/firestore';

const AlmacenContext = createContext()
export default AlmacenContext; 

export const AlmacenProvider = ({children}) => {
  const [Toggle, setToggle]=useState(false)
    return (

<AlmacenContext.Provider
value={{

  Toggle, 
  setToggle
}}>
{children}
</AlmacenContext.Provider>

    
  )
}