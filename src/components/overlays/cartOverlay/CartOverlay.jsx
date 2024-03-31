import React from 'react'
import './cartOverlay.css'



const CartOverlay = ({cartToggle}) => {

    const cartProducts = []

    return (
        <section id="cartOverlay" className="fixed top-0 left-0 w-full h-full z-50 overflow-hidden">
            <div id="cart" className="absolute top-8 sm:top-0 right-0 h-[90%] sm:h-full w-full sm:w-[450px] bg-[--bg]">
                <h2 className="text-center text-4xl sm:text-5xl my-7 sm:ml-4">Shopping Cart</h2>
                <div className="sm:ml-4 flex flex-col justify-between h-[88%] sm:h-[92%]">
                    <div className="flex flex-col gap-5 h-[90%] p-5 overflow-auto" id="cartProductsAdded">
                    {
                        cartProducts.length < 1 && <p className="text-center">Your Cart is Empty</p> 
                    }
                    </div>
                    <section className="cartFooter min-h-fit">
                        <div className="hidden" id="cartFooter">
                            <div className="flex justify-between items-center px-10 py-2">
                                <span>Subtotal</span>
                                <span className="text-lg font-bold">Subtotal</span>
                            </div>
                            <div className="flex justify-between items-center px-10 py-2 mb-3">
                                <span>Taxes</span>
                                <span className="text-lg font-bold">16%</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center w-full mb-10">
                            <button type="button" className="bg-red-400 mainBtn rounded-3xl p-3" id="checkoutBtn">
                                Checkout
                            </button>
                            <button type="button" className="cancelBtn bg-green-400 rounded-3xl" onClick={cartToggle}><span className="text">Close</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default CartOverlay