import React from 'react'
import './item.css'

const Item = ({src1, src2, title, price}) => {

    return (
        <div className="productPreview relative w-[230px] md:w-[280px] h-auto transition-all duration-300 ease-in-out">
            <div className="imageContainer relative w-auto h-full mb-4">
                <img className="mainImage" src={src1} alt="productMainImage"/>
                <img className="backImage opacity-0 absolute top-0 left-0" src={src2} alt="productBackImage"/>
                <div className='w-full flex items-center justify-center mt-5 lg:mt-0'>
                    <button className="CartBtn lg:opacity-0 flex w-[140px] h-[40px] rounded-full border-none bg-black bg-opacity-30 items-center justify-center cursor-pointer transition duration-500 overflow-hidden shadow-sm lg:absolute lg:bottom-[10px] left-1/2 transform lg:-translate-x-1/2 animate-[cartBtn]">
                        <span className="IconContainer absolute left-[-50px] w-[30px] h-[30px] bg-transparent rounded-[50%] text-[--black-50] flex items-center justify-center overflow-hidden duration-500"> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="white" className="cart">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
                                </path>
                            </svg>
                        </span>
                        <p className="text h-full w-fit flex items-center justify-center text-[--black-50] duration-500 text-[.8rem] font-semibold">Add to Cart</p>
                    </button>
                </div>
            </div>
            <h3 className="text-center mb-1">{title}</h3>
            <p className="text-center"><span>$</span>{price.toFixed(2)}</p>
        </div>
    )
}

export default Item