import React from 'react'
import { useParams } from 'react-router-dom'
import ItemsListContainer from '../itemsListContainer/ItemsListContainer'
import MainBanners from '../banners/MainBanners'
import MidTitles from '../midTitles/MidTitles'
import HistoryComponent from './HistoryComponent'

const Collections = () => {

    const { idCategory } = useParams()

    if(idCategory){
        return (
            <div>
                <MainBanners src={`../public/img/banners/${idCategory}Collection.webp`} />
                <h1 className='text-center text-3xl md:text-5xl lg:text-8xl [font-family:--cursive] my-14'>Products</h1>
                <ItemsListContainer category={idCategory} />
                <MidTitles midTitle={'History'} />
                <HistoryComponent collection={idCategory} />
            </div>
        )
    }
}

export default Collections