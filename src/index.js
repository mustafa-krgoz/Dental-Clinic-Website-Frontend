import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // PWA için gerekli

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Servis worker kaydı: PWA özellikleri için
serviceWorkerRegistration.register(); // Çevrimdışı kullanılabilir. 
