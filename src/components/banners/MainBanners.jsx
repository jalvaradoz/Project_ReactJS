import React from 'react'

const MainBanners = ({src,alt}) => {
    return (
        <div className="my-28">
            <img className='rounded-3xl w-full object-cover' src={src} alt={alt}/>
        </div>
    )
}

export default MainBanners