import React, { useEffect, useState } from 'react'
import products from '../data/getProducts'
import Item from './Item'

const ItemsListContainer = ({ category }) => {
    const [productsData, setProductsData] = useState([])
    const [loadingError, setLoadingError] = useState(false)

    useEffect(() => {
        setProductsData(products)
    }, [])

    const productsFiltered = productsData.filter(item => item.category.includes(category))

    useEffect(() => {
        setLoadingError(productsFiltered.length === 0)
    }, [category, productsData])

    if (loadingError) {
        return <h2 className='text-center text-5xl text-red-500 my-12'>Error Loading products, please refresh</h2>
    }

    return (
        <div className="flex flex-wrap gap-16 justify-center items-center my-24 mx-7 max-w-full h-fit">
            {
                productsFiltered.map(product=> (
                    <Item src1={product.image1} src2={product.image2} title={product.name} price={product.price} key={product.id} details={product.description} stock={product.stock} product={product}/>
                ))
            }
        </div>
    );
}

export default ItemsListContainer