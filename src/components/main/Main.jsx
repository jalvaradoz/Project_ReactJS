import React from 'react'
import PromoBanner from '../banners/PromoBanner'
import ItemsListContainer from '../itemsListContainer/ItemsListContainer'
import MainBanners from '../banners/MainBanners'
import MidTitles from '../midTitles/MidTitles'
import TopSellers from '../main/mainSections/TopSellers'
import MainSiren from '../main/mainSections/MainSiren'
import MainFaun from '../main/mainSections/MainFaun'
import MainGhost from '../main/mainSections/MainGhost'
import MainThea from '../main/mainSections/MainThea'
import MainVampire from '../main/mainSections/MainVampire'
import MainNavigationBtn from '../buttons/MainNavigationBtn'

const Main = () => {
    return (
        <>
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
        </>
    )
}

export default Main