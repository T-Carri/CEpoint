import React, {useState, createContext} from 'react'
import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc,  } from 'firebase/firestore';

const AsignacionContext = createContext()
export default AsignacionContext; 

export const AsignacionProvider = ({children}) => {
    const[idProyecto, setIdProyecto]=useState('')
    const [asig, setAsign]= useState([]);
    const [candidatoActualizar, setCandidatoActualizar]=useState();
    const getLinks =async()=>{
        const q = query(collection(db, "asignaciones"))
        await onSnapshot(q, (query)=>{
         const data=[]
         query.forEach((doc)=>{
           data.push({...doc.data(), id:doc.id})
           console.log('ids: ', doc.id)
         })
         //console.log("datossss", data)
         setAsign(data)
        })
      
      } 


      const getProyecto = async(dato)=>{
        const q = doc(db, "asignaciones", dato)
        await getDoc(q).then(res=>{
      setCandidatoActualizar(res.data())
        })
      }

    return (

<AsignacionContext.Provider
value={{
    idProyecto, 
    setIdProyecto, 
    asig, 
    setAsign, 
    getLinks, 
    getProyecto, 
    candidatoActualizar
}}>
{children}
</AsignacionContext.Provider>

    
  )
}