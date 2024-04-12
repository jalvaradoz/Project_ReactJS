import './App.css'
import useLoading from './hooks/useLoading'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { useEffect } from 'react'

function App() {

  const {loading, toggleLoading, loadingScreen} = useLoading()

  useEffect(() => {
    toggleLoading()
  }, [])

  if(loading){
    return loadingScreen
  }
  
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  )
}

export default App
