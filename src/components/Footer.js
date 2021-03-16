import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="fixed 2xl:static bottom-0 z-0 w-full h-96" style={{backgroundColor: '#08495f'}}>
        <div className="grid grid-cols-1 sm:grid-cols-3 
          w-full sm:w-4/5 mx-auto text-white p-4 xl:p-16 
          gap-4 sm:gap-8 xl:text-2xl break-words"
        >
          <div className="divide-y divide-yellow-400">
            <div>
              <h3 className="mb-4">Contáctanos</h3>
            </div>
            <div>
              <a className="block m-2" href="mailto: ventas@grupobeke.com">
                ventas@grupobeke.com
              </a>
              <a className="block m-2" href="tel: 9982722665">
                (998) 272 2665
              </a>
              <a className="block m-2" target="_Blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=5219981098729&text&app_absent=0">
                Whatsapp
              </a>
            </div>
          </div>
          <div className="divide-y divide-yellow-400">
            <div>
              <h3 className="mb-4">Enlaces Rápidos</h3>
            </div>
            <div>
              <a className="block m-2" href="#">
                Políticas de privacidad
              </a>
              <a className="block m-2" href="#">
                Políticas de cookies
              </a>
            </div>
          </div>
          <div className="divide-y divide-yellow-400">
            <div>
              <h3 className="mb-4">Síguenos</h3>
            </div>
            <div>
              <a className="m-2 inline-flex" target="_Blank" rel="noreferrer" href="https://www.instagram.com/bekehotels/">
                <StaticImage 
                  src="../img/social/instagram.svg"
                  alt="Instagram logo"
                  placeholder="blurred"
                  loading="lazy"
                />
              </a>
              <a className="m-2" target="_Blank" rel="noreferrer" href="https://www.facebook.com/BekeHotels">
                <StaticImage 
                  src="../img/social/facebook.svg"
                  alt="Facebook logo"
                  placeholder="blurred"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
