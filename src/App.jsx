import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { PayPalScriptProvider} from "@paypal/react-paypal-js"

import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { AlertProvider } from './context/SweetAlert'

import ScrollToTop from './pages/RouterScrollLogic/ScrollToTop'
import AnimatedRoutes from './pages/AnimatedRoutes'

import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AlertProvider>
        <AuthProvider>
          <CartProvider>
            <Header />
            <NavBar />
              <PayPalScriptProvider 
                options={{
                  clientId: import.meta.env.VITE_CLIENT_ID,
                  currency: 'MXN',
                  locale: 'en_US',
                }}
                >
                <AnimatedRoutes />
              </PayPalScriptProvider>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  )
}

export default App
