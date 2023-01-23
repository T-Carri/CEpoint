import { TYPES } from "./Types"
export const AsignacionState=(state, action )=>{
switch(action.type){


  
  case TYPES.USUARIO_DATA:
    return {
        ...state,
        : action.data
    }



    case TYPES.CALL_PROYECTOS_ACTIVOS:
        return {
            ...state,
            asignacionesActivasDetails: action.data
        }
     
     case TYPES.CALL_PROYECTOS_DESACTIVADOS: 
      return{
        ...state, 
        asignacionesDD: action.data
      }    

  
      case TYPES.ACTIVA_PROYECTO: 
      return{
        ...state, 
        AP: action.data
      }   
     
      case TYPES.DESACTIVA_PROYECTO: 
      return{
        ...state, 
        DP: action.data
      } 
      case TYPES.ID_PROYECTO: 

      return{
        ...state, 
        IdProyectoDetail: action.data
      }

  case TYPES.ASIGNADO_CHECADOR:
     return {
       ...state, 
      ChecadorAsignadouser: action.data
  }

  case TYPES.PROYECTO:
     return {
       ...state, 
       Proyecto: action.data
  }


}
    
}

