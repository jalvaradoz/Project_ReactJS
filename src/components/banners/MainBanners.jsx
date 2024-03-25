import React from 'react'

const MainBanners = ({src,alt}) => {
    return (
        <div className="mainBanners my-28">
            <img src={src} alt={alt}/>
        </div>
    )
}

export default MainBanners