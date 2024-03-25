import React from 'react'
import ProductCard from '../productCard/ProductCard'

const TopSellers = () => {
    return (
        <div className="flex flex-wrap gap-16 justify-center items-center mt-24 mx-7 max-w-full h-fit">
            <ProductCard title={'artemis ear-ring'} price={550} src1={'../img/products/antlerPendant/antler-pendant-984839_1200x.webp'} src2={'../img/products/antlerPendant/antler-pendant-587980_1200x.webp'}/>
            <ProductCard title={'artemis ear-ring'} price={550} src1={'../img/products/antlerPendant/antler-pendant-984839_1200x.webp'} src2={'../img/products/antlerPendant/antler-pendant-587980_1200x.webp'}/>
            <ProductCard title={'artemis ear-ring'} price={550} src1={'../img/products/antlerPendant/antler-pendant-984839_1200x.webp'} src2={'../img/products/antlerPendant/antler-pendant-587980_1200x.webp'}/>
            <ProductCard title={'artemis ear-ring'} price={550} src1={'../img/products/antlerPendant/antler-pendant-984839_1200x.webp'} src2={'../img/products/antlerPendant/antler-pendant-587980_1200x.webp'}/>
            <ProductCard title={'artemis ear-ring'} price={550} src1={'../img/products/antlerPendant/antler-pendant-984839_1200x.webp'} src2={'../img/products/antlerPendant/antler-pendant-587980_1200x.webp'}/>
        </div>
    )
}

export default TopSellers