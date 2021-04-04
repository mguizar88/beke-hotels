import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import promo from '../img/marzo.png'

const PromoModal = class extends React.Component {

    constructor(props) {
        super(props);

        this.modalRef = React.createRef()
        this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutsideModal)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsideModal)
    }

    handleClickOutsideModal(event) {
        if ( this.modalRef && !this.modalRef.current.contains(event.target)) {
            this.props.handler()
        }
    }

    render() {
        const modalImage = getImage(this.props.image)
        return (
            <div 
                className="fixed inset-0 bg-black bg-opacity-75
                    z-50 flex justify-between"
            > 
                <div 
                    ref={this.modalRef} 
                    className="relative w-4/5 sm:max-w-4xl 
                        m-auto"
                >
                    <button 
                        onClick={this.props.handler}
                        className="absolute top-0 sm:-right-0.5
                            rounded-full bg-yellow-400
                            text-white sm:h-12 sm:w-12 h-8 w-8
                            flex items-center justify-center
                            -right-2"
                    >
                        &times;
                    </button>
                    <img className="w-full " src={promo} alt="Promoción Marzo" />
                    <a 
                        href="https://hotels.cloudbeds.com/es/reservation/a5nfpq?currency=MXN#checkin=2021-11-17&checkout=2021-11-18"
                        target="_Blank" 
                        rel="noreferrer" 
                        className="hover:text-yellow-500 p-2 rounded-md
                          text-white font-bold sm:absolute lg:bottom-28 
                            lg:right-72 sm:bottom-52 sm:right-52
                            text-sm lg:text-base my-4 sm:my-0 text-center
                            shadow-lg"
                        style = {{
                            backgroundColor: '#588518',
                        }}
                    >
                        Reserva Bacalar
                    </a>
                    <a 
                        href="https://hotels.cloudbeds.com/reservation/wastbU?currency=MXN#checkin=2021-11-17&checkout=2021-11-18"
                        target="_Blank" 
                        rel="noreferrer" 
                        className="hover:text-yellow-500 p-2 rounded-md
                          text-white font-bold sm:absolute lg:bottom-28 
                            lg:right-32 sm:bottom-52 sm:right-16
                            text-sm lg:text-base sm:my-0 text-center
                            shadow-lg"
                        style = {{
                            backgroundColor: '#588518',
                        }}
                    >
                        Reserva Holbox
                    </a>
                </div>
            </div> 
        )
    }    
}

export default PromoModal