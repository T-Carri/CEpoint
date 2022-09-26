import './Account.css'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Routes,
  useNavigate
} from 'react-router-dom';
import {Horario} from '../../componentes/Horario'
import {Prueba} from '../../componentes/Prueba'
import {Layout} from './Layout'
import {Asignador1} from '../../componentes/asignador/Asignador1';
import { Bienvenida } from '../../componentes/Bienvenida';
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
  element={<Asignador1 />} 
  />
  <Route 
   path="horario"
   element={<Horario/>} 
   />
    
    </Route>
  </Routes> 

  )
}


//TODO: BOTONES RENDERIZABLES DE COMPONENTES



//handleSubmit={handleSubmit} by Asignador1