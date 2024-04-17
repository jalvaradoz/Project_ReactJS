import './App.css'
import useLoading from './hooks/useLoading'
import { useEffect } from 'react'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import Index from './components/pages/Index'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'
import Collections from './components/pages/Collections'
import Gallery from './components/pages/Gallery'
import SignUp from './components/pages/SignUp'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/pages/RouterScrollLogic/ScrollToTop'


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
  }, []);

  /* *********************** */

  if (loading) {
    return loadingScreen
  }
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <NavBar />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/collections/:idCategory' element={<Collections />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/sign-up' element={<SignUp />}/>          
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
