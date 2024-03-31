import './App.css'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import PromoBanner from './components/banners/PromoBanner'
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer'
import MainBanners from './components/banners/MainBanners'
import MidTitles from './components/midTitles/MidTitles'
import TopSellers from './components/mainSections/TopSellers'
import Footer from './components/footer/Footer'



function App() {


  
  return (
    <>
      <Header />
      <NavBar />
      <PromoBanner promo= 'new collections available'/>
      <ItemsListContainer greeting='Hello World!'/>
      <MidTitles midTitle={'Top sellers'}/>
      <TopSellers />
      <MainBanners src={'../img/banners/faunMain.webp'} alt={'faunCollection'}/>
      <Footer />
    </>
  )
}

export default App
