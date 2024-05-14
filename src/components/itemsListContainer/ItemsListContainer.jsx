import React, { useEffect, useState} from 'react'

import { collection, getDocs } from "firebase/firestore"
import { db } from '../../db/db'

import useLoading from '../../hooks/useLoading'
import Item from './Item'

const ItemsListContainer = ({ category }) => {

    const {loading, toggleLoading, loadingScreen} = useLoading()
    const [productsData, setProductsData] = useState([])
    const [loadingError, setLoadingError] = useState(false)

    const getProducts = async()=>{
        try {
            const dataDb = await getDocs(collection(db, "products"))
            const data = dataDb.docs.map((productDb)=>{
                return { id: productDb.id, ...productDb.data() }
            })
            setProductsData(data)
            toggleLoading()
        } catch (error) {
            console.error("Error fetching products:", error)
            toggleLoading()
            setLoadingError(true)
        }
    }
    const productsFiltered = productsData.filter(item => item.category.includes(category))

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        setLoadingError(productsFiltered.length === 0)
    }, [category, productsData])

    if (loading) {
        return loadingScreen
    }else if (loadingError) {
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