import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import {getApartments, dialApartment} from "./apartments-service";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App apartments={getApartments()} onApartmentDial={dialApartment}/>
  </React.StrictMode>
);

