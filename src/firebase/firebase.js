
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore";
//wtf?REACT_APP_FIREBASE_DATABASE_URL=
import { getPerformance } from "firebase/performance";
const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_apiKey,
       authDomain: process.env.REACT_APP_FIREBASE_authDomain,
        projectId: process.env.REACT_APP_FIREBASE_projectId,
        storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
            appId: process.env.REACT_APP_FIREBASE_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore()

const perf = getPerformance(app)


export default app;




