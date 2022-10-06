import React from "react";   
import RouterAdmin from "./RouterAdmin";
import RouterUser from "./RouterUser";

import {app} from "../../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

function Account({ user }) {
  console.log(user);
  return (
    <div>
     
      {user.rol === "admin" ? <RouterAdmin/> : <RouterUser/>}
    </div>
  );
}

export default Account;