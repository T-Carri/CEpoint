import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import axios from 'axios'
import {useDispatch} from "react-redux"
import {loginFailure, loginStart, loginSuccess, logout} from "../redux/UserSlice"

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const dispatch=useDispatch();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      ()=>{
        axios.post('http://localhost:8800/api/auth/signup ', { email, password })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        }); 
     
      }
    )
    
      
    
    
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password).then(
      ()=>{
        axios.post('http://localhost:8800/api/auth/login ', { email, password })
        .then(function (res) {
          
          console.log(res);
          dispatch(loginStart())
          // handle success
          dispatch( loginSuccess(res.data))
          
        })
        .catch(function (error) {
          // handle error
          dispatch(loginFailure());

          console.log(error);
        }); 
     
      }
    )
   }


  const logout = () => {
      return signOut(auth)

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};




















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