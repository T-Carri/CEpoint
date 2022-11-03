import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css" 
import {persistor, store} from './redux/store'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

<App />

 
);

{/* 
<Provider store= {store}>
    <PersistGate loading={null} persistor={persistor}>
      
    </PersistGate>
    </Provider> 
    */}
