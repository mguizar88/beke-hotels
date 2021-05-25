const stripe = require('stripe')('sk_test_51IsAMWE8SYEYoR9cr5tdkrgDgW2VdHIH8eIujE9ZS6npWrlHvIf30y4uCclSuKF3eyctMwD25QXjv6KD51Jw5aro006jr55wSy')

let message
const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

const validateHttpMethod = (method) => {
    if( method !== "POST" ) {
        message = "The request must be a GET request"
        return res(message)
    }
}

const validateBodyParams = ( bodyObject ) => {
    if ( !bodyObject.amount ) {
        message = "Amount is not defined"
        return res(message)
    }
}

const createPaymentIntent = async (event) => {
    validateHttpMethod( event.httpMethod )

    const body = JSON.parse( event.body )

    validateBodyParams( body )

    let paymentIntent

    try{
        paymentIntent = await stripe.paymentIntents.create({
            amount: body.amount,
            currency: 'mxn',
            payment_method_types: ['oxxo']
        })
    } catch (error) {
        console.error(error.message)
        res(error.message)
    }
    message = "Pago procesado correctamente"
    
    return res( message, paymentIntent )
    
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
            clientSecret: clientSecret
        })
    }
}

module.exports.handler = async function(event, context) {

    return createPaymentIntent( event )

}