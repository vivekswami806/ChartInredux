import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextBar from './context/ContextBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextBar>
    <App />
    </ContextBar>
   
  </React.StrictMode>,
)
