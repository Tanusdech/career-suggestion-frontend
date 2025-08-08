// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './global.css';

import { ToastProvider } from './context/ToastContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>   {/* ✅ ห่อ App ด้วย ToastProvider */}
      <App />
    </ToastProvider>
  </React.StrictMode>
);
