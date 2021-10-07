import React, {useEffect, useState} from 'react'
import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import CouponGenerator from './CouponGenerator';
import { unmountComponentAtNode } from 'react-dom';

const ElementsWrapper = ({loadedStripe, children, publishableKey, setPublishableKey, hotelSelected}) => {

    const [stripeState, setStripeState] = useState(null)

    useEffect(() => {
        if (stripeState) {
            setStripeState(loadedStripe)
        }
        return () => setStripeState(null)
    },[stripeState])

    return (
        <Elements stripe={stripeState}>
            <ElementsConsumer>
                {({elements, stripe}) => (
                    <CouponGenerator stripe={stripe} elements={elements} publishableKey={publishableKey} setPublishableKey={setPublishableKey} hotelSelected={hotelSelected} />
                )}
            </ElementsConsumer>    
        </Elements>
    )
}

export default ElementsWrapper
