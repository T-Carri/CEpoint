/* import React from "react";   
import RouterAdmin from "./RouterAdmin";
import RouterUser from "../../../basura/RouterUser";
import { getAuth } from "firebase/auth";

import { useEffect, useState, useContext, useMemo} from "react"
import UserContext from "../../../context/AuthContext";
function Account() {
 
  const auth = getAuth();
  const {user} = useContext(UserContext)
  const dato= auth.currentUser;
  if (dato!==null){
    console.log( "uid", user.uid )
  }

   useEffect(,[]) 

console.log(userRol); 

return (
    <div>
     
       {userRol === "admin" ? <RouterAdmin/> : <RouterUser/>} 
    </div>
  );
}

export default Account; */