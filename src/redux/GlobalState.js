import React, {useReducer} from "react";

export const TYPES ={ 
    CALL_PROYECTOS_ACTIVOS: 'CALL_PROYECTOS_ACTIVOS', 
    CALL_PROYECTOS_DESACTIVADOS:'CALL_PROYECTOS_DESACTIVADOS',
    ACTIVA_PROYECTO:'ACTIVA_PROYECTO',
    DESACTIVA_PROYECTO:'DESACTIVA_PROYECTO', 
}

export const GlobalState=(state, action )=>{
switch(action.type){
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
}
    
}

