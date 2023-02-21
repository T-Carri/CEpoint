import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
} from 'firebase/auth';

import app from '../firebase/firebase';
import { auth } from '../firebase/firebase';
import axios from 'axios'


import { getFirestore } from 'firebase/firestore/lite';
import { doc, collection, setDoc, getDoc} from "firebase/firestore"
const UserContext = createContext();
export default UserContext
export const UserAuth = () => {
  return useContext(UserContext);
};



export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  // const dispatch=useDispatch() ;
  const firestore= getFirestore(app)
  
  //version normal 
  const createUsuario = (email, password) => {
    return  createUserWithEmailAndPassword(auth, email, password)
    
    
  };  
 

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
    
   }


  const logout = () => {
      return signOut(auth)
      
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({currentUser});
      //setUser(currentUser);
      setUser(currentUser);
      console.log('currentversion is running')
    });
    return () => unsubscribe();
  
  },[]);
console.log(JSON.stringify(user))
  return (
    <UserContext.Provider value={{createUsuario, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};




 //version firestore
 /*  async function  createUser(email, password, rol){
    const infoUsuario = await createUserWithEmailAndPassword(
        auth, 
       
        email, 
        password
    ).then((currentUser)=>{
        return currentUser;
    });
//aqui escribir datos del usuario de firebase
console.log(infoUsuario.user.ui)
const docuRef= doc(firestore, `users/ ${infoUsuario.user.uid} `);
setDoc(docuRef, {correo:email, rol:rol});
} */

















/*const AuthContext = createContext(); 
//try too with React.createContext();


export const AuthProvider= ({children})
=>{
    const [currentUser, setCurrentUser] = useState(null);

useEffect(() => {
    app.auth
    return () => {
        cleanup
    }
}, [input])


return(
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
)

}
*/