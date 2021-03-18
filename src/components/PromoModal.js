import React, { Component } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
                    flex justify-center  
                    content-center z-50"
            > 
                <div ref={this.modalRef} className="relative">
                    <GatsbyImage image={modalImage} />
                    <a 
                        href="https://hotels.cloudbeds.com/es/reservation/a5nfpq?currency=MXN#checkin=2021-11-17&checkout=2021-11-18"
                        target="_Blank" 
                        rel="noreferrer" 
                        className="hover:text-yellow-500 
                        text-white font-bold"
                        style = {{
                            backgroundColor: '#588518',
                        }}
                    >
                        Reserva Bacalar
                    </a>
                </div>
            </div> 
        )
    }    
}

export default PromoModal