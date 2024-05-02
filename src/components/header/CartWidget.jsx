import { useState,useContext } from "react"

import { motion, AnimatePresence } from 'framer-motion'
import { CartContext } from "../../context/CartContext"

import CartOverlay from "../overlays/cartOverlay/CartOverlay"

const CartWidget = () => {

    const { itemQuantity } = useContext(CartContext)
    const [showOverlay, setShowOverlay] = useState(false)

    const toggleOverlay = ()=>{
        setShowOverlay(!showOverlay)
    }

    const quantity = itemQuantity()

    return (
        <>
            <button onClick={toggleOverlay} className="userIcon cartIcon absolute">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
                {
                    quantity > 0 && <span className="text-[.65rem] bg-[--black-400] rounded-full py-[.20rem] px-[.40rem] absolute -bottom-1 left-0">{ quantity }</span>
                }
                
            </button>
            <AnimatePresence>
                {
                    showOverlay && 
                    <motion.div exit={{opacity:0}} transition={{duration:.3}}>
                        <CartOverlay toggleOverlay={toggleOverlay}/>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default CartWidget