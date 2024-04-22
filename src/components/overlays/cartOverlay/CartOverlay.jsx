import './cartOverlay.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import ProductAdded from '../../itemsListContainer/ProductAdded'

const CartOverlay = ({toggleOverlay}) => {

    const{ cart, emptyCart } = useContext(CartContext)


    return (
        <div id="cartOverlay" className="fixed top-0 left-0 w-full h-full z-[100] overflow-hidden">
            <div id="cart" className="absolute top-8 sm:top-0 right-0 h-[90%] sm:h-full w-full sm:w-[450px] bg-[--bg]">
                <h2 className="text-center text-4xl sm:text-5xl my-7 sm:ml-4">Shopping Cart</h2>
                <div className="sm:ml-4 flex flex-col justify-between h-[88%] sm:h-[92%]">
                    <div className="flex flex-col gap-5 h-[75%] p-5 overflow-auto">
                    {
                        cart.map((product)=>(
                            <ProductAdded key={product.id} img={product.image1} title={product.name} price={product.price} quantity={product.quantity} stock={product.stock}/>
                        ))
                    }
                    </div>
                    <button onClick={emptyCart} className=' bg-[--black-500] rounded-3xl p-2 hover:bg-[--black-600] active:scale-95 duration-150'>Clear Cart</button>
                    <section className="cartFooter min-h-fit">
                        <div>
                            <div className="flex justify-between items-center px-10 py-2">
                                <span>Subtotal</span>
                                <span className="text-lg font-bold">Subtotal</span>
                            </div>
                            <div className="flex justify-between items-center px-10 py-2 mb-3">
                                <span>Taxes</span>
                                <span className="text-lg font-bold">16%</span>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center w-full mb-10">
                            <button type="button" className="mainBtn rounded-3xl p-3">
                                Checkout
                            </button>
                            <button type="button" className="cancelBtn rounded-3xl" onClick={toggleOverlay}><span className="text">Close</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CartOverlay