import {useContext, createContext} from "react"
import {
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged 
} from "firebase/auth"


const AuthContext = createContext(); 

export const AuthContextProvider= ({children})
=>{

return(
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
)

}
export const UserAuth = () => {
    return useContext(AuthContext)

}