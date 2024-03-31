import React, { useEffect, useState } from 'react'
import products from '../data/getProducts'
import Item from '../itemsListContainer/Item'

const TopSellers = () => {

    const [productsData, setProductsData] = useState([])

    useEffect(()=>{
        setProductsData(products)
    },[])

    const productsFiltered = productsData.filter(p=>p.category.includes('topSellers'))

    return (
        <div className="flex flex-wrap gap-16 justify-center items-center mt-24 mx-7 max-w-full h-fit">
            {
                productsFiltered.map(p=> (
                    <Item src1={p.image1} src2={p.image2} title={p.name} price={p.price} key={p.id}/>
                ))
            }
        </div>
    )
}

export default TopSellers