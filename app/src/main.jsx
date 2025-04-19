import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContextProvider from './hooks/useAuth.jsx'
import CartContextProvider from './hooks/useCart.jsx'
import {AlertProvider} from './components/Alert/AlertContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <CartContextProvider>
    <AlertProvider>
      <App />
      </AlertProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
