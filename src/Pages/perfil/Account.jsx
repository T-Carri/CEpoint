import './Account.css'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Routes,
  useNavigate
} from 'react-router-dom';
import {Horario} from '../../componentes/horario/Horario'
import {Layout} from './Layout'
import {Asignador1} from '../../componentes/asignador/Asignador1';
import { Bienvenida } from '../../componentes/Bienvenida';
import {Ubicacion} from '../../componentes/horario/Ubicacion'
import {Obra} from '../../componentes/horario/Obra'
import {Semana} from '../../componentes/horario/Semana'
import {Trabajador} from '../../componentes/horario/Trabajador'
import { Asignadorendiseño } from '../../componentes/asignador/Asignadorendiseño';
import { Presupuesto } from '../../componentes/horario/Presupuesto';
import { getFirestore } from 'firebase/firestore/lite';
import { doc, collection, setDoc, getDoc} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { UserAuth } from '../../context/AuthContext';
import app from '../../firebase/firebase';
import { useState } from 'react';

export default function Account() {
const [userRol, setUserRol] =useState()
const {user} = UserAuth()
const db =getFirestore(app)

const auth = getAuth();
const dato= auth.currentUser;

if (dato !== null) {
  dato.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.locaId);
    console.log("  Email: " + profile.email);
    
  });
}
 

if (dato!==null){
  
  console.log( "uid", dato.uid )

}

const id = dato.uid

/* const r15 =db.collection('users').doc('${dato.uid}')
const docuCifrada=  getDoc(r15)
const infoFinal =docuCifrada.data().rol;
console.log("r15:",infoFinal) */





    /* async function getRol(uid){
        const docuRef= doc(db, `users/${uid}`);
        const docuCifrada = await getDoc(docuRef);
        const infoFinal= docuCifrada.data().rol;
        return infoFinal; 
        }
    function setUserWithFirebaseAndRol(user){
        getRol(user.uid).then((rol)=>{
            const userData={
                uid: user.uid, 
                email: user.email,
                rol: rol,
    
            }
           setUserRol(userData);
            
        }).then(setUserWithFirebaseAndRol(user))
    
    }
    
 */    
  
         console.log("user rol:", userRol);
         console.log("test from account:",user)  

   return (

    <Routes>
  <Route path="/" element={<Layout/>} >
  <Route 
  index 
  element={<Bienvenida />} 
  />
  
  <Route 
  path="asignador" 
  element={<Asignador1 />}  />
  
  <Route 
   path="horario"
   element={<Horario/>} 
   >  
   <Route path='presupuesto' element={<Presupuesto/>}/> 
   <Route path='ubicacion' element={<Ubicacion/>}/> 
   <Route path='obra' element={<Obra/>}/> 
   <Route path='semana' element={<Semana/>}/>
   <Route path='trabajador' element={<Trabajador/>}/> 
   
   
     </Route>

     <Route path="asignadorEndiseño" element={<Asignadorendiseño/>} />
    
    </Route>
  </Routes> 

  )
}


//TODO: BOTONES RENDERIZABLES DE COMPONENTES



//handleSubmit={handleSubmit} by Asignador1