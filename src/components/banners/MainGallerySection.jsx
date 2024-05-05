import React from 'react'

const MainGallerySection = ({collection, src1, src2, src3, src4, src5, src6}) => {
    return (
        <section id={`${collection}Gallery`}>
            <div className='my-28 relative'>
                <video className="h-full w-full rounded-3xl" controls autoPlay loop muted>
                    <source src={`/img/gallery/${collection}MainVideo.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2 className='w-fit text-nowrap text-3xl md:text-6xl lg:text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 title bg-[#00000077] pb-2 px-4 rounded-3xl'>{collection}</h2>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-12 px-1'>
                <img className='h-[250px] lg:h-[500px] rounded-3xl' src={`/img/gallery/${collection}/${src1}`} alt={`${collection}Gallery1`} />
                <img className='h-[250px] lg:h-[500px] rounded-3xl' src={`/img/gallery/${collection}/${src2}`} alt={`${collection}Gallery2`} />
                <img className='h-[250px] lg:h-[500px] rounded-3xl' src={`/img/gallery/${collection}/${src3}`} alt={`${collection}Gallery3`} />
                <img className='h-[250px] lg:h-[500px] rounded-3xl' src={`/img/gallery/${collection}/${src4}`} alt={`${collection}Gallery4`} />
                <img className='h-[250px] lg:h-[500px] rounded-3xl' src={`/img/gallery/${collection}/${src5}`} alt={`${collection}Gallery5`} />
                <img className='h-[250px] lg:h-[500px] rounded-3xl' src={`/img/gallery/${collection}/${src6}`} alt={`${collection}Gallery6`} />
            </div>
        </section>
    )
}

export default MainGallerySection