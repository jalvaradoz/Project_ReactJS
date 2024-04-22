import { createContext, useState } from 'react'
import { useContext } from 'react'
import { SweetAlert } from './SweetAlert'

const CartContext = createContext()

const CartProvider = ({children})=>{

    const { Toast } = useContext(SweetAlert)

    const [cart,setCart] = useState([])

    const isInCart = (productId)=>{
        const conditional = cart.some((prod)=> prod.id === productId)

        return conditional
    }

    const addToCart = (newProduct)=>{

        const condition = isInCart(newProduct.id)

        if(condition) {
            const productsMod = cart.map((pCart)=>{
                if(pCart.id === newProduct.id){
                    return{...pCart, quantity:pCart.quantity + newProduct.quantity}
                }else{
                    return pCart
                } 
            }) 
            Toast.fire({ icon: "success", title: `Another ${newProduct.name} was added to the cart!` })
            setCart(productsMod)
        }else{
            Toast.fire({ icon: "success", title: `${newProduct.name} added to the cart!` })
            setCart([...cart,newProduct])
        }
        
    }

    const emptyCart = ()=>{
        setCart([])
    }

    const itemQuantity = () => {
        return cart.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    }
    

    return(
        <CartContext.Provider value={{cart, addToCart, itemQuantity, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}