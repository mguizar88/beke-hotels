import React from 'react'
import { Link } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'

const MobileNav = class extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            destinationsActive: false,
            destinationsActiveClass: 'h-0',
        }
        this.subLinksHandler = this.subLinksHandler.bind(this)
    }

    componentWillUnmount() {
        this.setState({
            destinationsActive: false,
            destinationsActiveClass: 'h-0',
        })
    }

    subLinksHandler (event) {
                
        this.setState({
            destinationsActive: !this.state.destinationsActive
        },
            () => {
                this.state.destinationsActive
                ? this.setState({
                    destinationsActiveClass: 'h-full'
                })
                : this.setState({
                    destinationsActiveClass: 'h-0'
                })
            }
        )
       
    }

    render() {
        
        return(
            <>
                <div className={`${this.state.destinationsActiveClass}
                    transition-all bg-gradient-to-b 
                    from-gray-900 to-beke flex duration-500
                    flex-col overflow-y-hidden px-16 fixed
                    z-30 bottom-0 left-0 justify-center`}
                >   
                    <Link 
                        className="relative flex h-28
                            items-center justify-center my-4"
                        to="/destinos/hotel-pier-bacalar/"
                    >
                        <StaticImage 
                            className="rounded-xl w-full h-full"
                            src="../img/duck.jpg"
                            alt="Hotel Pier Bacalar"
                            placeholder="blurred"
                            layout="constrained"
                        />
                        <h2 
                            className="text-white absolute
                            bg-black opacity-70 p-4 rounded-xl
                            "
                        >
                            Pier Bacalar - All Inclusive
                        </h2>
                    </Link>
                    
                    <Link
                        className="relative flex h-28
                        items-center justify-center my-4"
                        to="/destinos/hotel-casa-maya-holbox/"
                    >
                        <StaticImage 
                            className="rounded-xl w-full h-full"
                            src="../img/casa-maya-portafolio.png"
                            alt="Hotel Casa Maya"
                            placeholder="blurred"
                            layout="constrained"
                        />
                        <h2 
                            className="text-white absolute
                            bg-black opacity-70 p-4 rounded-xl
                            "
                        >
                            Casa Maya Holbox
                        </h2>
                    </Link>

                    <Link
                        className="relative flex h-28
                        items-center justify-center my-4"
                        to="/destinos/hotel-xo-bacalar/"
                    >
                        <StaticImage 
                            className="rounded-xl w-full h-full"
                            src="../img/XO-5.jpg"
                            alt="Hotel Casa Maya"
                            placeholder="blurred"
                            layout="constrained"
                        />
                        <h2 
                            className="text-white absolute
                            bg-black opacity-70 p-4 rounded-xl
                            "
                        >
                            XO Bacalar
                        </h2>
                    </Link>
                    
                </div>
                <nav 
                    className="grid grid-cols-5 text-white 
                    bg-gray-900 z-50 h-16 fixed bottom-0 
                    w-full"
                >
                    <Link
                        to="/"
                        className="flex flex-col items-center justify-items-center p-2 text-sm"
                    > 
                        <svg className="fill-current text-white w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Inicio
                    </Link>
                    <button
                        onClick={this.subLinksHandler}
                        id="destinations"
                        className="group flex flex-col items-center 
                            justify-items-center p-2 text-sm"
                    >
                        <svg className="fill-current text-white w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Destinos
                    </button>
                    <button
                        className="flex flex-col items-center justify-items-center p-2 text-sm"
                    >
                        <svg className="fill-current text-white w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                        </svg>
                        Tours
                    </button>
                    <button className="flex flex-col items-center justify-items-center p-2 text-sm">
                        <svg className="fill-current text-white w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                        </svg>
                        Paquetes
                    </button>
                    <button 
                        onClick={this.props.reservationBarHandler}
                        className="flex flex-col items-center 
                            justify-items-center p-2 text-sm"
                    >
                        <svg className="fill-current text-white w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Reservar
                    </button>
                </nav>
            </>
        )
    }

}

export default MobileNav