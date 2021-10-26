const env = require('dotenv').config()
//const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY)

let message
const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

const loadStripe = hotel => {
    if(hotel === "Pier") return require('stripe')(process.env.PIER_STRIPE_SECRET_KEY)
    if(hotel === "Casa Maya") return require('stripe')(process.env.CASAMAYA_STRIPE_SECRET_KEY)
}

const getPublishableKey = hotel => {
    if(hotel === "Pier") return process.env.PIER_STRIPE_PUBLISHABLE_KEY
    if(hotel === "Casa Maya") return process.env.CASAMAYA_STRIPE_PUBLISHABLE_KEY
}

const createPaymentIntent = async (amount, hotel) => {
    console.log(hotel)
    const stripe = loadStripe(hotel)
    console.log(stripe)
    const publishableKey = getPublishableKey(hotel)
    let paymentIntent
    const convertedAmount = amount * 100
    try{
        paymentIntent = await stripe.paymentIntents.create({
            amount: convertedAmount.toString(),
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

    return createPaymentIntent( body.amount, body.hotelSelected )

}