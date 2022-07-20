import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App/App';
import {CitiesContextProvider} from "./CitiesContext/CitiesContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CitiesContextProvider>
        <App />
    </CitiesContextProvider>
  </React.StrictMode>
);