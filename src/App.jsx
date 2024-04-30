import './App.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/pages/RouterScrollLogic/ScrollToTop'
import { CartProvider } from './context/CartContext'
import { AlertProvider } from './context/SweetAlert'
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
            <AnimatedRoutes />
          <Footer />
        </CartProvider>
      </AlertProvider>
    </BrowserRouter>
  )
}

export default App
