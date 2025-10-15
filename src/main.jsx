import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('🚀 Starting Easy Sign app...');

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  console.log('✅ Root created successfully');
  root.render(<App />);
  console.log('✅ Easy Sign app rendered successfully');
} catch (error) {
  console.error('❌ Error rendering Easy Sign app:', error);
  console.error('Error details:', error.message);
  console.error('Error stack:', error.stack);
}
