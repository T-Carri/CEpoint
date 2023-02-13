import React, { useState, useEffect, useContext } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import { query, collection, onSnapshot, doc, getDoc, where, setDoc, updateDoc, limit  } from 'firebase/firestore';
import { db } from '../../firebase/firebase'

import {List, ListItem, ListItemText, Divider} from '@mui/material'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { 
  useNavigate, Outlet
} from 'react-router-dom';
import UiContext from '../../context/UiContext';
const BuscadorTrabajador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const {ToggleRH, setToggleRH
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
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </InputGroup>


      <ul>
        {results.map(result => ( 


          <li key={result.id}>{result.nombre}</li>
          

        ))}
      </ul>
    </div>
  );
};

export default BuscadorTrabajador;