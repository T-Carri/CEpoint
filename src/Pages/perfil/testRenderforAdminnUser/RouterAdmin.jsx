import '../Account.css'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Routes,
  useNavigate
} from 'react-router-dom';
import {Horario} from '../../../componentes/horario/Horario'
import {AccountAdmin} from './AccountAdmin'
import {Asignador1} from '../../../componentes/asignador/Asignador1';
import { Bienvenida } from '../../../componentes/Bienvenida';
import {Ubicacion} from '../../../componentes/horario/Ubicacion'
import {Obra} from '../../../componentes/horario/Obra'
import {Semana} from '../../../componentes/horario/Semana'
import {Trabajador} from '../../../componentes/horario/Trabajador'
import { Asignadorendiseño } from '../../../componentes/asignador/Asignadorendiseño';
import { Presupuesto } from '../../../componentes/horario/Presupuesto';

export default function RouterAdmin() {

   return (

    <Routes>
  <Route path="/" element={<AccountAdmin/>} >
  <Route 
  index 
  element={<Bienvenida />} 
  />
  
  <Route 
  path="asignador" 
  element={<Asignador1 />}  />
  
  <Route 
   path="horario"
   element={<Horario/>} 
   >  
   <Route path='presupuesto' element={<Presupuesto/>}/> 
   <Route path='ubicacion' element={<Ubicacion/>}/> 
   <Route path='obra' element={<Obra/>}/> 
   <Route path='semana' element={<Semana/>}/>
   <Route path='trabajador' element={<Trabajador/>}/> 
   
   
     </Route>

     <Route path="asignadorEndiseño" element={<Asignadorendiseño/>} />
    
    </Route>
  </Routes> 

  )
}


//TODO: BOTONES RENDERIZABLES DE COMPONENTES



//handleSubmit={handleSubmit} by Asignador1