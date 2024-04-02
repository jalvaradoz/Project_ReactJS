import './App.css'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import PromoBanner from './components/banners/PromoBanner'
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer'
import MainBanners from './components/banners/MainBanners'
import MidTitles from './components/midTitles/MidTitles'
import TopSellers from './components/mainSections/TopSellers'
import MainSiren from './components/mainSections/MainSiren'
import MainFaun from './components/mainSections/MainFaun'
import MainGhost from './components/mainSections/MainGhost'
import MainThea from './components/mainSections/MainThea'
import MainVampire from './components/mainSections/MainVampire'
import MainNavigationBtn from './components/buttons/MainNavigationBtn'
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
      <MainSiren />
      <MainNavigationBtn />
      <MainBanners src={'../img/banners/faunMain.webp'} alt={'faunCollection'}/>
      <MainFaun />
      <MainNavigationBtn />
      <MainBanners src={'img/banners/ghostMain.webp'} alt={'ghostCollection'}/>
      <MainGhost />
      <MainNavigationBtn />
      <MainBanners src={'img/banners/theaMain.webp'} alt={'theaCollection'}/>
      <MainThea />
      <MainNavigationBtn />
      <MainBanners src={'img/banners/vampireCollection.webp'} alt={'vampireCollection'}/>
      <MainVampire />
      <MainNavigationBtn />
      <Footer />
    </>
  )
}

export default App
