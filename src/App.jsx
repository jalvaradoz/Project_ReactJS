import './App.css'
import Header from './components/header/Header'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/banner/Banner'
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer'

function App() {

  return (
    <>
      <Header title= "Alter Jewelry"/>
      <NavBar/>
      <Banner promo= 'new collections available'/>
      <ItemsListContainer greeting='Hello World!'/>
    </>
  )
}

export default App
