import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

try {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error('An error occurred during rendering:', error);
  // Optionally, display an error message to the user
}