import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import UserContext from './context/UserContext'


createRoot(document.getElementById('root')).render(
  <UserContext>
   <App/>
  </UserContext>,
)
