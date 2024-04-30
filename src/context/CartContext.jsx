import { createContext, useState, useContext } from 'react'
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
        Toast.fire({icon: "info", title: 'Cart cleaned'})
        setCart([])
    }

    const deleteProduct = (id) =>{
        const productFilter = cart.filter((productCart)=> productCart.id !== id)
        Toast.fire({icon: "info", title: 'Product removed'})
        setCart(productFilter)
    }

    const updateProductQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const subTotal = ()=>{
        const priceXquantity = cart.reduce((total, product)=> total + (product.quantity * product.price),0)
        return priceXquantity
    }

    const total = ()=>{
        const subTotalXTaxes = subTotal() * 1.16
        return subTotalXTaxes
    }

    const itemQuantity = () =>  cart.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)

    return(
        <CartContext.Provider value={{cart, addToCart, itemQuantity, emptyCart, deleteProduct, subTotal, updateProductQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}