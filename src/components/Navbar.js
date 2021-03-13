import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import flex from '../img/icono-tarifa-flex.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <header className="flex justify-center text-white shadow-xl bg-gray-900">
        <div className="flex-col sm:flex-row items-center flex justify-center sm:justify-between w-full sm:w-4/5 p-5">
          <div className="flex w-full justify-center sm:justify-start relative">
            <button id="nav-btn" className="sm:hidden absolute left-3 inset-y-0 p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link className="w-40" to="/" >
              <StaticImage 
                src="../img/logo-beke-horizontal.png"
                alt="Logo"
                placeholder="blurred"
              />
            </Link>
          </div>
          <div id="nav-links" className="hidden sm:block p-4 sm:p-0">
            <nav className="flex">
              <a href="/" className="mx-4 p-2">
                Inicio
              </a>
              <button type="button" className="rounded-md p-2 inline-flex items-center justify-center hover:text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span>Destinos</span>
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button type="button" className="rounded-md p-2 inline-flex items-center justify-center hover:text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span>Tours</span>
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button type="button" className="rounded-md p-2 inline-flex items-center justify-center hover:text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span>Paquetes</span>
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
          <div className="hidden inline-flex items-center">
            <button type="button" className="mx-2 inline-flex rounded-md p-2 inline-flex items-center justify-center hover:text-gray-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <img className="w-8 fill-current hover:text-black" src={flex} alt="Tarifa Flex" />
              <span>Tarifa flex</span>
            </button>
            <a className="mx-2" target="_Blank" rel="noreferrer" href="https://www.instagram.com/bekehotels/">
              <img src={instagram} className="fill-current text-white w-8" alt="Instagram logo" />
            </a>
            <a className="mx-2" target="_Blank" rel="noreferrer" href="https://www.facebook.com/BekeHotels">
              <img src={facebook} className="fill-current text-white w-8" alt="Facebook logo" />
            </a>
          </div>
        </div>
      </header>
    )
  }
}


export default Navbar
