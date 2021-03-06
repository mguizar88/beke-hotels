import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

import Carousel from 'react-bootstrap/Carousel'

const IndexPageTemplate = ({ data }) => {
  const firstSliderImageSrc = getSrc(data.first)
  const secondSliderImageSrc = getSrc(data.second)
  const thirdSliderImageSrc = getSrc(data.third)
  const second = getImage(data.secondSmall)
  const logoPier = getImage(data.pier)
  const logoCasaMaya = getImage(data.casamaya)
  const logoXo = getImage(data.logoXoBlanco)
  const allinclusive = getImage(data.allinclusive)
  const laguna = getImage(data.laguna)
  const pierMuelle = getImage(data.pierMuelle)
  const lagunaBacalar = getImage(data.lagunaBacalar)
  const duck = getImage(data.duck)
  const muelle = getImage(data.muelle)
  const cm = getImage(data.cm)
  const cmSecond = getImage(data.cmSecond)
  const cmThird = getImage(data.cmThird)
  const cmPlaya = getImage(data.cmPlaya)
  const pierReview = getImage(data.pierReview)
  const cmReview = getImage(data.cmReview)
  const xoReview = getImage(data.xoReview)
  const flamencosSrc = getSrc(data.flamencos)
  const bekeAzul = getImage(data.bekeAzul)
  const xo = getImage(data.xo)
  const xoLakeByNight = getImage(data.xolakebynight)
  const xoLake = getImage(data.xolake)
  const xoRoom = getImage(data.xoroom)
  const xoBar = getImage(data.xobar)

  return(
    <Layout path="/">
      <Carousel
        nextLabel={null}
        prevLabel={null}
      >
        <Carousel.Item className="h-screen" >
          <div 
            className="h-full"
            style={{
              backgroundImage: `url(${firstSliderImageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div 
              className="bg-gray-900 bg-opacity-50 w-full h-full flex 
                items-center justify-center px-4 relative"
            >
              <GatsbyImage className="max-w-full sm:max-w-none" image={logoPier} alt="Pier logo" />
              <div className="absolute bottom-8 right-8
                  lg:bottom-24 lg:right-28">
                <GatsbyImage 
                  className="w-24 lg:w-52" 
                  image={allinclusive} 
                  alt="All inclusive" 
                /> 
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-screen" >
          <div 
            className="h-full"
            style={{
              backgroundImage: `url(${secondSliderImageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div 
              className="bg-gray-900 bg-opacity-50 w-full h-full flex 
                items-center justify-center px-4"
            >
              <GatsbyImage className="max-w-full sm:max-w-none" image={logoCasaMaya} alt="Casa Maya logo" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="h-screen" >
          <div 
            className="h-full"
            style={{
              backgroundImage: `url(${thirdSliderImageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div 
              className="bg-gray-900 bg-opacity-50 w-full h-full flex 
                items-center justify-center px-4"
            >
              <GatsbyImage className="max-w-full sm:max-w-none" image={logoXo} alt="Casa Maya logo" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="container mx-auto">
        <h1 className="sm:text-6xl text-2xl text-gray-900 my-4
        font-bold text-center sm:mt-24">
          BEKE HOTELS
        </h1>
        
        <div className="grid grid-cols-1 grid-rows-none sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2">
            <GatsbyImage className="max-w-full rounded-sm" image={laguna} alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">PIER HOTEL BACALAR – TODO INCLUIDO</h2>
              <p>
                Ubicado en el hermoso Pueblo Mágico de Bacalar, hotel Pier es un encantador hotel familiar estilo
                minimalista con acceso directo a la emblemática Laguna de los 7 Colores, donde podrás nadar en sus 
                cristalinas aguas o recorrerla en kayak con una inolvidable puesta de sol de fondo.
              </p>
            </div>
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={lagunaBacalar} alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={pierMuelle} alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={muelle} alt="Bacalar" />
          </div>
          <div className=" flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={duck} alt="Bacalar" />
          </div>
        </div>
                        
        <div className="grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2 flex flex-col">
            <GatsbyImage className="max-w-full rounded-sm" image={second} alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">
                HOTEL CASA MAYA HOLBOX
              </h2>
              <p>
                Ubicado en la primera línea de playa de la encantadora isla de Holbox, hotel Casa Maya es un 
                espacio acogedor donde disfrutarás de las mejores vistas del amanecer y atardecer del Caribe mexicano. 
                Podrás relajarte en el club de playa mientras tomas un delicioso cóctel o después de recorrer la isla 
                en bicicleta con el mar color turquesa de fondo.
              </p>
            </div>
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={cm} alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={cmThird} alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={cmPlaya} alt="Bacalar" />
          </div>
          <div className=" flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={cmSecond} alt="Bacalar" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2 flex flex-col">
            <GatsbyImage className="max-w-full rounded-sm" image={xo} alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">
                XO LAKEFRONT HOTEL
              </h2>
              <p>
                Hotel situado a orilla de la hermosa Laguna de los 7 colores, rodeado de una atmósfera que 
                transmite tranquilidad, relajación y conexión con la naturaleza. Destino petfriendly para 
                aquellos viajeros que disfrutan de la compañía de sus mascotas.
              </p>
            </div>
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={xoLakeByNight} alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={xoLake} alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={xoRoom} alt="Bacalar" />
          </div>
          <div className=" flex row-span-1 col-span-1">
            <GatsbyImage className="max-w-full rounded-sm" image={xoBar} alt="Bacalar" />
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2
          className="sm:text-6xl text-2xl text-gray-900 my-4
            font-bold text-center sm:mt-24"
        >
          REVIEWS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
          <Link className="lg:px-8 md:px-2 w-full" to="/">
            <GatsbyImage image={cmReview} alt="Casa Maya" />
          </Link>
          <Link className="lg:px-8 md:px-2 w-full" to="/">
            <GatsbyImage image={pierReview} alt="Pier" />
          </Link>
          <Link className="lg:px-8 md:px-2 w-full" to="/">
            <GatsbyImage image={xoReview} alt="XO" />
          </Link>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-24">
            <div>
              <iframe 
                title="map"
                className="w-full"
                src="https://www.google.com/maps/d/embed?mid=1OlFJI80we341EfI9Ve9uDCHAmMXyfchJ"
                height="400px"
              >
              </iframe>
            </div>
            <div className="bg-yellow-400 text-white p-8">
              <h3 className="text-4xl text-bold mb-4">LOCACIONES</h3>
              <p>
                Disfruta los destinos más increíbles de la
                península de Yucatán y el estado de Quintana Roo
                en los hoteles que Béke Hotels tiene a tu
                disposición para que puedas relajarte.
              </p>
            </div>
        </div>
      </section>

      <section>
      <div 
        className="bg-fixed" 
        style={{
          backgroundImage: `url(${flamencosSrc})`
        }}
      >
        <div className="p-8 sm:p-36 bg-blue-50 bg-opacity-70 text-center">
          <GatsbyImage image={bekeAzul} alt="Beke blue logo"/>
          <p style={{color: '#08495f'}} className="max-w-3xl mx-auto my-5 sm:text-2xl rounded  sm:p-8 p-4 ring-4 ring-blue-900">
            En Béke Hotels nos esforzamos por siempre ofrecer una
            experiencia diferente, que deja a todos nuestros 
            huéspedes con ganas de regresar a disfrutar de nuestro 
            servicio, hospedaje, instalaciones y esa esencia que nos 
            caracteriza.
          </p>
        </div>
      </div>
    </section>

    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPageTemplate

export const pageQuery = graphql`query IndexPageTemplate {
  first: file(relativePath: {eq: "2.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        width: 1920
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  second: file(relativePath: {eq: "14.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        width: 1920
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  third: file(relativePath: {eq: "1XO-15.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        width: 1920
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  flamencos: file(relativePath: {eq: "flamencos.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1536
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 70
      )
    }
  }
  secondSmall: file(relativePath: {eq: "14.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1024
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  laguna: file(relativePath: {eq: "laguna.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1024
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  pierMuelle: file(relativePath: {eq: "pier-muelle.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400 
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  lagunaBacalar: file(relativePath: {eq: "bacalar-laguna.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  muelle: file(relativePath: {eq: "muelle.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  duck: file(relativePath: {eq: "duck.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  cm: file(relativePath: {eq: "casa-maya.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  cmPlaya: file(relativePath: {eq: "casa-maya-portafolio.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  cmSecond: file(relativePath: {eq: "3.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  cmThird: file(relativePath: {eq: "35.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  pierReview: file(relativePath: {eq: "pier-review-btn.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 462
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  cmReview: file(relativePath: {eq: "cm-review-button.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 462
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  xoReview: file(relativePath: {eq: "xo-btn.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 462
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  pier: file(relativePath: {eq: "pier.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 334
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  casamaya: file(relativePath: {eq: "logo-casa-maya.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 334
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  logoXoBlanco: file(relativePath: {eq: "logo-xo-blanco.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 334
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  bekeAzul: file(relativePath: {eq: "logo-beke-azul.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 200
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  allinclusive: file(relativePath: {eq: "all-inclusive.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 300
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  xo: file(relativePath: {eq: "XO.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 800
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  xobyday: file(relativePath: {eq: "XO-5.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  xolakebynight: file(relativePath: {eq: "XO-9.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  xolake: file(relativePath: {eq: "XO-6.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  xoroom: file(relativePath: {eq: "XO-17.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  xobar: file(relativePath: {eq: "XO-8.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 400
        placeholder: BLURRED 
        formats: [WEBP]
        quality: 100
      )
    }
  }
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      heading
      subheading
    }
  }
}
`
