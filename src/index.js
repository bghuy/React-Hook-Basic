import React from 'react';
import { createRoot } from 'react-dom/client'; // Chuyển import sang 'react-dom/client'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);

reportWebVitals();
