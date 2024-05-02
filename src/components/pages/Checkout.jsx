import React, { useContext, useState } from 'react'

import { CartContext } from '../../context/CartContext'
import { SweetAlert } from '../../context/SweetAlert'


import { addDoc,collection } from 'firebase/firestore'
import { motion } from 'framer-motion'
import db from '../../db/db'
import validateForm from '../../utils/validationYup'

import PaypalButtons from '../PaypalButtons/PaypalButtons'

const Checkout = () => {

    const {itemQuantity, total, subTotal, cart, emptyCart} = useContext(CartContext)
    const { Modal } = useContext(SweetAlert)

    const [submitButton, setSubmitButton] = useState(false)
    const [formValidated, setFormValidated] = useState(false)
    const [paymentID, setPaymentID] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    
    const [orderForm, setOrderForm] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const handleChangeInput = (event)=>{
        setOrderForm({...orderForm, [event.target.name] : event.target.value})
    }

    const cleanForm = ()=>{
        setOrderForm({name:'',phone:'',email:''})
    }

    const formValidation = async()=>{
        const res = await validateForm(orderForm)

        if(res.status === 'Success'){
            setFormValidated(true)
            setSuccessMessage('All good, you can proceed to payment')
        }else{
            setErrorMessage(res.error)
        }
    }

    const order = {
        user: { ...orderForm },
        products: [...cart],
        total: total().toFixed(2),
    }
    // this uploads the order to firebase
    const uploadOrder = async()=>{
        try {
            const ordersRef = collection(db, 'orders')
            const response = await addDoc(ordersRef, order)
            return response.id
        } catch (error) {
            console.error('Order didn`t uploaded correctly',error)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const orderID = await uploadOrder()
            await Modal.fire({
                title: 'Order placed !',
                html: `
                <div>
                    <p>Order Id: ${orderID}</p>
                    <p>Payment Id: ${paymentID}</p>
                    <p>You paid: $${(order.total).toLocaleString('en-US')}</p>
                </div>
                `,
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: `Awesome !`
            })
            emptyCart()
            cleanForm()
        } catch (error) {
            await Modal.fire({
                title: 'Order failed',
                text: 'We are sorry, it seems the database is unavailable',
                icon: 'Error',
                showCancelButton: false,
                confirmButtonText: `Ok, I'll try again`
            })
        }
    }

    return (
        <motion.div
            initial={{opacity:0, scale:.3, transition:{duration:.2}}} 
            animate={{opacity:1, scale:1, transition:{duration:1}}} 
            exit={{opacity:0, transition:{duration:.5}}}
        >
            <h1 className="mt-16 mb-10 text-4xl md:text-6xl lg:text-7xl title text-center">Check-out</h1>
            <div className="p-10 h-fit relative">
                <div className='mb-10 flex flex-wrap justify-around gap-10'>
                    <div className='text-wrap w-[27rem] flex-grow'>
                        <h2 className='text-lg lg:text-3xl mb-10 underline font-bold'>Your order details:</h2>
                        <p className='text-lg lg:text-3xl mb-5'>Items to purchase: {itemQuantity()}</p>
                        <p className='text-lg lg:text-3xl mb-5'>Subtotal: ${subTotal().toLocaleString('en-US')}</p>
                        <p className='text-lg lg:text-3xl mb-5'>Taxes: 16%</p>
                        <p className='text-lg lg:text-3xl mb-5'>Total: ${total().toLocaleString('en-US')}</p>
                    </div>
                    <div className='w-[27rem] flex-grow'>
                        <h2 className='text-lg lg:text-3xl mb-5 font-bold text-center'>Order contact information</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6 w-full bg-[--black-800] p-4 rounded-3xl dark:bg-transparent">
                                <div className="logContainer relative">
                                    <input value={orderForm.name} onChange={handleChangeInput} className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="text" id="name" name="name" required autoComplete="name" />
                                    <label htmlFor="name" className="absolute top-[.4rem] left-3 text-lg">Name</label>
                                </div>
                                <div className="logContainer relative">
                                    <input value={orderForm.phone} onChange={handleChangeInput} className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="tel" id="phone" name="phone" required autoComplete="tel" />
                                    <label htmlFor="phone" className="absolute top-[.4rem] left-3 text-lg">Phone</label>
                                </div>
                                <div className="logContainer relative">
                                    <input value={orderForm.email} onChange={handleChangeInput} className="w-full h-[40px] rounded-3xl bg-[--black-400] p-1 pl-4" type="email" id="email" name="email" required autoComplete="email" />
                                    <label htmlFor="email" className="absolute top-[.4rem] left-3 text-lg">E-mail</label>
                                </div>
                                {
                                    successMessage !== '' ? 
                                    <p className='text-center font-bold text-green-500'>{successMessage}</p> :

                                    <p className='text-center font-bold text-red-400 dark:text-red-200'>{errorMessage}</p>

                                }
                                {
                                    !formValidated &&
                                    <div className='flex flex-col gap-6'>
                                        <button type='button' onClick={()=> formValidation()} className='w-full font-bold text-white bg-[--black-400] hover:bg-[--black-700] dark:bg-[--black-600] dark:hover:bg-[--black-700] duration-300 rounded-3xl py-2'>Validate</button>
                                        <button onClick={cleanForm} className='w-full text-white bg-[--black-400] hover:bg-[--black-700] dark:bg-[--black-600] dark:hover:bg-[--black-700] duration-300 rounded-3xl py-1'>Clear</button>
                                    </div>
                                }
                            </div>
                            {
                                submitButton && 
                                <button type='submit' className='absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] mt-14 font-bold text-white bg-[--black-400] hover:bg-[--black-700] dark:bg-[--black-600] dark:hover:bg-[--black-700] duration-300 rounded-3xl py-3'>Submit Order</button>
                            }
                        </form>
                    </div>
                </div>
                {
                    formValidated &&
                    <div>
                        <p className='text-lg lg:text-3xl my-10 dark:text-amber-600 text-black'>Pay with: </p>
                        <PaypalButtons setSubmitButton={setSubmitButton} setPaymentID={setPaymentID} orderForm={orderForm} setOrderForm={setOrderForm} />
                    </div>
                }
                {
                    !submitButton && (
                    <p className='mt-10 text-sm text-center'>You can Submit the order after you pay and all inputs are filled</p>)
                }
            </div>
        </motion.div>
    )
}

export default Checkout