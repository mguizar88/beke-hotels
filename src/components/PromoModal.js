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
                    z-50 flex justify-between px-4 sm:px-0"
            > 
                <div 
                    ref={this.modalRef} 
                    className="relative md:w-4/5 lg:w-3/5 sm:max-w-4xl 
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
                    <img className="w-full" src={promo} alt="Promoción Marzo" />
                    <div 
                        className="flex justify-between my-2 p-2 rounded-xl flex-col sm:flex-row" 
                        style={{backgroundColor: '#fff1db'}}
                    >
                        <a 
                            href="https://hotels.cloudbeds.com/es/reservation/a5nfpq?currency=MXN#checkin=2021-11-17&checkout=2021-11-18"
                            target="_Blank" 
                            rel="noreferrer" 
                            className="hover:text-yellow-500 p-2 rounded-md
                              text-white font-bold text-sm lg:text-base my-1 
                                sm:my-0 text-center shadow-lg"
                            style = {{
                                backgroundColor: '#588518',
                            }}
                        >
                            Reserva Pier Bacalar
                        </a>
                        <a 
                            href="https://hotels.cloudbeds.com/reservation/wastbU?currency=MXN#checkin=2021-11-17&checkout=2021-11-18"
                            target="_Blank" 
                            rel="noreferrer" 
                            className="hover:text-yellow-500 p-2 rounded-md
                              text-white font-bold text-sm lg:text-base my-1 
                                sm:my-0 text-center shadow-lg"
                            style = {{
                                backgroundColor: '#588518',
                            }}
                        >
                            Reserva Casa Maya Holbox
                        </a>
                        <a 
                            href="https://portal.freetobook.com/reservations?w_id=41469&w_tkn=2PaI8yGsXA5jLBS7S9TwDgX5se9b8GQ0Clb2zSxMcQNw0NJ6fWHwOfwXfpnRn&check_in_date=&check_out_date=&stay_length=NaN"
                            target="_Blank" 
                            rel="noreferrer" 
                            className="hover:text-yellow-500 p-2 rounded-md
                                font-bold text-sm lg:text-base text-white
                                sm:my-0 my-1 text-center shadow-lg"
                            style = {{
                                backgroundColor: '#588518',
                            }}
                        >
                            Reserva XO Bacalar
                        </a>
                    </div>
                </div>
            </div> 
        )
    }    
}

export default PromoModal