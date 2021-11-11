import React from 'react'

const Reservation = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hotel: 'pier',
            checkin: '',
            checkout: '',
        }

        this.hotelChangeHandler = this.hotelChangeHandler.bind(this)
        this.checkinChangeHandler = this.checkinChangeHandler.bind(this)
        this.checkoutChangeHandler = this.checkoutChangeHandler.bind(this)
        this.callBookingEngine = this.callBookingEngine.bind(this)
    }

    hotelChangeHandler(event) {
        this.setState({hotel: event.target.value})
    }

    checkinChangeHandler(event) {
        this.setState({checkin: event.target.value})
    }

    checkoutChangeHandler(event) {
        this.setState({checkout: event.target.value})
    }

    callBookingEngine(event) {
        event.preventDefault()
        if(this.state.hotel === 'xo') {
            const daysBetween = this.getDaysBetween(this.state.checkin, this.state.checkout)
            window.open(`https://direct-book.com/properties/xohotelbacalardirect?locale=es&currency=MXN&checkInDate=${this.state.checkin}&checkOutDate=${this.state.checkout}`, "_BLANK")
            return 
        }
        if(this.state.hotel === 'pier') {
            const daysBetween = this.getDaysBetween(this.state.checkin, this.state.checkout)
            window.open(`https://direct-book.com/properties/pierhotelbacalardirect?locale=es&currency=MXN&checkInDate=${this.state.checkin}&checkOutDate=${this.state.checkout}`, "_BLANK")
            return 
        }
        if(this.state.hotel === 'cm') {
            const daysBetween = this.getDaysBetween(this.state.checkin, this.state.checkout)
            window.open(`https://direct-book.com/properties/hotelcasamayaholboxdirect?locale=es&currency=MXN&checkInDate=${this.state.checkin}&checkOutDate=${this.state.checkout}`, "_BLANK")
            return 
        }
        
        
    }

    getDaysBetween(checkin, checkout) {
        const checkinDate = new Date(checkin)
        const checkoutDate = new Date(checkout)
        const timeDifference = checkoutDate.getTime() - checkinDate.getTime()
        const daysDifference = timeDifference / (1000 * 3600 * 24)
        return daysDifference
    }

    render() {

        return (
            <div 
                className={`${this.props.class} sm:max-h-full
                    fixed bottom-0 z-40 w-full text-white 
                    bg-gray-900 sm:h-auto mb-16 sm:mb-0
                    transition-all duration-500`
                }
            >
                <form 
                    onSubmit={this.callBookingEngine}
                    className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-4 
                    gap-4 p-4 sm:p-0"
                >
                    <div className="sm:h-20 flex flex-col justify-center">
                        <p>Hotel</p>
                        <select 
                            value={this.state.hotel}
                            onChange={this.hotelChangeHandler}
                            className="bg-transparent w-full"
                        >
                            <option 
                                className="text-beke"
                                value="pier"
                                >
                                HOTEL PIER BACALAR - ALL INCLUSIVE
                            </option>
                        </select>
                    </div>
                    <div className="sm:h-20 flex flex-col justify-center">
                        <p>Check In</p>
                        <input 
                            value={this.state.checkin}
                            onChange={this.checkinChangeHandler}
                            className="bg-transparent w-full" 
                            id="checkin" 
                            name="checkin" 
                            type="date"
                            pattern="\d{4}-\d{2}-\d{2}"
                        />
                    </div>
                    <div className="sm:h-20 flex flex-col justify-center"> 
                    <p>Check Out</p>
                        <input 
                            value={this.state.checkout}
                            onChange={this.checkoutChangeHandler}
                            className="bg-transparent w-full" 
                            id="checkout" 
                            name="checkout" 
                            type="date"
                            pattern="\d{4}-\d{2}-\d{2}" 
                        />
                    </div>
                    <div className="h-12 sm:h-20">
                        <button 
                            className="uppercase bg-yellow-400 
                                w-full h-full" 
                            type="submit"
                        >
                            Reservar ahora
                        </button>
                    </div>
                </form>
            </div> 
        )
    }

}

export default Reservation