//habil
import React from 'react';
import './App.css';
import Bienvenida from "./Pages/bienvenida/bienvenida"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Totalogin from '../src/Pages/Access/Totalogin'
import Totalsignup from '../src/Pages/Access/Totalsignup'
import { AuthContextProvider } from './context/AuthContext';

//new feature
import { AccountUser } from './Pages/perfil/AccountUser';
import { WelcomeHome } from './componentes/WelcomeHome';
import  Usuarios  from './componentes/usuarios/Usuarios';
import { Horario } from './componentes/horario/Horario';
import { Presupuesto } from './componentes/horario/AsistenciasParaReporteNomina/Presupuesto';
import { Ubicacion } from './componentes/horario/Ubicacion';
import { Obra } from './componentes/horario/Obra';
import { Semana } from './componentes/horario/semana/Semana';
import { Trabajador } from './componentes/horario/Trabajador';
import  Asignador  from './componentes/asignador/Asignador';


import ProtectedRoute from './componentes/security/ProtectedRoute';
import ProtectedRouteAuth from './componentes/security/ProtectedRouteAuth';
//import 'bootstrap/dist/css/bootstrap.min.css';
//usuarios
import Todos from './componentes/usuarios/todos/Todos'
import Inactivos  from './componentes/usuarios/inactivos/Inactivos';
import  Ocupados  from './componentes/usuarios/ocupados/Ocupados';
import  Desocupados  from './componentes/usuarios/ocupados/Desocupados';
//almacen 
import {Almacen} from './componentes/almacen/Almacen'
import {Miscelaneos} from './componentes/almacen/miscelaneos/Miscelaneos'
import { Herramientas } from './componentes/almacen/herramientas/Herramientas';
import { FormRegistroHerramienta } from './componentes/almacen/herramientas/FormRegistroHerramienta';
import { AlmacenProvider } from './context/AlmacenContext';
import {Maquinaria} from './componentes/almacen/maquinaria/Maquinaria'
import {Prestado} from './componentes/almacen/prestado/Prestado'
import { UiProvider } from './context/UiContext';


import { CEpointProvider } from './context/CEpointContext';
import { RecursosHumanos } from './componentes/RH/RecursosHumanos';
import { Trabajadores } from './componentes/RH/Trabajadores';
import { BuscadorTrabajador } from './componentes/RH/BuscadorTrabajador';
import { FormularioDatosTrabajador } from './componentes/RH/Trabajadores/FormularioDatosTrabajador';
function App() {

  

  return (
 <AuthContextProvider>
  <CEpointProvider>

   
 
<AlmacenProvider>
  <UiProvider>
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
  
    <Route path="usuarios" element={<Usuarios/> } > 
    <Route path="todos" element={<Todos/>} />
    <Route path="inactivos" element={<Inactivos/>} />
    <Route path="ocupados" element={<Ocupados/>} />
    <Route path="desocupados" element={<Desocupados/>} />
    </Route>


    <Route path="recursosHumanos" element={<RecursosHumanos/>} >
       <Route path='trabajadores' element={<Trabajadores/>}>
          <Route path='formulariodatostrabajador' element={<FormularioDatosTrabajador/>}/> 
        </Route> 
       <Route path='buscadorTrabajador' element={<BuscadorTrabajador/>}/> 

    </Route>


    <Route  path="horario" element={   <Horario/>  } >  
            <Route path='presupuesto' element={<Presupuesto/>}/> 
            <Route path='ubicacion' element={<Ubicacion/>}/> 
            <Route path='obra' element={<Obra/>}/> 
            <Route path='semana' element={<Semana/>}/>
            <Route path='trabajador' element={<Trabajador/>}/> 
    </Route>


     <Route path="asignadorEndiseño" element={
       
       <Asignador/>
      } /> 
    
    <Route path="almacen" element={<Almacen/>} > 
    <Route path="miscelaneos" element={<Miscelaneos/>} />
    <Route path="herramienta" element={<Herramientas/>}>
    <Route path="agregaherramienta" element={<FormRegistroHerramienta/>} />

    </Route>
    <Route path="maquinaria" element={<Maquinaria/>} />
    <Route path="prestado" element={<Prestado/>} />
     </Route>
   
    

   


    </Route>
   
    
      </Routes>
  </Router>
   
    </>
    </UiProvider>
      </AlmacenProvider> 

  
 
  </CEpointProvider>
  </AuthContextProvider>   



  );
}

export default React.memo(App) ;
