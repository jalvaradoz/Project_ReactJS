import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import ItemsListContainer from '../itemsListContainer/ItemsListContainer'
import MainBanners from '../banners/MainBanners'
import MidTitles from '../midTitles/MidTitles'
import HistoryComponent from './HistoryComponent'

const Collections = () => {

    const { idCategory } = useParams()

    if(idCategory){
        return (
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
        )
    }
}

export default Collections