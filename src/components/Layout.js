import React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Reservation from '../components/Reservation'
import PromoModal from '../components/PromoModal'
import MobileNav from '../components/MobileNav'

import whatsappIcon from '../img/whatsapp-icon.svg'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsActive: true,
      windowWidth: null,
      reservationBarActive: false,
      reservationBarActiveClass: 'max-h-0'
    }
    this.modalHandler = this.modalHandler.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
    this.reservationBarHandler = this.reservationBarHandler.bind(this)
  }

  componentDidMount() {
    if(typeof window !== 'undefined') {
      this.setState({
        windowWidth: window.innerWidth
      })
    }
    
    window.addEventListener("resize", this.resizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler)
  }

  reservationBarHandler() {
    this.setState({
      reservationBarActive: !this.state.reservationBarActive
    }, 
      () => {
        this.state.reservationBarActive
        ? this.setState({
          reservationBarActiveClass: 'max-h-72'
        })
        : this.setState({
          reservationBarActiveClass: 'max-h-0'
        })
      }
    )
  }

  resizeHandler() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  modalHandler(event) {
    this.setState(
      {
        modalIsActive: !this.state.modalIsActive
      }
    )
  }

  render() {
    
    const children = this.props.children
  
    return (
      <TemplateWrapper 
        windowWidth={this.state.windowWidth}
        modalIsActive={this.state.modalIsActive} 
        modalHandler={this.modalHandler} 
        children={children}
        reservationClass={this.state.reservationBarActiveClass}
        reservationBarHandler={this.reservationBarHandler}
        path={this.props.path}
      />
    )
  }

}

const TemplateWrapper = ({
  windowWidth, 
  children, 
  modalHandler, 
  modalIsActive, 
  reservationClass,
  reservationBarHandler,
  path,
}) => {
  
  const { title, description } = useSiteMetadata()

  return (
    <div className="relative font-gotham">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar modalHandler={modalHandler} />
      {
        path !== '/menu/'
        ? 
          modalIsActive?<PromoModal handler={modalHandler} /> : ''
        : ''
      }
      <div 

        className="bg-gray-100 sm:mb-96 relative z-10 2xl:mb-0 mx-auto"
      >
        {children}
      </div>
      
      <Reservation 
        class={reservationClass}
      />
      {
        windowWidth <= 640
        ? <MobileNav 
            reservationBarHandler={reservationBarHandler} 
          />
        : ''
      }
      <a className="fixed bottom-24 right-3 z-50" href="https://wa.me/9981098729" target="_BLANK" rel="noreferrer">
        <img className="w-16" src={whatsappIcon} />
      </a>
      <Footer />
    </div>
  )

}
