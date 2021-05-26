import { navigate } from "gatsby-link"
import React, { useContext, useEffect, useState } from "react"
import { IdentityContext } from "../context/identity-context"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const App = (props) => {

    const [userOptionsIsActive, setUserOptions] = useState()

    const { user, identity: netlifyIdentity } = useContext(IdentityContext)

    const createPaymentIntent = async () => {
        let response, data

        try{
            response = await fetch('http://localhost:8888/payment/api/create-payment-intent', {
                method: "POST",
                body: JSON.stringify({
                    amount: 1000
                }),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
            data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error.message)
            return
        }
        
    }

    const logout = () => {
        netlifyIdentity.logout();  
    }

    useEffect(() => {
        if(!user) {
            navigate(`/login/`)
        }
        createPaymentIntent()

    })

    return(
        <div className="grid grid-cols-5 grid-rows-1 grid-flow-col min-h-screen text-white">
            <div 
                className="col-span-1 row-span-1 p-8 
                bg-gray-900 flex items-center flex-col
                border-2 border-black"
            >
                <div className="bg-beke rounded-full w-24 h-24 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                
                <div className="relative inline-block text-left my-4">
                    <div>
                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            { user? user.email : '' }
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>

                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1">
                            <button 
                                onClick={logout}
                                className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>

                </div>

                <div className="">
                    <button>Oxxo Payments</button>
                </div>

            </div>
            <div className="col-span-4 bg-gray-800">
                <div className="bg-gray-900 p-4 border-2 border-black">
                    <p className="font-extralight text-2xl text-center">Dashboard</p>
                </div>
                <div className="p-8 grid grid-cols-3">
                    <div className="col-span-1 p-8 bg-gray-900 border-2 border-black rounded-2xl shadow-xl">
                        <h2 className="text-center text-2xl mb-4">Oxxo Payments</h2>
                        <form className="flex flex-col">
                            <input className="mb-4 p-4 rounded-lg text-gray-900" placeholder="Monto" />
                            <button className="bg-gray-700 ring-4 ring-gray-500 p-1 rounded-lg">
                                Generar pago
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default App