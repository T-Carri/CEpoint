import React, {useState, createContext, useReducer, useContext, useEffect} from 'react'
import { db } from '../firebase/firebase';
import { query, collection, onSnapshot, doc, getDoc, where, setDoc, updateDoc, getDocs  } from 'firebase/firestore';
import { GlobalState } from '../redux/GlobalState';
import { TYPES } from '../redux/Types';
import UserContext from './AuthContext';
import {searchArea} from '../componentes/usuarios/options'

const CEpointContext = createContext()
export default CEpointContext; 

export const CEpointProvider = ({children}) => {
    const {user} = useContext(UserContext)
const initialstate=JSON.parse(localStorage.getItem('state'))|| {
  UsuarioSesion:'',
  UsuariosActivosDetail:'',
  UsuariosInactivosDetail:'',
  UsuariosOcupados:'', 
  UsuariosDesocupados:'',
  UsuariosDisponiblesChecador:'',
  UserChecador:'',
  OnlyUser:'',
  AP:'',
  DP: '', 
  TotalProyectos:'',
  ChecadorAsignadouser:'',
  Proyecto:'', 
  proyectonames:'',
  asignacionesActivasDetails: '', 
  ProyectosAdicionales:'',
  ProyectosGarantia:'',
  asignacionesDD: '', 
  PresupuestosSelecionados:'', 
  test:'', 
  selectProyecto:'', 
  asignacionesTotal:'',
 
}

  const [state, dispatch] = useReducer(GlobalState,  initialstate);

 //USUARIO ABOUT 
 useEffect(() => {
  localStorage.setItem('state', JSON.stringify(state));
}, [state]);



 
 const accessKey = async ()=>{
   
  const queryDoc = doc(db, "cuentas", user.uid);
 await getDoc(queryDoc).then(  (res) => {
   dispatch({type:TYPES.USUARIO_DATA, payload:res.data()})
 
    
  } )
}


//PROYECTOS, PRESUPUESTOS

//ASIGNACION ABOUT
const agregaProyecto = async (dato, datos) => {
await  setDoc(doc(db, "asignaciones",dato),datos);
}
    
    
    

//Voy a crear una sola funcion que sustityua "getLinks", "getProyectosDesactivados"  
//UNA SOLA CONSULTA DE ASIGNACIONES Y FILTRAR CON JAVASCRIPT 

/* const getProyectos =async()=>{
  const q = query(collection(db, "asignaciones"))
  await onSnapshot(q, (query)=>{
     const data=[]
     query.forEach((doc)=>{
      data.push(doc.data())
     
    }) 
    dispatch({
      type:TYPES.GET_PROYECTOS, payload:data
             })  
        })}  
 */
    
const getProyecto = async(dato)=>{
  const ref=collection(db, "asignaciones")
  const q = query(ref, where("presupuesto","==", dato) )
  await onSnapshot(q, 
     (query)=>{
       query.forEach((doc)=>{
         dispatch({type:TYPES.PROYECTO, payload:doc.data().asistencias })
        })
        
        
      }
      )
    }
    //const data=[]
  
  //data.push(doc.data().asistencias) 
    
  const getSelectProyect = async(dato)=>{
    const ref=collection(db, "asignaciones")
    const q = query(ref, where("presupuesto","==", dato) )
    await onSnapshot(q, 
       (query)=>{
         query.forEach((doc)=>{
           dispatch({type:TYPES.SELECT_PROYECTO, payload:doc.data() })
          })
          
          
        }
        )
      }
    
    



     /*  const editaEstado = async(id, valor)=>{
        const userRef= doc(db, 'users',id)
        await setDoc(userRef, {domicilio: valor}, {merge:true} )
      } */
      const editaEmpresa = async(id, valor)=>{
        const userRef= doc(db, 'users',id)
        await setDoc(userRef, {domicilio: valor}, {merge:true} )
      }
      

      const editaEstado = async(dato, dato1)=>{
       
        const AP = doc(db, "asignaciones", '505')

        await updateDoc(AP, {
        Estado: dato1,
      
        
        })
        } 




    //get total proyectos

       const getTotalProyectos =async()=>{
  
    const q = query(collection(db, "asignaciones") )
    await onSnapshot(q, (query)=>{
    const data=[]
    query.forEach((doc)=>{
    data.push(doc.data().presupuesto )
  
                 })
                
     dispatch({type:TYPES.CALL_TOTAL, payload: data })
    })}  

   
   //GET PROYECTO Estado Activo 
   const getProyectosActivos =async()=>{
    const ref=collection(db, "asignaciones")
    const q = query(ref, where("Estado","==", "Activo"), where('asistencias', '!=' ,[]) )
    await onSnapshot(q, (query)=>{
    const data=[]
    query.forEach((doc)=>{
    data.push(doc.data().presupuesto)
  
                 })
                
     dispatch({type:TYPES.CALL_PROYECTOS_ACTIVOS_NAME, payload: data })
    })}  
    //GET PROYECTO Estado Desactivado
       
    
    const getProyectosDesactivados = async()=>{
      const ref=collection(db, "asignaciones")
      const q = query(ref, where("Estado","==", "Desactivado"), where('asistencias', '!=' ,[]) )
      await onSnapshot(q, (query)=>{
      const data=[]
      query.forEach((doc)=>{
      data.push(doc.data().presupuesto)
      
      })
      dispatch({type:TYPES.CALL_PROYECTOS_DESACTIVADOS_NAME, payload: data })
      })} 

 //GET PROYECTO Estado Adicional
   
 const getProyectosAdicionales =async()=>{
  const ref=collection(db, "asignaciones")
  const q = query(ref, where("Estado","==", "Adicional"), where('asistencias', '!=' ,[]) )
  await onSnapshot(q, (query)=>{
  const data=[]
  query.forEach((doc)=>{
  data.push(doc.data().presupuesto)
 
  })
  dispatch({type:TYPES.CALL_PROYECTOS_ADICIONALES_NAME, payload: data })
  })} 
 //GET PROYECTO Estado Garantia

  
 const getProyectosGarantia =async()=>{
  const ref=collection(db, "asignaciones")
  const q = query(ref, where("Estado","==", "Garantia"), where('asistencias', '!=' ,[]) )
  await onSnapshot(q, (query)=>{
  const data=[]
  query.forEach((doc)=>{
  data.push(doc.data().presupuesto)
 
  })
  dispatch({type:TYPES.CALL_PROYECTOS_GARANTIA_NAME, payload: data })
  })} 



  const getNamesProyectos =async()=>{
    const q = query(collection(db, "asignaciones"), where('asistencias', '!=' ,[]))
    await onSnapshot(q, (query)=>{
       const data=[]
       query.forEach((doc)=>{
        data.push(doc.data().presupuesto)
       
      }) 
      dispatch({
        type:TYPES.GET_NAME_PROYECTOS, payload:data
               })  
          })}  
  
    

    
    
const fetchChecadorAsignadoUser = async(params)=>{
const q = doc(db, "cuentas", params )
await getDoc(q).then(res=>{
  
dispatch({type:TYPES.ASIGNADO_CHECADOR, payload: res.data()}) 
})}

    
 
    


 

   
   
   
   //USUARIOS ABOUT
  


   
   
   const [UserChecador, setUserChecador] = useState('')
   
//obten todos los usuarios hacer un reducer para  
//OK
const getUsuarios =async()=>{
    const q = query(collection(db, "users"),where("activo","==", true))
    await onSnapshot(q, (query)=>{
     const data=[]
     query.forEach((doc)=>{
       data.push(doc.data())
     })
   dispatch({type:TYPES.USUARIOS_ACTIVOS, payload:data})
    
    })
  }

  const getUsuariosChecador =async()=>{
    const q = query(collection(db, "cuentas"),where("area","in", ['CUENTAKEYCHECADOR']))
    await onSnapshot(q, (query)=>{
     const data=[]
     query.forEach((doc)=>{
       data.push(doc.data())
     })
   dispatch({
    type: TYPES.USUARIOS_DISPONIBLES_CHECADOR, payload:data
   })
    
    })
  }

  //atencion aqui ya que me bugeo en las fichas de actualizar usuario, se quedo pegado el usuario electo



const fetchName = async(params)=>{
const q = doc(db, "users", params )
await getDoc(q).then(res=>{
return res.data().nombre
}) 
}


//Usuarios ocupados
const getUsersBussy = async()=>{
const UB = query(collection(db, "users"),where("ocupado","==", true))
await  onSnapshot(UB, (Q)=>{
const dato=[]

Q.forEach((element) => {

  dato.push(element.data())
  
});
dispatch({type:TYPES.USUARIOS_OCUPADOS, payload:dato })

})
}

const getUsersNoBussy = async()=>{
const UNB = query(collection(db, "users"),where("ocupado","==", false))
await  onSnapshot(UNB, (Q)=>{
const dato=[]

Q.forEach((element) => {

  dato.push(element.data())
  
});
dispatch({type:TYPES.USUARIOS_DESOCUPADOS, payload:dato })

})
}


//obtengo usuarios que no estan activados 
//OK
const getUsersUnable = async()=>{
    const UU = query(collection(db, "users"),where("activo","==", false))
    await  onSnapshot(UU, (Q)=>{
      const dato=[]
  
      Q.forEach((element) => {
  
        dato.push(element.data())
        
      });
  dispatch({type:TYPES.USUARIOS_INACTIVOS, payload:dato})
      
    })
  }
//Esta funcion activa los usuarios        




//esta funcion actualiza el res
const acUsChec = async(id, Residente)=>{
const AUC =doc(db, "asignaciones", id)
await updateDoc(AUC, {
residenteUid: Residente
})

console.log('done :)')
}


//checa si es un usuario con checador true
const ableChecador = async(dato)=>{
const AC = doc(db, "users", dato)
await updateDoc(AC, { checador: true } )} 

//checa si es un usuario con checador false

const enableChecador = async(dato)=>{
const DC = doc(db, "users", dato)
await updateDoc(DC, {checador: false}  )}  


//lector asistencias 

const ableAsistencias = async(dato)=>{
  const AC = doc(db, "users", dato)
  await updateDoc(AC, { lectoreAsistencia: true } )} 
  
  //checa si es un usuario con checador false

 const enableAsistencias = async(dato)=>{
  const DC = doc(db, "users", dato)
  await updateDoc(DC, {lectoreAsistencia: false}  )} 

// este es un reduce que tiene como objetivo buscar checador  en teoria
//pero actualmente devuelve un array que da nombre, uid, y perfil, 
//TODO: Agregar un dato para filtrar usuarios a elegir

const finderChecador =  (props) => {
return props.reduce((past, current)=>{
  const foundIndex = past.find(it=>it.nombre===current.nombre)
//  console.log('ver reduce resultados:', past)
  const r=[]
  r.push(past)
  dispatch({type:TYPES.REDUCER_USER_CHECADOR , payload:r})
  
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


const ableOcupado = async(dato)=>{
  const AC = doc(db, "users", dato)
  await updateDoc(AC, { ocupado: true } )} 
  
  //checa si es un usuario con checador false

 const enableOcupado = async(dato)=>{
  const DC = doc(db, "users", dato)
  await updateDoc(DC, {ocupado: false}  )} 


  const ableAsignador = async(dato)=>{
    const AC = doc(db, "users", dato)
    await updateDoc(AC, { asignador: true } )} 
    
    //checa si es un usuario con checador false

   const enableAsignador = async(dato)=>{
    const DC = doc(db, "users", dato)
    await updateDoc(DC, {asignador: false}  )} 
/* recolectar consultas */ 





//ACTIVA PROYECTO
const activateProyecto = async(params)=>{
  const AU = doc(db, "asignaciones", params)
  await updateDoc(AU,
    
    {
      activa: true
    })
  } 
//DESACTIVA PROYECTO
const desactivarProyecto = async(params)=>{
  const AU = doc(db, "asignaciones", params)
  await updateDoc(AU,
    
    {
      activa: false
    })
  } 
   //ASISTENCIAS ABOUT

/*    const getPresupuestos =async () => {
    const q = query(collection(db, "asignaciones"),where("asistencias", "!=", [] ))
    await onSnapshot(q, (query)=>{
      const data=[]
      query.forEach((doc)=>{
        data.push(doc.data())
        console.log("FIRESTORE SAYS:  ", doc.data().asistencias)
      })
      setPresupuesto(data)
    }) } */





//ALMACEN ABOUT 
                         //REGISTRO DE HERRAMIENTA
       
        
                         
                         













//RH ABOUT  

                        //INFORMACION DEL TRABAJADOR 

const fetchOnlyUser = async(params)=>{
  const q = doc(db, "users", params )
  await getDoc(q).then(res=>{
  dispatch({type: TYPES.FETCH_ONLYUSER, payload:res.data() })
  
  }) 
  }

  //NOMBRE
     //AGREGA
     const addNombre = async(id, valor)=>{
      const userRef= doc(db, 'users',id)
      await setDoc(userRef, {nombre: valor}, {merge:true} )
    }

     //ACTUALIZA
  const acNombre = async(id, dato)=>{
    const AN = doc(db, "users", id)
    await updateDoc(AN, {
    nombre: dato
    })
    }
//NSS
    //AGREGA
    const addNss = async(id, valor)=>{
      const userRef= doc(db, 'users',id)
      await setDoc(userRef, {nss: valor}, {merge:true} )
    }
    //ACTUALIZA

    const acNss = async(id, valor)=>{
      const AP = doc(db, "users", id)
      await updateDoc(AP, {
      nss: valor,
    
      
      })
      } 



//FECHANACIMIENTO
       //AGREGA
       const addFeNacimiento = async(id, valor)=>{
        const userRef= doc(db, 'users',id)
        await setDoc(userRef, {fechaNacimiento: valor}, {merge:true} )
      }
       //ACTUALIZA
       const acFeNacimiento = async(id, valor)=>{
        const AP = doc(db, "users", id)
        await updateDoc(AP, {
        fechaNacimiento: valor,
      
        
        })
        } 

  
 //PERFIL
      //AGREGA
      const addPerfil = async(id, valor)=>{
        const userRef= doc(db, 'users',id)
        await setDoc(userRef, {perfil: valor}, {merge:true} )
      }
      //ACTUALIZA
  const acPerfil = async(id, perfilDato)=>{
    const AP = doc(db, "users", id)
    await updateDoc(AP, {
    perfil: perfilDato,
    area: searchArea(perfilDato)
    
    })
    } 
    
  //TELEFONO
        //AGREGA
        const addTelefono = async(id, valor)=>{
          const userRef= doc(db, 'users',id)
          await setDoc(userRef, {telefono: valor}, {merge:true} )
        }
        //ACTUALIZA
        const acTelefono = async(id, valor)=>{
          const AP = doc(db, "users", id)
          await updateDoc(AP, {
          telefono: valor,
        
          
          })
          } 

  //EMPRESA
        //AGREGA
        const addEmpresa = async(id, valor)=>{
          const userRef= doc(db, 'users',id)
          await setDoc(userRef, {empresa: valor}, {merge:true} )
        }
        //ACTUALIZA
        const acEmpresa = async(id, Empresa)=>{
          const AE =doc(db, "users", id)
          await updateDoc(AE, {
          empresa: Empresa
          })
          }
        

  //DOMICILIO
        //AGREGA
        const addDomicilio = async(id, valor)=>{
          const userRef= doc(db, 'users',id)
          await setDoc(userRef, {domicilio: valor}, {merge:true} )
        }
        //ACTUALIZA
        const acDomicilio = async(id, valor)=>{
          const AP = doc(db, "users", id)
          await updateDoc(AP, {
          domicilio: valor,
        
          
          })
          } 

  //EMAIL  
       //AGREGA
       const addEmail = async(id, valor)=>{
        const userRef= doc(db, 'users',id)
        await setDoc(userRef, {email: valor}, {merge:true} )
      }
      //ACTUALIZA
      const acEmail = async(id, valor)=>{
        const AP = doc(db, "users", id)
        await updateDoc(AP, {
        email: valor,
      
        
        })
        } 






      //otros

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

 
  //GENERADORES DE REPORTE
const generadorReportes = async(...n)=>{
 
 const q = query(collection(db, n));

const querySnapshot = await getDocs(q)

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


}




/*  
const getTest =async()=>{
  const q = query(collection(db, "asignaciones"), where('presupuesto', '==' ,"PC-22-541"))
  await onSnapshot(q, (query)=>{
     const data=[]
     query.forEach((doc)=>{
      data.push(doc.data())
     
    }) 
    dispatch({
      type:TYPES.TEST_TEST, payload:data
             })  
        })} */
 

        const getConsultaConstruida =async(n)=>{
          const q = query(collection(db, "asignaciones"),where('presupuesto','in', n)) 
          await onSnapshot(q, (query)=>{
             const data=[]
             query.forEach((doc)=>{
              data.push(doc.data())
             
            }) 
            dispatch({
              type:TYPES.TEST_TEST, payload:data
                     })  
                })}  










    return (

<CEpointContext.Provider
value={{
  state,
  dispatch, 
 

  getProyecto,
  getNamesProyectos,
  getProyectosActivos,
  getProyectosAdicionales,
  getProyectosGarantia, 
  getProyectosDesactivados, 
  agregaProyecto, 

  fetchChecadorAsignadoUser,
  accessKey, 
  getUsuarios, 
  getUsersUnable, 
  activateUser, 
  getUsersBussy, 
  getUsersNoBussy, 
  enableOcupado, 
  getUsuariosChecador, 
  finderChecador, 
  acUsChec, 
  ableChecador, 
  enableChecador, 
  ableAsistencias, 
  enableAsistencias, 
  ableOcupado, 
  ableAsignador, 
  enableAsignador, 
  desactivaUser, 
  activateProyecto, 
  desactivarProyecto, 
  editaEstado,  
  getTotalProyectos,
  
  fetchOnlyUser, 
  addNombre,
  acNombre,
  addNss,
  acNss,
  addFeNacimiento,
  acFeNacimiento,
  addPerfil,
  acPerfil, 
  addTelefono,
  acTelefono,
  addEmpresa,
  acEmpresa, 
  addDomicilio, 
  acDomicilio,
  addEmail,
  acEmail,
  getSelectProyect,
  getConsultaConstruida
  }}>
  {children}
  </CEpointContext.Provider>
  
      
    )
  }






