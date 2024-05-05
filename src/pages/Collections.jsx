import React from 'react'

import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import ItemsListContainer from '../components/itemsListContainer/ItemsListContainer'
import MainBanners from '../components/banners/MainBanners'
import MidTitles from '../components/midTitles/MidTitles'
import HistoryComponent from './HistoryComponent'

const Collections = () => {

    const { idCategory } = useParams()

    if(idCategory){
        return (
            <>
                <Helmet>
                    <title>AJ | {idCategory.toUpperCase()} COLLECTION</title>
                    <meta name='description' content={`Explore our exclusive collection ${idCategory} where elegance meets consciousness. Each piece is meticulously handcrafted with vegan and eco-friendly materials. Dive into our universe of unique and sustainable design where beauty meets ethics. Welcome to a world where distinction is eco-friendly!`}/>
                </Helmet>
                <motion.div
                    initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
                    animate={{opacity:1, scale:1, transition:{duration:1}}} 
                    exit={{opacity:0, transition:{duration:.5}}}
                >
                    <MainBanners src={`/img/banners/${idCategory}Collection.webp`} />
                    <h1 className='text-center text-4xl md:text-5xl lg:text-8xl [font-family:--cursive] my-14'>Products</h1>
                    <ItemsListContainer category={idCategory} />
                    <MidTitles midTitle={'History'} />
                    <HistoryComponent collection={idCategory} />
                </motion.div>
            </>
        )
    }
}

export default Collections