import { TYPES } from "./Types"
export const GlobalState=(state, action)=>{
switch(action.type){

  case TYPES.GET_PROYECTOS:
    return {
        ...state,
        TotalProyectos : action.payload
    }
  
  case TYPES.USUARIO_DATA:
    return {
        ...state,
        UsuarioSesion : action.payload
    }

   case TYPES.USUARIOS_ACTIVOS:
      return {
          ...state,
          UsuariosActivosDetail : action.payload
      }
   
   case TYPES.USUARIOS_INACTIVOS:
        return {
            ...state,
            UsuariosInactivosDetail : action.payload
        }      
  case TYPES.USUARIOS_OCUPADOS:
          return {
              ...state,
              UsuariosOcupados : action.payload
          }      
  
  case TYPES.USUARIOS_DESOCUPADOS:
            return {
                ...state,
                UsuariosDesocupados : action.payload
            }      
   case TYPES.USUARIOS_DISPONIBLES_CHECADOR:
            return {
               ...state,
               UsuariosDisponiblesChecador : action.payload
              }   
  case TYPES.REDUCER_USER_CHECADOR:
             return {
              ...state,
              UserChecador : action.payload
                  }   
  case TYPES.FETCH_ONLYUSER:
             return {
              ...state,
             OnlyUser : action.payload
                    }   

   case TYPES.CALL_PROYECTOS_ACTIVOS:
          return {
              ...state,
              asignacionesActivasDetails: action.payload
          }
       
       case TYPES.CALL_PROYECTOS_DESACTIVADOS: 
        return{
          ...state, 
          asignacionesDD: action.payload
        }    
  
    
        case TYPES.ACTIVA_PROYECTO: 
        return{
          ...state, 
          AP: action.payload
        }   
       
        case TYPES.DESACTIVA_PROYECTO: 
        return{
          ...state, 
          DP: action.payload
        } 
        
  
    case TYPES.ASIGNADO_CHECADOR:
       return {
         ...state, 
        ChecadorAsignadouser: action.payload
    }
  
    case TYPES.PROYECTO:
       return {
         ...state, 
         Proyecto: action.payload
    }
  
    default:
      return state;
  
  }
      
  }


  
        
//ELIMINADOS 
/*

case TYPES.ID_PROYECTO: 
  
        return{
          ...state, 
          IdProyectoDetail: action.payload
        }

*/
