import React from 'react'

const ItemDetailContainer = ({img,img2, title, price, details, stock, toggleView, count, handleAddToCart, setCount}) => {

    const add = ()=>{
        count < stock && setCount(count + 1)
    }
    const subtract = ()=>{
        count > 1 && setCount(count -1)
    }


    return (
        <div className='z-[80] h-full w-full logOverlay fixed top-0 left-0 '>
            <div className='absolute bg-[--bg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit max-h-[85%] min-w-[60%] w-[90%] md:w-fit rounded-3xl p-10 overflow-y-auto'>
                <h1 className='text-center text-lg md:text-2xl lg:text-3xl'>{title}</h1>
                <div className='flex flex-wrap gap-3 md:gap-10 justify-center w-full my-10'>
                    <div className='w-fit h-fit overflow-hidden rounded-3xl'>
                        <img className='rounded-3xl w-[100px] md:w-[200px] hover:scale-150 duration-500 ease-in-out' src={img} alt="mainImage" />
                    </div>
                    <div className='w-fit h-fit overflow-hidden rounded-3xl'>
                        <img className='rounded-3xl w-[100px] md:w-[200px] hover:scale-150 duration-500 ease-in-out' src={img2} alt="secondaryImage" />
                    </div>
                </div>
                <p className='tracking-wide leading-relaxed text-sm md:text-base'>{details}</p>
                <div className='w-full flex flex-wrap gap-5 justify-around items-center mt-6'>
                    <p className='font-bold text-lg'>$ {price}</p>
                    <div className="flex items-center gap-3 w-fit rounded-full border-none bg-black bg-opacity-30 px-4 py-2">
                        <button className="text-white outline outline-1 outline-white h-[22px] rounded-3xl px-[.29rem]" onClick={subtract}>-</button>
                        <span className="font-bold text-[--black-50]">{stock===0 ? stock : count}</span>
                        <button className="text-white outline outline-1 outline-white h-[22px] rounded-3xl px-[.29rem]" onClick={add}>+</button>
                    </div>

                    {
                        stock === 0 ? <button className='text-red-300 font-bold bg-black bg-opacity-30 w-[140px] h-[40px] rounded-3xl pointer-events-none'>No Stock</button> :

                        <button onClick={()=> {handleAddToCart(count); toggleView()}} className="CartBtn flex w-[140px] h-[40px] rounded-full border-none bg-black bg-opacity-30 items-center justify-center cursor-pointer transition duration-500 overflow-hidden shadow-sm  transform animate-[cartBtn]">
                            <span className="IconContainer absolute left-[-50px] w-[30px] h-[30px] bg-transparent rounded-[50%] text-[--black-50] flex items-center justify-center overflow-hidden duration-500"> 
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="white" className="cart">
                                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
                                    </path>
                                </svg>
                            </span>
                            <p className="text h-full w-fit flex items-center justify-center text-[--black-50] duration-500 text-[.8rem] font-semibold">Add to Cart</p>
                        </button>
                    }
                </div>
                <button onClick={toggleView} className="absolute top-5 md:top-7 right-4 md:right-8 hover:scale-125 hover:rotate-180 transition duration-500 ease-in-out">
                    <span><svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f6f6f6"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                </button>
            </div>
        </div>
    )
}

export default ItemDetailContainer