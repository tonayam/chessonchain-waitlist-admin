import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/Context';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
