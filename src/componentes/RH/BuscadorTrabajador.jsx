import React, { useState, useEffect, useContext } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { query, collection, onSnapshot, doc, getDoc, where, setDoc, updateDoc, limit  } from 'firebase/firestore';
import { db } from '../../firebase/firebase'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, Form, InputGroup } from 'react-bootstrap'
import { 
  useNavigate
} from 'react-router-dom';
import UiContext from '../../context/UiContext';




const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


const BuscadorTrabajador = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const {ToggleRH, setToggleRH, setInFormulario
  }=useContext(UiContext)
  const navigate = useNavigate();
  useEffect(() => {
    const collectionRef = query(collection(db,'users'),  where('nombre', '>=', searchTerm)
    ,where('nombre', '<=', searchTerm + '\uf8ff')
    ,limit(10));
    
     

    onSnapshot(collectionRef, snapshot => {
      const updatedResults = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setResults(updatedResults);
    });
  }, [searchTerm]);

  return (
    <div>
 <Button type="button"  variant='outline-dark' className="btn btn-default btn-circle btn-lg" 
    onClick={()=>{
      navigate("../../recursosHumanos",  {replace:true}) 
      setToggleRH(false)
    }}><BsArrowLeftCircle /> Home
                                </Button>

<InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Buscar</InputGroup.Text>
        <Form.Control
          placeholder="Busca Trabajador"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={searchTerm.toUpperCase()}
          onChange={e => setSearchTerm(e.target.value).toUpperCase()}
          onKeyUp={e => e.target.value = e.target.value.toUpperCase()}
        />
      </InputGroup>


<List sx={style} component="nav" aria-label="mailbox folders">
      
        {results.map(result => {

return(
<div>
    <ListItemButton>
    <ListItemText  key={result.id} primary={result.nombre}  onClick={()=>{
        navigate(`../trabajadores/formulariodatostrabajador/${result.id}`, {replace:true})
        setInFormulario(true)
    }}/>
    </ListItemButton>
    <Divider />
    </div>

)

      
      
      
      
      
      
})}
    
      </List>
    </div>
  );
};

export default BuscadorTrabajador;