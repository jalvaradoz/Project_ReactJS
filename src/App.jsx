import './App.css'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import PromoBanner from './components/banners/PromoBanner'
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer'
import MainBanners from './components/banners/MainBanners'
import MidTitles from './components/midTitles/MidTitles'
import TopSellers from './components/mainSections/TopSellers'
import MainFaun from './components/mainSections/MainFaun'
import Footer from './components/footer/Footer'



function App() {


  
  return (
    <>
      <Header />
      <NavBar />
      <PromoBanner />
      <ItemsListContainer greeting='Hello World!'/>
      <MidTitles midTitle={'Top sellers'}/>
      <TopSellers />
      <MainBanners src={'img/banners/sirenMain.webp'} alt={'sirenCollection'}/>
      
      <MainBanners src={'../img/banners/faunMain.webp'} alt={'faunCollection'}/>
      <MainFaun />

      <MainBanners src={'img/banners/ghostMain.webp'} alt={'ghostCollection'}/>

      <MainBanners src={'img/banners/theaMain.webp'} alt={'theaCollection'}/>

      <MainBanners src={'img/banners/vampireCollection.webp'} alt={'vampireCollection'}/>

      <Footer />
    </>
  )
}

export default App
