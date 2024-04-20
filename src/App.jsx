import './App.css'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/pages/RouterScrollLogic/ScrollToTop'
import useLoading from './hooks/useLoading'
import AnimatedRoutes from './components/pages/AnimatedRoutes'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'


function App() {

  const {loading, toggleLoading, loadingScreen} = useLoading()

  useEffect(() => {
    const handleLoad = () => {
      toggleLoading()
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  /* for chrome for mobile only */

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleLoading()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  /* *********************** */

  if (loading) {
    return loadingScreen
  }
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <NavBar />
        <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
