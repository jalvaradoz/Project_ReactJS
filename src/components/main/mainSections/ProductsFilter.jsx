import React, { useEffect, useState } from 'react'
import products from '../../data/getProducts'
import Item from '../../itemsListContainer/Item'

const ProductsFilter = ({ category }) => {
    const [productsData, setProductsData] = useState([])
    const [loadingError, setLoadingError] = useState(false)

    useEffect(() => {
        setProductsData(products)
    }, [])

    const productsFiltered = productsData.filter(p => p.category.includes(category))

    useEffect(() => {
        setLoadingError(productsFiltered.length === 0)
    }, [category, productsData])

    if (loadingError) {
        return <h2 className='text-center text-5xl text-red-500 my-12'>Error Loading products, please refresh</h2>
    }

    return (
        <div className="flex flex-wrap gap-16 justify-center items-center my-24 mx-7 max-w-full h-fit">
            {
                productsFiltered.map(p=> (
                    <Item src1={p.image1} src2={p.image2} title={p.name} price={p.price} key={p.id}/>
                ))
            }
        </div>
    );
};

export default ProductsFilter
