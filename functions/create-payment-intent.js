const env = require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let message
const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

const createPaymentIntent = async (amount) => {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY
    let paymentIntent
    try{
        paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'mxn',
            payment_method_types: ['oxxo']
        })
    } catch (error) {
        console.error(error.message)
        res(error.message)
    }
    message = "Pago creado correctamente"
    
    return res( message, paymentIntent, publishableKey )
    
}

const res = (message = '', paymentIntent = null, publishableKey = null) => {
    let clientSecret = null
    if (paymentIntent !== null) {
        clientSecret = paymentIntent.client_secret
    }
    return {
        statusCode,
        headers,
        body: JSON.stringify({
            message,
            clientSecret: clientSecret,
            publishableKey
        })
    }
}

module.exports.handler = async function(event, context) {

    if( event.httpMethod !== "POST" ) {
        message = "The request must be a GET request"
        return res(message)
    }

    const body = JSON.parse( event.body )

    if ( !body.amount ) {
        message = "Amount is not defined"
        return res(message)
    }

    return createPaymentIntent( body.amount )

}