import React from 'react'

import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

import MainGallerySection from '../components/banners/MainGallerySection'

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Alter Jewelry | Gallery</title>
                <meta name='description' content='Take a look into our amazing gallery !. Explore the history of our company and how it became what it is today. Each piece is meticulously handcrafted with vegan and eco-friendly materials. Dive into our universe of unique and sustainable design where beauty meets ethics. Welcome to a world where distinction is eco-friendly!'/>
            </Helmet>
            <motion.div
            initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
            animate={{opacity:1, scale:1, transition:{duration:1}}} 
            exit={{opacity:0, transition:{duration:.5}}}
            >
                <div className="my-20">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl title ml-10">Gallery</h1>
                    <MainGallerySection collection={'ghost'} src1={'page0_15_95d2cf6c-dade-4424-9f61-0a3fcf14f77c_600x.webp'} src2={'page0_18_576a8b7a-b82d-49b3-911b-c40a0c913b85_600x.webp'} src3={'page0_20_b7cb2418-d91e-4f2b-bbb4-494e32be6de3_600x.webp'} src4={'page0_24_f7817749-f31b-460f-8e83-c2be4aa00cf3_600x.webp'} src5={'page0_30_28aa222a-f04a-4166-a139-fc4de9c80cde_600x.webp'} src6={'page0_32_ca3c1078-eeb9-4b19-8cb2-140e93728424_600x.webp'}/>
                    <MainGallerySection collection={'vampire'} src1={'page0_23_b1b435a7-2231-4481-948f-15a8c38e08b3_600x.webp'} src2={'page0_27_fc00de83-adb2-4c93-9a48-768de97b04c4_600x.webp'} src3={'page0_35_f5882153-deb3-48dc-bf81-3560a73d8338_600x.webp'} src4={'page0_46_cfa5fe09-1545-426b-9e06-1c3862a491e6_600x.webp'} src5={'page0_40_600x.webp'} src6={'page0_47_94454f9e-30e3-4d58-bc20-98e7821707cc_600x.webp'}/>
                    <MainGallerySection collection={'faun'} src1={'page0_56_600x.webp'} src2={'page0_60_600x.webp'} src3={'page0_65_600x.webp'} src4={'page0_76_600x.webp'} src5={'page0_79_600x.webp'} src6={'page0_85_600x.webp'}/>
                    <MainGallerySection collection={'siren'} src1={'page0_2_copy_800x_603ca97d-d8fb-4eb6-8d56-8a173f6cdf2c_600x.webp'} src2={'page0_20_800x_2a9cbfa6-15b5-47b7-bb52-818972893a38_600x.webp'} src3={'page0_25_07bf1a59-eaf4-4ff0-bf21-3d65b2f2d111_600x.webp'} src4={'page0_37_800x_b4959c66-90fe-4171-869a-18d8c9f62e37_600x.webp'} src5={'page0_55_800x_0c83aeba-cdb5-4af9-b7ae-7462d81f8be1_600x.webp'} src6={'Untitled-3_600x.webp'}/>
                    <MainGallerySection collection={'thea'} src1={'page0_2_copy_4_800x_488984a0-1669-44ba-82c7-1c1dc89a9446_600x.webp'} src2={'page0_3_copy_800x_980dc188-d5a5-4fc5-9d23-b97173647ec2_600x.webp'} src3={'page0_13_800x_0db4024c-ae6c-4970-af17-e05ef6d2a406_600x.webp'} src4={'page0_24_800x_cddb5e6c-49e6-410a-8a2f-9de273f0e4bd_600x.webp'} src5={'page0_26_800x_4e187c08-b649-486c-89e5-609b6432a563_600x.webp'} src6={'page0_copy_3_800x_ca207342-32a1-47fc-bc25-a691bd23f8c9_600x.webp'}/>
                </div>
            </motion.div>
        </>
    )
}

export default Gallery