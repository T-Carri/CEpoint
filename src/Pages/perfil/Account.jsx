import './Account.css'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Routes,
  useNavigate
} from 'react-router-dom';
import {Horario} from '../../componentes/horario/Horario'

import {Layout} from './Layout'
import {Asignador1} from '../../componentes/asignador/Asignador1';
import { Bienvenida } from '../../componentes/Bienvenida';
import {Total} from '../../componentes/horario/Total'
import {Ubicacion} from '../../componentes/horario/Ubicacion'
import {Obra} from '../../componentes/horario/Obra'
import {Semana} from '../../componentes/horario/Semana'
import {Fecha} from '../../componentes/horario/Fecha'
import {Trabajador} from '../../componentes/horario/Trabajador'
import { Asignadorendiseño } from '../../componentes/asignador/Asignadorendiseño';
export default function Account() {

   return (

    <Routes>
  <Route path="/" element={<Layout/>} >
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
   <Route path='total' element={<Total/>}/> 
   <Route path='ubicacion' element={<Ubicacion/>}/> 
   <Route path='obra' element={<Obra/>}/> 
   <Route path='semana' element={<Semana/>}/>
   <Route path='fecha' element={<Fecha/>}/> 
   <Route path='trabajador' element={<Trabajador/>}/> 
   
   
     </Route>

     <Route path="asignadorEndiseño" element={<Asignadorendiseño/>} />
    
    </Route>
  </Routes> 

  )
}


//TODO: BOTONES RENDERIZABLES DE COMPONENTES



//handleSubmit={handleSubmit} by Asignador1