//habil
import React, {useContext, useEffect} from 'react';
import './App.css';
import Bienvenida from "./Pages/bienvenida/bienvenida"
import {BrowserRouter as Router, Route, Routes, useParams,  useLocation} from 'react-router-dom'

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

import  GeneradorReporte from './componentes/horario/AsistenciasParaReporteNomina/GeneradorReporte';


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

import {Maquinaria} from './componentes/almacen/maquinaria/Maquinaria'
import {Prestado} from './componentes/almacen/prestado/Prestado'
import { UiProvider } from './context/UiContext';


import { CEpointProvider } from './context/CEpointContext';
import { RecursosHumanos } from './componentes/RH/RecursosHumanos';
import { Trabajadores } from './componentes/RH/Trabajadores';
import  BuscadorTrabajador  from './componentes/RH/BuscadorTrabajador';
import { FormularioDatosTrabajador } from './componentes/RH/Trabajadores/FormularioDatosTrabajador';
import { CreadorTrabajador } from './componentes/RH/CrearTrabajador/CreadorTrabajador';
import { ProyectosActivos } from './componentes/horario/semana/proyectosActivos/ProyectosActivos';
import { ProyectosAdicionales } from './componentes/horario/semana/proyectosAdicionales/ProyectosAdicionales';
import { ProyectosGarantias } from './componentes/horario/semana/proyectosGarantias/ProyectosGarantias';
import { ProyectosDesactivados } from './componentes/horario/semana/proyectosDesactivados/ProyectosDesactivados';
import { Table } from './componentes/horario/semana/Table';

//ASIGNACION
import { Proyecto } from './componentes/asignador/Proyecto/Proyecto';
import { CreaProyecto } from './componentes/asignador/CreacionProyectos/CreaProyecto';
import { CreaKey } from './componentes/asignador/CreacionKey/CreaKey';




function App() {
  const location = useLocation();
  console.log(location)
  return (
 <AuthContextProvider>
  <CEpointProvider>

   
 
  <UiProvider>
    <>
   
   <Routes>
      <Route exact path="/" element={<Bienvenida/>} />
    <Route  path="/login" element={<Totalogin/>} />
    <Route  path="/signup" element={<Totalsignup/>} />
    

    <Route  path="account/*"  state={{ from: location}} element={ 
      <ProtectedRoute>

        <AccountUser/>

      </ProtectedRoute>
                                   
                                  
   } >

    <Route index element={<WelcomeHome />}  />
  

 

    <Route path="recursosHumanos" element={<RecursosHumanos/>} >
       <Route path='trabajadores' element={<Trabajadores/>}>
          <Route path="formulariodatostrabajador/:Id" 
           
           element={<FormularioDatosTrabajador/>}/> 
        </Route> 
       <Route path='buscadorTrabajador' element={<BuscadorTrabajador/>}/> 
       <Route path='agregaTrabajador' element={<CreadorTrabajador/>}>
       <Route path="formulariodatostrabajador/:Id" 
           
           element={<FormularioDatosTrabajador/>}/>
        </Route> 
    </Route>


    <Route  path="horario" element={   <Horario/>  } >  
            <Route path='generadorreporte' element={<GeneradorReporte/>}/> 
            <Route path='ubicacion' element={<Ubicacion/>}/> 
            <Route path='obra' element={<Obra/>}/> 
            <Route path='semana' element={<Semana/>}>
                   <Route path='proyectosactivos' element={<ProyectosActivos/>}>
                   <Route path='table/:presupuesto' element={<Table/>}/> 
                   </Route>
                   <Route path='proyectosadicionales' element={<ProyectosAdicionales/>}>
                   <Route path='table/:presupuesto' element={<Table/>}/> 
                    </Route> 
                  <Route path='proyectosgarantias' element={<ProyectosGarantias/>}>
                       <Route path='table/:presupuesto' element={<Table/>}/> 
                    </Route> 
                   <Route path='proyectosdesactivados' element={<ProyectosDesactivados/>}/> 


            </Route>

            <Route path='trabajador' element={<Trabajador/>}/> 
    </Route>


     <Route path="asignadorEndiseño" element={ <Asignador/> } >
        
            <Route path="proyecto/:electo" element={<Proyecto/>} />
            <Route path="creaproyecto" element={<CreaProyecto/>} />
            <Route path="creakey" element={<CreaKey/>} />
        </Route> 
    
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

   
    </>
    </UiProvider>
     

  
 
  </CEpointProvider>
  </AuthContextProvider>   



  );
}

export default React.memo(App) ;
