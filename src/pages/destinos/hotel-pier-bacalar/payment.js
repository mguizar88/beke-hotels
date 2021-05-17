import React from 'react'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'

import image from '../../../img/pier-payment-method.png'
import visa from '../../../img/visa-logo.png'
import mastercard from '../../../img/mastercard-logo.webp'
import paypal from '../../../img/paypal-logo.png'
import clip from '../../../img/logo-clip.svg' 

import Layout from '../../../components/Layout'

const PaymentMethod = class extends React.Component {

    render() {
    
        return (
            <Layout path={this.props.path}>
                <div 
                    className="bg-black bg-opacity-75
                        flex justify-between px-4 sm:px-0"
                > 
                    <div 
                        className="flex m-auto sm:w-2/3 my-8"
                    >
                        <img className="sm:w-1/2 hidden sm:block w-full h-full" src={image} alt="Metodo de pago" />
                        <div 
                            className="sm:w-1/2 w-full text-white rounded-3xl sm:rounded-l-none sm:rounded-r-3xl p-2 sm:p-8"
                            style={{
                                backgroundColor: "#4e8a89"
                            }}    
                        >
                            <div 
                                className="divide-y-2 flex flex-col h-full divide-current"
                                style={{borderColor: "#7ad5d4"}}
                            >
                                <div>
                                    <h1 className="flex flex-col text-5xl sm:text-6xl">
                                        <span className="font-medium">
                                            Formas
                                        </span>
                                        <span className="font-extrabold self-end text-6xl sm:text-7xl">
                                            de pago
                                        </span>
                                    </h1>
                                    <p className="text-center my-6 text-lg sm:text-xl tracking-widest">
                                        Cuenta en pesos mexicanos
                                    </p>
                                </div>
                                <div className="text-2xl flex-grow flex flex-col justify-center">
                                    <p className="my-4 font-semibold">
                                        BBVA México
                                    </p>
                                    <p className="my-4 font-semibold">
                                        OP HOTELERA Y TURISTICA S.A DE C.V.
                                    </p>
                                    <p className="my-4">
                                        Cuenta: <span className="font-extrabold">0114187318</span>
                                    </p>
                                    <p className="my-4">
                                        Clabe: <span className="font-extrabold">012691001141873181</span>
                                    </p>
                                </div>
                                <div className="flex justify-between pt-4 items-center">
                                    <div className="w-20 p-2 border-2 border-white rounded-lg flex justify-center items-center">
                                        <img 
                                            className="h-8"
                                            src={visa} 
                                            placeholder="blurred"
                                            alt="visa"
                                        />
                                    </div>
                                    <div className="w-20 p-2 border-2 border-white rounded-lg flex justify-center items-center">
                                        <img
                                            className="h-8"
                                            src={mastercard} 
                                            placeholder="blurred"
                                            alt="mastercard"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="w-20 p-2 border-2 border-white rounded-lg flex justify-center items-center">
                                        <img className="h-8" src={clip} />
                                    </div>
                                    <div className="w-20 p-2 border-2 border-white rounded-lg flex justify-center items-center">
                                        <img 
                                            className="h-8" 
                                            src={paypal} 
                                            placeholder="blurred"
                                            alt="paypal"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout> 
        )
    }    
}

export default PaymentMethod