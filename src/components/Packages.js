import React from 'react'

import adventure from '../img/aventura.png'
import romance from '../img/escapada-romantica.png'

const Packages = class extends React.Component {

    constructor(props) {
        super(props);

        this.ref = React.createRef()
        this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this)
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutsideModal)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsideModal)
    }

    handleClickOutsideModal(event) {
        if ( this.ref && !this.ref.current.contains(event.target)) {
            this.props.handler()
        }
    }
    
    render() {
        
        return (
            <div 
                className="fixed inset-0 bg-black bg-opacity-75
                    z-50 flex justify-between px-4 sm:px-0"
            > 
                <div 
                    ref={this.ref} 
                    className="relative md:w-4/5 lg:w-2/5 sm:max-w-4xl 
                        m-auto flex"
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
                    <img className="w-1/2" src={adventure} alt="Adventure package" />
                    <img className="w-1/2" src={romance} alt="Romance package" />
                </div>
            </div> 
        )
    }    
}

export default Packages