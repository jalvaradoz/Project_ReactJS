import React from 'react'

import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

import PromoBanner from '../components/banners/PromoBanner'
import MainBanners from '../components/banners/MainBanners'
import MidTitles from '../components/midTitles/MidTitles'
import ItemsListContainer from '../components/itemsListContainer/ItemsListContainer'
import MainNavigationBtn from '../components/buttons/MainNavigationBtn'

const Index = () => {

    return (
        <>
            <Helmet>
                <title>Alter Jewelry | Alternative Style</title>
                <meta name='description' content='Explore our exclusive collection of "alternative" jewelry where elegance meets consciousness. Each piece is meticulously handcrafted with vegan and eco-friendly materials. Dive into our universe of unique and sustainable design where beauty meets ethics. Welcome to a world where distinction is eco-friendly!'/>
            </Helmet>
            <motion.div
                initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
                animate={{opacity:1, scale:1, transition:{duration:1}}} 
                exit={{opacity:0, transition:{duration:.5}}}
            >
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
            </motion.div>
        </>
    )
}

export default Index