import React, {useContext, useEffect} from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CEpointContext from '../../context/CEpointContext';
import UiContext from '../../context/UiContext';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ConstructionIcon from '@mui/icons-material/Construction';
import { 
    useNavigate
  } from 'react-router-dom';
export const MainListItems=()=>{
    
    const {state, accessKey}=useContext(CEpointContext)
    const {setToggleRH, setToggleALMACEN}=useContext(UiContext)
    const navigate = useNavigate();

    useEffect(()=>{
      if(!state.UsuariosSesion){accessKey()}
      
    }, [state.UsuariosSesion])

    return(
        <>
      
     {state.UsuarioSesion.rh?
          <ListItemButton   onClick={()=>{navigate("recursosHumanos")
          setToggleRH(false)
          }}>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Recursos Humanos" />
        </ListItemButton>:null
        }
    {state.UsuarioSesion.lectoreAsistencia?
          <ListItemButton   onClick={()=>navigate("horario")}>
          <ListItemIcon>
            <WatchLaterIcon />
          </ListItemIcon>
          <ListItemText primary="Asistencia" />
        </ListItemButton>:null
        }
            {state.UsuarioSesion.asignador?
          <ListItemButton onClick={()=>navigate("asignadorEndiseño")}>
          <ListItemIcon >
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Asignacion" />
        </ListItemButton>:null
        }
            {state.UsuarioSesion.almacen?
          <ListItemButton  onClick={()=>{navigate("almacen")
          setToggleALMACEN(false)
          }}>
          <ListItemIcon>
            <ConstructionIcon />
          </ListItemIcon>
          <ListItemText primary="Almacen" />
        </ListItemButton>:null
        }

        </>
    )
}

  

    