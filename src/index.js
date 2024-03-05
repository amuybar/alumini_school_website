// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));
root.render(
 
    <App />
  
);
