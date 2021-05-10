import React from 'react'
import { getImage } from 'gatsby-plugin-image'

import image from '../../../img/formas-de-pago.png'

const PaymentMethod = class extends React.Component {

    render() {
    
        return (
            <div 
                className="fixed inset-0 bg-black bg-opacity-75
                    z-50 flex justify-between px-4 sm:px-0"
            > 
                <div 
                    ref={this.modalRef} 
                    className="relative md:w-4/5 lg:w-4/5 sm:max-w-4xl 
                        m-auto"
                >
                    <img className="w-full" src={image} alt="Metodo de pago" />
                    
                </div>
            </div> 
        )
    }    
}

export default PaymentMethod