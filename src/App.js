//habil
import React from 'react';
import './App.css';
import Bienvenida from "./Pages/bienvenida/bienvenida"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Totalogin from '../src/Pages/Access/Totalogin'
import Totalsignup from '../src/Pages/Access/Totalsignup'
import { AuthContextProvider } from './context/AuthContext';
import { UsuariosProvider } from './context/UsuariosContext';



//new feature
import { AccountUser } from './Pages/perfil/AccountUser';
import { WelcomeHome } from './componentes/WelcomeHome';
import { CreadorUsuarios } from './componentes/usuarios/CreadorUsuarios';
import { Horario } from './componentes/horario/Horario';
import { Presupuesto } from './componentes/horario/Presupuesto';
import { Ubicacion } from './componentes/horario/Ubicacion';
import { Obra } from './componentes/horario/Obra';
import { Semana } from './componentes/horario/Semana';
import { Trabajador } from './componentes/horario/Trabajador';
import { Asignadorendiseño } from './componentes/asignador/Asignadorendiseño';

import ProtectedRoute from './componentes/security/ProtectedRoute';
import ProtectedRouteAuth from './componentes/security/ProtectedRouteAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  

  return (
 <AuthContextProvider>
    <UsuariosProvider>
    <>
   <Router>
   <Routes>
      <Route exact path="/" element={<Bienvenida/>} />
    <Route  path="/login" element={<Totalogin/>} />
    <Route  path="/signup" element={<Totalsignup/>} />
    

    <Route  path="account/*" element={ 
      <ProtectedRoute>

        <AccountUser/>

      </ProtectedRoute>
                                   
                                  
   } >

    <Route index element={<WelcomeHome />}  />
  
    <Route path="usuarios" element={<CreadorUsuarios/> } />

    <Route  path="horario" element={   <Horario/>  } >  
            <Route path='presupuesto' element={<Presupuesto/>}/> 
            <Route path='ubicacion' element={<Ubicacion/>}/> 
            <Route path='obra' element={<Obra/>}/> 
            <Route path='semana' element={<Semana/>}/>
            <Route path='trabajador' element={<Trabajador/>}/> 
    </Route>
   
    <Route path="asignadorEndiseño" element={
       
           <Asignadorendiseño/>
        } />
    
    
   

    </Route>
  
    
      </Routes>
  </Router>
   
    </>
  </UsuariosProvider>
  </AuthContextProvider>   



  );
}

export default App;
