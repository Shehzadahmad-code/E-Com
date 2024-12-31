import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  
import App, { ProductContext } from './App.jsx'; 
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <ProductContext.Provider value={{ cardData: [] }}> 
      <App />
    </ProductContext.Provider>
    </BrowserRouter>
  </StrictMode>
);
