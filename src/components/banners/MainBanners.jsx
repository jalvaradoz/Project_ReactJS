import React from 'react'

const MainBanners = ({src,alt}) => {
    return (
        <div className="my-28 relative">
            <img className='rounded-3xl w-full object-cover aspect-video' src={src} alt={alt} width='auto' height='auto'/>
        </div>
    )
}

export default MainBanners