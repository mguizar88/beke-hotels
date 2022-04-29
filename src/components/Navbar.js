import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import facebook from '../img/social/facebook-black.svg'
import instagram from '../img/social/instagram-black.svg'
import flex from '../img/icono-tarifa-flex.svg'
import useNavigationData from '../hooks/NavigationData'
import useSiteMetadata from './SiteMetadata'

const NavData = () => {
  const { parents, navItems }  = useNavigationData()
  return <p></p>
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      destinationsActive: false,
      destinationsActiveClass: 'hidden',
      toursActive: false,
      toursActiveClass: 'hidden',
      packageActive: false,
      packageActiveClass: 'hidden',
    }
    this.destinationsDisplay = this.destinationsDisplay.bind(this)
    this.toursDisplay = this.toursDisplay.bind(this)
  }

  destinationsDisplay = () => {
    this.setState(
      {
        destinationsActive: !this.state.destinationsActive
      },
      () => {
        this.state.destinationsActive
          ? this.setState({
            destinationsActiveClass: 'block',
          })
          : this.setState({
            destinationsActiveClass: 'hidden',
          })
      }
    )
  }

  toursDisplay = () => {
    this.setState(
      {
        toursActive: !this.state.toursActive
      },
      () => {
        this.state.toursActive
          ? this.setState({
            toursActiveClass: 'block',
          })
          : this.setState({
            toursActiveClass: 'hidden',
          })
      }
    )
  }

  packageDisplay = () => {
    this.setState(
      {
        packageActive: !this.state.packageActive
      },
      () => {
        this.state.packageActive
          ? this.setState({
            packageActiveClass: 'block',
          })
          : this.setState({
            packageActiveClass: 'hidden',
          })
      }
    )
  }

  render() {
    
    return (
      <header 
        className="flex justify-center text-black shadow-xl 
        bg-white relative z-40"
      >
        <NavData />
        <div className="flex-row items-center flex justify-center sm:justify-between w-full lg:w-4/5 p-5">
          <div className="w-6/12 md:w-auto justify-center sm:justify-start relative">
            <Link className="w-full sm:w-40" to="/" >
              <StaticImage 
                src="../img/el-secreto-logo.png"
                alt="Logo"
                placeholder="blurred"
              />
            </Link>
          </div>
          <div id="nav-links" className="hidden sm:block p-4 sm:p-0">
            <nav className="flex">
              <Link to="/" className="mx-4 p-2">
                Inicio
              </Link>
              <div className="relative">
                <button 
                  onClick={this.destinationsDisplay}
                  type="button" 
                  className="rounded-md p-2 inline-flex 
                    items-center justify-center 
                    hover:text-gray-900 
                    hover:bg-white focus:outline-none 
                    focus:ring-2 focus:ring-inset 
                    focus:ring-white" 
                  aria-expanded="false"
                >
                  <span>Hoteles</span>
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className={`${ this.state.destinationsActiveClass } absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/destinos/hotel-pier-bacalar/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Pier Bacalar - All Inclusive
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="/destinos/hotel-casa-maya-holbox/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Casa Maya Holbox
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="/destinos/hotel-xo-bacalar/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            XO Bacalar
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="relative">
                <button 
                  onClick={this.toursDisplay}
                  type="button" 
                  className="rounded-md p-2 inline-flex 
                    items-center justify-center 
                    hover:text-gray-900 
                    hover:bg-white focus:outline-none 
                    focus:ring-2 focus:ring-inset 
                    focus:ring-white" 
                  aria-expanded="false"
                >
                  <span>Tours</span>
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className={`${ this.state.toursActiveClass } absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/tours-bacalar/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Bacalar
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="/tours-holbox/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Holbox
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="relative">
                <button 
                  onClick={this.packageDisplay}
                  type="button" 
                  className="rounded-md p-2 inline-flex 
                    items-center justify-center 
                    hover:text-gray-900 
                    hover:bg-white focus:outline-none 
                    focus:ring-2 focus:ring-inset 
                    focus:ring-white" 
                  aria-expanded="false"
                >
                  <span>Paquetes</span>
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className={`${ this.state.packageActiveClass } absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/package/"
                        state={{ destination: "Pier Bacalar - All Inclusive" }}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Pier Bacalar
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="/package/"
                        state={{ destination: "Casa Maya Holbox" }}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Casa Maya Holbox
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="/package/"
                        state={{ destination: "XO Bacalar" }}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            XO Bacalar
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </nav>
          </div>
          <div className="w-6/12 sm:w-auto inline-flex justify-end">
            <button 
              onClick={this.props.modalHandler}
              type="button" 
              className="mx-2 rounded-md sm:inline-flex 
                items-center justify-center block
                hover:text-gray-900 hover:bg-white 
                focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-white"
            >
              <img className="w-8 fill-current hover:text-black" src={flex} alt="Tarifa Flex" />
              <span className="leading-none hidden sm:block">Tarifa flex</span>
            </button>
            <a className="mx-2" target="_Blank" rel="noreferrer" href="https://www.instagram.com/hotelelsecretobacalar/">
              <img src={instagram} className="fill-current text-black w-8" alt="Instagram logo" />
            </a>
            <a className="mx-2" target="_Blank" rel="noreferrer" href="https://www.facebook.com/El-Secreto-Hotel-Bacalar-102395252429749">
              <img src={facebook} className="fill-current text-black w-8" alt="Facebook logo" />
            </a>
          </div>
        </div>
      </header>
    )
  }
}


export default Navbar
