import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './contexts/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter >
   <ThemeProvider>
      
   <App />
   
   </ThemeProvider>
   </BrowserRouter>
);

