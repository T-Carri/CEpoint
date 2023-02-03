import React, {useState, createContext} from 'react'
//import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc,  } from 'firebase/firestore';

const UiContext = createContext()
export default UiContext; 

export const UiProvider = ({children}) => {
 
  const [show1, setShow1] = useState(false);

  
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
   const handleShow4 = () => setShow4(true);


   const [showFCP, setShowFCP] = useState(false);
   const toggleShowFCP   = () => {
    setShowFCP(!showFCP)
    setShowFCU(false)
  };

   
   const [showFCU, setShowFCU] = useState(false);
   const toggleShowFCU   = () => {
    setShowFCU(!showFCU)
    setShowFCP(false)
    };



    const [ToggleRH, setToggleRH]=useState(false)


    const [inFormulario, setInFormulario] =useState(false)


 const [ToggleALMACEN, setToggleALMACEN]= useState(false)


    return (

<UiContext.Provider
value={{
    show3, 
    setShow3, 
    handleClose3,  
    handleShow3, 
    show1, 
    setShow1,
     show4, 
     setShow4,
     handleClose4,
     handleShow4, 
     showFCP, 
     setShowFCP, 
     toggleShowFCP,
     showFCU, 
     setShowFCU, 
     toggleShowFCU,
     ToggleRH,
      setToggleRH, 
      inFormulario, 
      setInFormulario, ToggleALMACEN, setToggleALMACEN
     
}}>
{children}
</UiContext.Provider>

    
  )
}