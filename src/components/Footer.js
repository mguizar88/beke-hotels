import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = class extends React.Component {
  render() {
    return (
      <footer 
        className="static sm:fixed 2xl:static bottom-0 z-0 w-full sm:h-96
        bg-beke mb-16 sm:mb-0" 
      >
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
              <a className="block m-2" href="tel: 9988002097">
                (998) 800 2097
              </a>
              <a className="block m-2" target="_Blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=5219988002097&text&app_absent=0">
                Whatsapp
              </a>
            </div>
          </div>
          <div className="divide-y divide-yellow-400">
            <div>
              <h3 className="mb-4">Enlaces Rápidos</h3>
            </div>
            <div>
              <Link className="block m-2" to="/">
                Políticas de privacidad
              </Link>
              <Link className="block m-2" to="/">
                Políticas de cookies
              </Link>
            </div>
          </div>
          <div className="divide-y divide-yellow-400">
            <div>
              <h3 className="mb-4">Síguenos</h3>
            </div>
            <div>
              <a className="m-2 inline-flex" target="_Blank" rel="noreferrer" href="https://www.instagram.com/casamayaholbox/">
                <StaticImage 
                  src="../img/social/instagram.svg"
                  alt="Instagram logo"
                  placeholder="blurred"
                  loading="lazy"
                />
              </a>
              <a className="m-2" target="_Blank" rel="noreferrer" href="https://www.facebook.com/HotelCasaMayaHolbox">
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
