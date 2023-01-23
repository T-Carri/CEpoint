import React, {useState, createContext, useReducer, useContext} from 'react'
import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc, where, setDoc  } from 'firebase/firestore';
import { GlobalState } from '../redux/GlobalState';
import { TYPES } from '../redux/Types';
import UserContext from './AuthContext';

const CEpointContext = createContext()
export default CEpointContext; 

export const CEpointProvider = ({children}) => {
    const {user} = useContext(UserContext)
const initialstate= {
  asignacionesDD: '', 
  asignacionesActivasDetails: '', 
  AP:'',
  DP: '', 
  IdProyectoDetail:'', 
  ChecadorAsignadouser:'',
  Proyecto:'', 

}

  const [state, dispatch] = useReducer(GlobalState,  initialstate);


//ASIGNACION ABOUT
        const agregaProyecto = async (dato, datos) => {
          await  setDoc(doc(db, "asignaciones",dato),datos);
        }
    
    
        
         const getLinks =async()=>{
            const q = query(collection(db, "asignaciones"), where("activa","==", true))
            await onSnapshot(q, (query)=>{
             const data=[]
             query.forEach((doc)=>{
               data.push({...doc.data(), id:doc.id})
               console.log('ids: ', doc.id)
             })
             //console.log("datossss", data)
         
             dispatch({type:TYPES.CALL_PROYECTOS_ACTIVOS, data: data })
            })
          
          }  
    
          /* const getProyectosDesactivados =async()=>{
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
          
          }  */
    
          const getProyectosDesactivados =async()=>{
            const q = query(collection(db, "asignaciones"), where("activa","==", false))
            await onSnapshot(q, (query)=>{
             const data=[]
             query.forEach((doc)=>{
               data.push({...doc.data(), id:doc.id})
               console.log('ids: ', doc.id)
             })
             //console.log("datossss", data)
             //setAsigndesactivados(data)
             dispatch({type:TYPES.CALL_PROYECTOS_DESACTIVADOS, data: data })
            })
            
          } 
    
    
          const fetchChecadorAsignadoUser = async(params)=>{
            const q = doc(db, "users", params )
            await getDoc(q).then(res=>{

              dispatch({type:TYPES.ASIGNADO_CHECADOR, payload: res.data()})
            }) 
          }
    
    
          const getProyecto = async(dato)=>{
            const q = doc(db, "asignaciones", dato)
            await getDoc(q).then(res=>{
                dispatch({type:TYPES.PROYECTO, payload:res.data() })
        
            })
          }
    
    
    /*
    value={{
      state,
      dispatch, 
      asig, 
      setAsign, 
      getLinks, 
      getProyecto,
     Proyecto, 
     fetchChecadorAsignadoUser,
     ChecadorAsignadouser,
     asigDesactivados, 
     setAsigndesactivados,
     getProyectosDesactivados, 
     agregaProyecto
    
    }}
    */
         
   
    

 //USUARIO ABOUT 



 const [asignador, setAsignador]= useState()
 const [lectorAsistencia, setLectorAsistencia]= useState()
 const [Usator, setUsator]= useState()
 const [Almacen, setAlmacen]=useState()
 
 const accessKey = async ()=>{
   
     const queryDoc = doc(db, "users", user.uid);
    await getDoc(queryDoc).then(  (res) => {
      setAlmacen(res.data().almacen)
       setAsignador(res.data().asignador)
    
      setLectorAsistencia(res.data().lectoreAsistencia)
   
      setUsator(res.data().usator)
       
     } )
   }
 
   
    //esta funcion identifica rol de usuario
/*   const [UserRol, setUserRol] =useState()
 
  const getRol =async()=>{
   
   const queryDoc = doc(db, "users", user.uid);
  await getDoc(queryDoc).then(res => {
     setUserRol(res.data().rol)
     console.log( res.data().rol)
 }    )
 }  */
 

   /*
    value={{   
        getRol,
        UserRol,
        asignador,
        lectorAsistencia,
        Usator,  
        accessKey,
        Almacen
          }}
   
   */
   
   
   
   
   
   //USUARIOS ABOUT
  
   //ASISTENCIAS ABOUT
//ALMACEN ABOUT 


 




    return (

<CEpointContext.Provider
value={{
  state,
  dispatch, 
  getLinks, 
  getProyecto,
  getProyectosDesactivados, 
  agregaProyecto, 
  fetchChecadorAsignadoUser
  
}}>
{children}
</CEpointContext.Provider>

    
  )
}