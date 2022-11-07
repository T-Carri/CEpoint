import React from "react";   
import RouterAdmin from "./RouterAdmin";
import RouterUser from "./RouterUser";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc} from "firebase/firestore"
import { useEffect, useState, useContext, useMemo} from "react"
import UserContext from "../../../context/AuthContext";
function Account() {
  const [userRol, setUserRol] =useState()
  const auth = getAuth();
  const {user} = useContext(UserContext)
  const dato= auth.currentUser;
  if (dato!==null){
    console.log( "uid", user.uid )
  }

  useEffect(()=>{
    const querydb=getFirestore();
    const queryDoc = doc(querydb, "users", user.uid);
    getDoc(queryDoc).then(res => {
      setUserRol(res.data().rol)
      console.log( res.data().rol)
 }    )
  },[]) 

console.log(userRol);

return (
    <div>
     
      {userRol === "admin" ? <RouterAdmin/> : <RouterUser/>}
    </div>
  );
}

export default Account;