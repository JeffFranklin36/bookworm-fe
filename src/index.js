import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './Components/context/app.context'

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
    
);
