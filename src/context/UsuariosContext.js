//habil
import React, {createContext, useState, useContext, useEffect} from 'react'
import { getFirestore, update, FieldValue, get, query, where, collection, getDoc, onSnapshot, doc, updateDoc, arrayUnion} from "firebase/firestore"
import { db } from '../firebase/firebase';


const UsuariosContext = createContext( )
export default UsuariosContext;

export const UsuariosProvider = ({children}) => {

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
       //  console.log("Habilitados", data)
         setUsuarios(data)
        })
      }

const [OnlyUser, setOnlyUser] = useState()
const fetchOnlyUser = async(params)=>{
  const q = doc(db, "users", params )
  await getDoc(q).then(res=>{
    setOnlyUser(res.data())
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
   
   const activateUser = async(params)=>{
    const AU = doc(db, "users", params)
    await updateDoc(AU,
      
      {
        activo: true
      })
   } 

   const desactivaUser = async(params)=>{
    const AU = doc(db, "users", params)
    await updateDoc(AU,
      
      {
        activo: false
      })
   } 
   //checa si es un usuario con checador true
   const ableChecador = async(dato)=>{
    const AC = doc(db, "users", dato)
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
    //  console.log('ver reduce resultados:', past)
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
          'checador':current.checador,
          'data': [{
            'perfil': current.perfil,
            
          }]
        } )}
        return past;
    }, [])}
  

 /* recolectar consultas */ 
 





   
       return (
           <UsuariosContext.Provider value={
         {  Usuarios, 
            getUsuarios, 
            getUsersUnable, 
            Userun,
             activateUser, 
             setActivadorChec, 
             finderChecador, 
             enableChecador,
              ableChecador, 
              UserChecador, 
              ActivadorChec, 
              OnlyUser,
              fetchOnlyUser,
              desactivaUser
            }
                                  }>
                
             {children}
             </UsuariosContext.Provider>
       )
     }
   
    
      
             
     
     
   


