import React, { useContext } from 'react'

import { PayPalButtons } from '@paypal/react-paypal-js'

import { CartContext } from '../../context/CartContext'
import { SweetAlert } from '../../context/SweetAlert'

const PaypalButtons = ({setSubmitButton, setPaymentID, orderForm, setOrderForm}) => {

    const { cart, total } = useContext(CartContext)
    const { Modal } = useContext(SweetAlert)

    const productDescription = ()=>{
        const description = cart.map((p)=>p.name)
        const descriptionString = description.join(', ')
        return descriptionString
    }
    // this sets the product or products to buy to send to PayPal and the cx can have that information on the when they check the transaction
    const product = {
        description: productDescription(),
        price: total().toFixed(2)
    }

    return <PayPalButtons 
        style={{
            layout: 'vertical', 
            color: 'black', 
            shape: 'pill', 
            label:  'paypal',
            disableMaxWidth: true,
        }}
        createOrder={(data,actions)=>{
            return actions.order.create({
                purchase_units:[
                    {
                        description: product.description,
                        amount:{
                            value: product.price
                        }
                    }
                ]
            })
        }}
        onApprove={async(data, actions)=>{
            await actions.order.capture()
            .then(async()=>{
                await Modal.fire({
                    title: 'Payment Successful !',
                    text: `Payment ID: ${data.paymentID}`,
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: `Great !`
                })
                setSubmitButton(true);
                setOrderForm({...orderForm, paymentId: data.paymentID})
                setPaymentID(data.paymentID)
            })
        }}
        onCancel={(data)=>{
            Modal.fire({
                title: 'Transaction Canceled',
                text: `Transaction ID: ${data.orderID}, (no payment was processed)`,
                icon: 'info',
                showCancelButton: false,
            })
        }}
        onError={async()=>{
            await Modal.fire({
                title: 'Something went wrong',
                text: 'Please try again',
                icon: 'error',
                showCancelButton: false,
            })
        }}
    />
}

export default PaypalButtons