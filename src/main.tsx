import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { ItemCountProvider } from './providers/ItemCountProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemCountProvider>
      <App />
    </ItemCountProvider>
  </React.StrictMode>
);
