import React from 'react'
import { getImage } from 'gatsby-plugin-image'

import image from '../../../img/payment.png' 

const PaymentMethod = class extends React.Component {

    render() {
    
        return (
            <div 
                className="fixed inset-0 bg-black bg-opacity-75
                    z-50 flex justify-between px-4 sm:px-0"
            > 
                <div 
                    ref={this.modalRef} 
                    className="relative flex m-auto"
                >
                    <img className="w-1/2 max-h-screen" src={image} alt="Metodo de pago" />
                    <div 
                        className="w-1/2 text-white rounded-r-3xl p-2 sm:p-8"
                        style={{
                            backgroundColor: "#4e8a89"
                        }}    
                    >
                        <div 
                            className="w-4/5 divide-y-2 flex flex-col h-full divide-current"
                            style={{borderColor: "#7ad5d4"}}
                        >
                            <div>
                                <h1 className="flex flex-col text-5xl sm:text-7xl">
                                    <span className="font-medium">
                                        Formas
                                    </span>
                                    <span className="font-extrabold self-end text-6xl sm:text-8xl">
                                        de pago
                                    </span>
                                </h1>
                                <p className="text-center my-6 text-lg sm:text-2xl tracking-widest">
                                    Cuenta en pesos mexicanos
                                </p>
                            </div>
                            <div className="text-3xl flex-grow flex flex-col justify-center">
                                <p className="my-4 font-semibold">
                                    Banorte México
                                </p>
                                <p className="my-4 font-semibold">
                                    René Gámez Handal
                                </p>
                                <p className="my-4">
                                    Cuenta: <span className="font-extrabold">0296549007</span>
                                </p>
                                <p className="my-4">
                                    Clabe: <span className="font-extrabold">072691002965490077</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }    
}

export default PaymentMethod