import { navigate } from "gatsby-link"
import React, { useContext, useEffect, useState } from "react"
import { IdentityContext } from "../context/identity-context"
import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CouponGenerator from "../components/CouponGenerator"

const pierStripePromise = loadStripe("pk_test_51IsAMWE8SYEYoR9ccLNDzw0Q0IdHk8a0gDvbtmIRKTWITqyT33r9cwGySPak1Eo9Bt5hZxBXgNNkC5z3QmQrOUoK00OtGiE67D")

const cmStripePromise = loadStripe("pk_test_51JbuRUHHUTVOmDBdJozja5rwaATEOkMCKYUdTpbCZLmlqKrj4VvEqRyQVogeKZ0K1EuWYrY2JvAWBsXfwxs1w17O00SY2x95zC")

const App = (props) => {  

    const hotelDropdown = React.createRef()

    const ElementsWrapperRef = React.createRef()

    const [userOptionsIsActive, setUserOptions] = useState()

    const [currentUser, setCurrentUser] = useState('')

    const [hotelSelectState, setHotelSelectState] = useState()

    const [hotelSelected, setHotelSelected] = useState('Casa Maya')

    const [publishableKey, setPublishableKey] = useState()

    const { identity: netlifyIdentity, user } = useContext(IdentityContext)

    useEffect(() => {
        setCurrentUser(user)
    })

    const logout = () => {
        netlifyIdentity.logout();  
    }

    useEffect(() => {
        if(!user) {
            navigate(`/login/`)
        }
    })

    const CouponForm = ({hotel}) => {
        const hotelSelected = hotel
        if ( hotelSelected === "Pier" ) {
            return <Elements stripe={pierStripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <CouponGenerator stripe={stripe} elements={elements} setPublishableKey={setPublishableKey} hotelSelected={hotelSelected} />
                    )}
                </ElementsConsumer>    
            </Elements>
        }
        if ( hotelSelected === "Casa Maya" ) {
            return <Elements stripe={cmStripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <CouponGenerator stripe={stripe} elements={elements} setPublishableKey={setPublishableKey} hotelSelected={hotelSelected} />
                    )}
                </ElementsConsumer>    
            </Elements>
        }
        return null
    }

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
                            { currentUser? currentUser.user_metadata.full_name : '' }
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>

                    <div className="origin-top-left absolute left-0 w-auto mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
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
                    
                <div className="p-8 grid grid-cols-3 gap-4">

                    <div className="col-span-1 p-8 bg-gray-900 border-2 border-black rounded-2xl shadow-xl">
                        <label id="listbox-label" className="block text-sm font-medium text-white">
                            Hotel
                        </label>
                        <div className="mt-1 relative">
                            <button name="hotel" onClick={() => setHotelSelectState(!hotelSelectState)} type="button" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm mb-2"  aria-expanded="true">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate text-gray-900">
                                    { hotelSelected }
                                </span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                
                                <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                            </button>
                            { 
                                hotelSelectState&&
                                    <ul ref={hotelDropdown} className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                                        <li onClick={ () => setHotelSelected( "Pier" ) } className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                            <div className="flex items-center">
                                            <span className="font-normal ml-3 block truncate">
                                                Pier
                                            </span>
                                            </div>
                                            <span className="text-gray-700 absolute inset-y-0 right-0 flex items-center pr-4">
                                            
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            </span>
                                        </li>
                                        <li onClick={ () => setHotelSelected( "Casa Maya" ) } className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                            <div className="flex items-center">
                                            <span className="font-normal ml-3 block truncate">
                                                Casa Maya
                                            </span>
                                            </div>
                                            <span className="text-gray-700 absolute inset-y-0 right-0 flex items-center pr-4">
                                            
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            </span>
                                        </li>
                                    </ul>
                            }
                        </div>
                    </div>
                    {                
                        hotelSelected&&     
                        <CouponForm hotel={hotelSelected} />
                    }
                </div>
            </div>
        </div>
    )

}

export default App