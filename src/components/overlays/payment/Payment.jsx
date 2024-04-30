import React, {useContext} from 'react'
import { CartContext } from '../../../context/CartContext'
import { SweetAlert } from '../../../context/SweetAlert'

const Payment = ({toggle}) => {

    const {total, itemQuantity} = useContext(CartContext)


    return (
        <section className="fixed top-0 left-0 w-full h-full z-[1000] overflow-hidden">
            <div className="logOverlay fixed top-0 left-0 w-full h-full z-50">
                <div className="logFormContainer bg-[--bg] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 px-10 pb-16 pt-12 rounded-3xl w-[90%] max-h-[90%] overflow-auto">
                    <div className="flex flex-wrap justify-between items-center gap-10">
                        <button onClick={toggle} className="absolute top-7 right-8 hover:scale-125 hover:rotate-180 transition duration-500 ease-in-out">
                            <span><svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f6f6f6"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                        </button>
                        <div className="flex flex-col gap-10 w-full">
                            <p className="text-3xl lg:text-5xl text-center">Check Out</p>
                            <p className="text-xl">Number of items: <span>{itemQuantity()}</span></p>
                            <p className="text-xl">Amount to pay: <strong>$ {total().toLocaleString('en-US')}</strong></p>
                            <p>Pay with:</p>
                        </div>
                        <div id="paypalButtons" className="w-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment