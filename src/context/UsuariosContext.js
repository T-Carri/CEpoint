//habil
import React, {createContext, useState, useContext, useEffect} from 'react'
import { getFirestore, update, FieldValue, get, query, where, collection, getDoc, onSnapshot, doc, updateDoc, arrayUnion} from "firebase/firestore"
import { db } from '../firebase/firebase';
import UserContext from './AuthContext';

const UsuariosContext = createContext( )
export default UsuariosContext;

export const UsuariosProvider = ({children}) => {
  const {user} = useContext(UserContext)
       const [Usuarios, setUsuarios] = useState([])  
       const [Userun, setUserun]=useState([]) 
       const [Actualizador, setActualizador] = useState('') 
       const [ActivadorChec, setActivadorChec] = useState('')
       const [UserChecador, setUserChecador] = useState('')
       
  //obten todos los usuarios hacer un reducer para  
 const getUsuarios =async()=>{
        const q = query(collection(db, "users"),where("activo","==", true))
        await onSnapshot(q, (query)=>{
         const data=[]
         query.forEach((doc)=>{
           data.push(doc.data())
         })
         console.log("Habilitados", data)
         setUsuarios(data)
        })
      }

            //obtengo usuarios que no estan activados 
  const getUsersUnable = async()=>{
        const UU = query(collection(db, "users"),where("activo","==", false))
        await  onSnapshot(UU, (Q)=>{
          const dato=[]
      
          Q.forEach((element) => {
      
            dato.push(element.data())
            
          });
      
          setUserun(dato)
        })
      }
    //Esta funcion activa los usuarios        
   
   const activateUser = async()=>{
    const AU = doc(db, "users", Actualizador)
    await updateDoc(AU,
      
      {
        activo: true
      })
   } 
   //checa si es un usuario con checador true
   const ableChecador = async()=>{
    const AC = doc(db, "users", ActivadorChec)
    await updateDoc(AC, { checador: true } )} 
    
    //checa si es un usuario con checador false

   const enableChecador = async()=>{
    const DC = doc(db, "users", ActivadorChec)
    await updateDoc(DC, {checador: false}  )} 

    // este es un reduce que tiene como objetivo buscar checador  en teoria
    //pero actualmente devuelve un array que da nombre, uid, y perfil, 
    //TODO: Agregar un dato para filtrar usuarios a elegir
    
const finderChecador =  (props) => {
    return props.reduce((past, current)=>{
      const foundIndex = past.find(it=>it.nombre===current.nombre)
      console.log('ver reduce resultados:', past)
      const r=[]
      r.push(past)
      setUserChecador(r)
      if(foundIndex){
        foundIndex.data=foundIndex.data
        ?[...foundIndex.data, {
          'perfil': current.perfil 
       
        }]
        :[{ 'perfil': current.perfil 
             }]
      }else{ past.push(
        { 
        
          'nombre': current.nombre,
          'uid':current.UID,
          'data': [{
            'perfil': current.perfil,
            
          }]
        } )}
        return past;
    }, [])}
  

 /* recolectar consultas */ 
 
 //esta funcion identifica rol de usuario
 const [UserRol, setUserRol] =useState()

 const getRol =async()=>{
  
  const queryDoc = doc(db, "users", user.uid);
 await getDoc(queryDoc).then(res => {
    setUserRol(res.data().rol)
    console.log( res.data().rol)
}    )
} 

// analizador de accesos asignacion, lectorAsistencia, usator
const [asignador, setAsignador]= useState()
const [lectorAsistencia, setLectorAsistencia]= useState()
const [Usator, setUsator]= useState()

const accessKey = async ()=>{
  
  const queryDoc = doc(db, "users", user.uid);
 await getDoc(queryDoc).then(res => {
    setAsignador(res.data().asignador)
   console.log("Es asignador?:", res.data().asignador)
   setLectorAsistencia(res.data().lectoreAsistencia)
   console.log("Es lector?:", res.data().lectoreAsistencia)
   setUsator(res.data().usator)
    
  } )
}


   
       return (
           <UsuariosContext.Provider value={
         {  Usuarios, 
            getUsuarios, 
            getUsersUnable, 
            Userun, 
            setActualizador,
             activateUser, 
             setActivadorChec, 
             finderChecador, 
             enableChecador,
              ableChecador, UserChecador, 
              ActivadorChec,
              getRol,
              UserRol,
              asignador,
              lectorAsistencia,
              Usator,  
              accessKey
          }
                                }>
              
           {children}
           </UsuariosContext.Provider>
     )
   }
   


