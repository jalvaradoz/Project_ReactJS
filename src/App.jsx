import './App.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/pages/RouterScrollLogic/ScrollToTop'
import { CartProvider } from './context/CartContext'
import { AlertProvider } from './context/SweetAlert'
import { PayPalScriptProvider} from "@paypal/react-paypal-js"
import AnimatedRoutes from './components/pages/AnimatedRoutes'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AlertProvider>
        <CartProvider>
          <Header />
          <NavBar />
            <PayPalScriptProvider 
              options={{
                clientId: "AWUk5TEzVbBAYGmmVC1E2JGd2kW_ib4HwOFK-OGS-DAnuLx3idTaQENSvyebCc4v87jiegYM0eU6Lg8l",
                currency: 'MXN',
                locale: 'en_US',
              }}
              >
              <AnimatedRoutes />
            </PayPalScriptProvider>
          <Footer />
        </CartProvider>
      </AlertProvider>
    </BrowserRouter>
  )
}

export default App
