import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

// Import your components/screens
import App from './App';
import Chat from '../components/Chat.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
