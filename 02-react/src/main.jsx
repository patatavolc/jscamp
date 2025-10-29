import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Al usar StrictMode, React renderiza dos veces en desarrollo para detectar errores
createRoot(document.getElementById('root')).render(
    <App />
)