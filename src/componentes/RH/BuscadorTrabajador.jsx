import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot, doc, getDoc, where, setDoc, updateDoc, limit  } from 'firebase/firestore';
import { db } from '../../firebase/firebase'

const BuscadorTrabajador = () => {
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
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuscadorTrabajador;