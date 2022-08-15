
import React, { useState } from 'react';
import './App.css';
import { NavbarBrand } from 'reactstrap';
import Bienvenida from "./Pages/bienvenida/bienvenida"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import {Signup} from '../src/Pages/Access/Signup'
//import {Loginup} from '../src/Pages/Access/Loginup'
import Account from './Pages/perfil/Account';
import Totalogin from '../src/Pages/Access/Totalogin'
import Totalsignup from '../src/Pages/Access/Totalsignup'
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from '../src/Pages/Access/ProtectedRoute'; 
import {useSelector} from 'react-redux';

function App() {

   const {currentUser} = useSelector((state)=>state.user); 

  return (
    <div className="App">
 <AuthContextProvider>
   <Router>
   <Routes>
      <Route exact path="/" element={<Bienvenida/>} />
    <Route  path="/login" element={<Totalogin/>} />
    <Route  path="/signup" element={<Totalsignup/>} />
    <Route  path="/account" element={ currentUser?  <ProtectedRoute>
                <Account />
              </ProtectedRoute> : <Bienvenida/> } />
      </Routes>
  </Router>
   
     </AuthContextProvider>   



    </div>
  );
}

export default App;
//


/*  
   */