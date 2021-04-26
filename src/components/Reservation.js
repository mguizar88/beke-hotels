import React from 'react'

const Reservation = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hotel: 'a5nfpq',
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
            window.open(`https://portal.freetobook.com/reservations?w_id=41469&w_tkn=2PaI8yGsXA5jLBS7S9TwDgX5se9b8GQ0Clb2zSxMcQNw0NJ6fWHwOfwXfpnRn&check_in_date=${this.state.checkin}&check_out_date=${this.state.checkout}&stay_length=${daysBetween}`, "_BLANK")
            return 
        }
        window.open( `https://hotels.cloudbeds.com/es/reservation/${this.state.hotel}?currency=MXN#checkin=${this.state.checkin}&checkout=${this.state.checkout}` , "_BLANK" )
        
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
                                value="a5nfpq"
                                >
                                HOTEL PIER BACALAR - ALL INCLUSIVE
                            </option>
                            <option 
                                className="text-beke" 
                                value="wastbU"
                            >
                                HOTEL CASA MAYA HOLBOX
                            </option>
                            <option 
                                className="text-beke" 
                                value="xo"
                            >
                                HOTEL XO BACALAR
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