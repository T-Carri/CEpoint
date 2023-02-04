import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot, doc, getDoc, where, setDoc, updateDoc, limit  } from 'firebase/firestore';
import { db } from '../../firebase/firebase'
import { InputGroup, Form } from 'react-bootstrap';
import {List, ListItem, ListItemText, Divider} from '@mui/material'
export const Trabajador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

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

