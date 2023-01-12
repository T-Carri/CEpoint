import React, {useState, createContext} from 'react'
//import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc,  } from 'firebase/firestore';

const UiContext = createContext()
export default UiContext; 

export const UiProvider = ({children}) => {
  const [show3, setShow3] = useState(false);
  const [show1, setShow1] = useState(false);

  
 
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

    return (

<UiContext.Provider
value={{
    show3, setShow3, handleClose3,  handleShow3, show1, setShow1 
}}>
{children}
</UiContext.Provider>

    
  )
}