import React from 'react'
import PromoBanner from '../banners/PromoBanner'
import MainBanners from '../banners/MainBanners'
import MidTitles from '../midTitles/MidTitles'
import ItemsListContainer from '../itemsListContainer/ItemsListContainer'
import MainNavigationBtn from '../buttons/MainNavigationBtn'

const Index = () => {

    return (
        <>
            <PromoBanner />
            <MidTitles midTitle={'Top sellers'}/>
                <ItemsListContainer category={'topSellers'} />
            <MainBanners src={'img/banners/sirenMain.webp'} alt={'sirenCollection'}/>
                <ItemsListContainer category={'topSiren'} />
                <MainNavigationBtn nav={'/collections/siren'} />
            <MainBanners src={'/img/banners/faunMain.webp'} alt={'faunCollection'}/>
                <ItemsListContainer category={'topFaun'} />
            <MainNavigationBtn nav={'/collections/faun'} />
                <MainBanners src={'img/banners/ghostCollection.webp'} alt={'ghostCollection'}/>
                <ItemsListContainer category={'topGhost'} />
            <MainNavigationBtn nav={'/collections/ghost'} />
                <MainBanners src={'img/banners/theaMain.webp'} alt={'theaCollection'}/>
                <ItemsListContainer category={'topThea'} />
            <MainNavigationBtn nav={'/collections/thea'} />
                <MainBanners src={'img/banners/vampireMain.webp'} alt={'vampireCollection'}/>
                <ItemsListContainer category={'topVampire'} />
            <MainNavigationBtn nav={'/collections/vampire'} />
        </>
    )
}

export default Index