import React, { useState } from 'react'


const ProductAdded = ({img,title,price, quantity, stock}) => {

    const [itemQuantity, setItemQuantity] = useState(quantity)

    const add = ()=>{
        itemQuantity < stock && setItemQuantity(itemQuantity + 1)
    }
    const subtract = ()=>{
        itemQuantity > 1 && setItemQuantity(itemQuantity -1)
    }

    return (
        <div className="w-full bg-[--black-500] rounded-3xl relative p-5 father">
            <img src={img} alt="img" className="w-auto h-[100px] rounded-3xl"/>
            <div className="flex items-center gap-2 w-fit rounded-full border-none bg-black bg-opacity-30 px-3 py-2 absolute right-5 top-5">
                    <button className="text-[--black-50] outline outline-1 outline-white h-[22px] rounded-3xl px-[.29rem]" onClick={subtract}>-</button>
                    <span className="font-bold text-[--black-50]">{itemQuantity}</span>
                    <button className="text-[--black-50] outline outline-1 outline-white h-[22px] rounded-3xl px-[.29rem]" onClick={add}>+</button>
                </div>
            <p className="absolute left-[8.3rem] top-6 text-[--black-50] productTitle w-[160px]">{title}</p>
            <p className="absolute left-[8.3rem] bottom-6 text-[--black-50]">${price.toLocaleString('en-US')}</p>
            <p className="absolute left-[13rem] bottom-6 text-[--black-50]">Total ${(price*itemQuantity).toLocaleString('en-US')}</p>
            <button className="bin-button absolute right-5 bottom-5">
                <svg className="bin-top" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
                    <line x1="12" y1="1.5" x2="26.0357" y2="1.5" stroke="white" strokeWidth="3"></line>
                </svg>
                <svg className="bin-bottom" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_8_19" fill="white">
                        <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                    </mask>
                    <path d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" fill="white" mask="url(#path-1-inside-1_8_19)"></path>
                    <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                    <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                </svg>
            </button>
        </div>
    )
}

export default ProductAdded