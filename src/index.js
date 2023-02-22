import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes, useParams,  useLocation} from 'react-router-dom'
//import "bootstrap/dist/css/bootstrap.min.css" 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

<App />
</Router>
 
);

{/* 
<Provider store= {store}>
    <PersistGate loading={null} persistor={persistor}>
      
    </PersistGate>
    </Provider> 
    */}
