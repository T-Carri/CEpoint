import React from 'react'
import { RouterAdmin } from './RouterAdmin'
import { RouterUser } from './RouterUser'
import app from '../../firebase/firebase'
import { getFirestore } from 'firebase/firestore/lite'
import { UserAuth } from '../../context/AuthContext'
const { user } = UserAuth();
export default function tesstAcces() {
const firebase = getFirestore(app)
console.log("test:", user)
    return (

    <h1>cliente</h1>
  )
}
