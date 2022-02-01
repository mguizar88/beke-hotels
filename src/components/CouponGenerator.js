import React, {useState, useEffect} from 'react'

const CouponGenerator = (props) => {

    const stripe = props.stripe
    
    const setPublishableKey = props.setPublishableKey
    
    const hotelSelected = props.hotelSelected
   
    const [clientSecret, setClientSecret] = useState()

    const [message, setMessage] = useState()

    const [customerName, setCustomerName] = useState('')
    
    const [customerEmail, setCustomerEmail] = useState('')

    const [amount, setAmount] = useState('')

    const createPaymentIntent = async (event) => {
        event.preventDefault()

        let response, data
        
        try{
            response = await fetch('/payment/api/create-payment-intent', {
                method: "POST",
                body: JSON.stringify({
                    amount: amount,
                    hotelSelected: hotelSelected
                }),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
            data = await response.json()
            
            setIntentData( data )
            
        } catch (error) {
            console.error(error.message)
            return
        }
        
    }

    const completeOxxoPayment = async (event) => {
        event.preventDefault()
        let result
        const name = customerName
        const email = customerEmail
        try {
            result = await stripe.confirmOxxoPayment(
                clientSecret,
                {
                    payment_method: {
                        billing_details: {
                            name,
                            email
                        }
                    }
                }
            )
        } catch (error) {
            console.error(error.message)
            return
        }

    }

    const setIntentData = ( data ) => {
        setClientSecret( data.clientSecret )
        //setPublishableKey( data.publishableKey )
        setMessage( data.message )
    }

    return (
        <div className="col-span-1 p-8 bg-gray-900 border-2 border-black rounded-2xl shadow-xl">
            <h2 className="text-center text-2xl mb-4">{ hotelSelected } Oxxo Payments</h2>
            {
                !clientSecret && 
                <>
                    <form onSubmit={createPaymentIntent} className="flex flex-col">
                    
                        <input 
                            value={amount}
                            onChange={e => {
                                setAmount(e.currentTarget.value)
                            }}
                            name="amount"
                            type="text"
                            className="mb-4 p-4 rounded-lg 
                                text-gray-900" 
                            placeholder="Monto" 
                        />
                        <button className="bg-gray-700 ring-4 ring-gray-500 p-1 rounded-lg">
                            Generar pago
                        </button>
                    </form>
                </>
            }
            {
                clientSecret &&
                    <>
                        <form onSubmit={completeOxxoPayment} className="flex flex-col">
                            <input 
                                value={customerName}
                                onChange={e => setCustomerName(e.currentTarget.value)}
                                name="name"
                                type="text"
                                className="mb-4 p-4 rounded-lg 
                                    text-gray-900" 
                                placeholder="Nombre completo" 
                            />
                            <input 
                                value={customerEmail}
                                onChange={e => setCustomerEmail(e.currentTarget.value)}
                                name="email"
                                type="text"
                                className="mb-4 p-4 rounded-lg 
                                    text-gray-900" 
                                placeholder="E-mail" 
                            />
                            <button className="bg-gray-700 ring-4 ring-gray-500 p-1 rounded-lg">
                                Enviar pago
                            </button>
                        </form>
                    </>
            }
        </div>     

    )
} 

export default CouponGenerator