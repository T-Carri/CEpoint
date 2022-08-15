// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCNS5zc3tRF0yDyA4mQ63ndxyVMyhPRDEU",
  authDomain: "ce2000point.firebaseapp.com",
  projectId: "ce2000point",
  storageBucket: "ce2000point.appspot.com",
  messagingSenderId: "96210590626",
  appId: "1:96210590626:web:3541b79f1e75a22b87f0fb",
  measurementId: "G-071QD5JEKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider();

export default app;