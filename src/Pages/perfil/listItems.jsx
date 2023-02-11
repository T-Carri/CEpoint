import React, {useContext} from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CEpointContext from '../../context/CEpointContext';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ConstructionIcon from '@mui/icons-material/Construction';
import { 
    useNavigate
  } from 'react-router-dom';
export const MainListItems=()=>{
    
    const {state}=useContext(CEpointContext)
    const navigate = useNavigate();
    return(
        <>
        {state.UsuarioSesion.usator?
          <ListItemButton onClick={()=>{navigate("usuarios")}}>
          <ListItemIcon >
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItemButton>:null
        }
     {state.UsuarioSesion.rh?
          <ListItemButton   onClick={()=>navigate("recursosHumanos")}>
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
          <ListItemButton  onClick={()=>navigate("almacen")}>
          <ListItemIcon>
            <ConstructionIcon />
          </ListItemIcon>
          <ListItemText primary="Almacen" />
        </ListItemButton>:null
        }

        </>
    )
}

  

    