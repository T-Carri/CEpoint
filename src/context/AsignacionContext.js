import React, {useState, createContext, useReducer} from 'react'
import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc, where  } from 'firebase/firestore';
import { GlobalState, TYPES } from '../redux/GlobalState';

const AsignacionContext = createContext()
export default AsignacionContext; 

export const AsignacionProvider = ({children}) => {

const initialstate= {
  asignacionesDD: '', 
  asignacionesActivasDetails: '', 
  AP:'',
  DP: ''
}

  const [state, dispatch] = useReducer(GlobalState,  initialstate);




    const[idProyecto, setIdProyecto]=useState('')
    const [asig, setAsign]= useState([]);
    const [asigDesactivados, setAsigndesactivados]= useState([]);
    const [Proyecto, setProyecto]=useState();
    const [ChecadorAsignadouser, setChecadorAsignadoUser] =useState()
   
    
     const getLinks =async()=>{
        const q = query(collection(db, "asignaciones"), where("activa","==", true))
        await onSnapshot(q, (query)=>{
         const data=[]
         query.forEach((doc)=>{
           data.push({...doc.data(), id:doc.id})
           console.log('ids: ', doc.id)
         })
         //console.log("datossss", data)
         setAsign(data)
         dispatch({type:TYPES.CALL_PROYECTOS_ACTIVOS, data: data })
        })
      
      }  

      const getProyectosDesactivados =async()=>{
        const q = query(collection(db, "asignaciones"), where("activa","==", false))
        await onSnapshot(q, (query)=>{
         const data=[]
         query.forEach((doc)=>{
           data.push({...doc.data(), id:doc.id})
           console.log('ids: ', doc.id)
         })
         //console.log("datossss", data)
         setAsigndesactivados(data)
        })
      
      } 


      const fetchChecadorAsignadoUser = async(params)=>{
        const q = doc(db, "users", params )
        await getDoc(q).then(res=>{
          setChecadorAsignadoUser(res.data())
        }) 
      }


      const getProyecto = async(dato)=>{
        const q = doc(db, "asignaciones", dato)
        await getDoc(q).then(res=>{
      setProyecto(res.data())
        })
      }

    return (

<AsignacionContext.Provider
value={{
  state,
    idProyecto, 
    setIdProyecto, 
    asig, 
    setAsign, 
    getLinks, 
    getProyecto,
   Proyecto, 
   fetchChecadorAsignadoUser,
   ChecadorAsignadouser,
   asigDesactivados, 
   setAsigndesactivados,
   getProyectosDesactivados
  
}}>
{children}
</AsignacionContext.Provider>

    
  )
}