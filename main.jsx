import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

localStorage.clear()
createRoot(document.getElementById('root')).render(
  
 <AuthProvider> 
    <App />
 </AuthProvider>
  
)
