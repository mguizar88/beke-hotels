import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import Layout from '../../../components/Layout'

import chef from '../../../img/chef.svg'
import iron from '../../../img/ironing.svg'
import dryer from '../../../img/hair-dryer.svg'
import wifi from '../../../img/wi-fi.svg'
import bath from '../../../img/bathtub.svg'
import tv from '../../../img/tv-screen.svg'
import ac from '../../../img/freezer.svg'
import clip from '../../../img/logo-clip.svg'

const XoPage = ({data}) => {

    const hero = getImage(data.hero)
    const logo = getImage(data.logo)
    const smallLogo = getImage(data.smalllogo)
    const terraza = getImage(data.bungalowFrente)
    const panoramica = getImage(data.superior)
    const cabana = getImage(data.bungalowmar)
    const bungalow = getImage(data.bungalow)
    const bacalar = getImage(data.bacalar)
    const banorte = getImage(data.banorte)
    const visa = getImage(data.visa)
    const mastercard = getImage(data.mastercard)
    const paypal = getImage(data.paypal)

    return (
        <>
            <Helmet>
                <script src='https://www.thehotelsnetwork.com/js/hotel_price_widget.js?hotel_id=1721129&property_id=1033476&account_key=13F4DBC854C4C39DFCBD774AF370011B' async></script>
            </Helmet>
            <Layout>
                <div className="sm:h-screen">
                    <GatsbyImage 
                        image={hero}
                        className="w-full h-full"
                        alt="Bacalar hero image"
                        objectPosition="center bottom"
                    />
                </div>
                <section 
                    className="container mx-auto text-center p-6
                        sm:py-32 w-11/12 sm:w-full mb-12 -mt-12 
                        rounded-2xl sm:rounded-none sm:bg-transparent bg-white 
                        relative shadow-2xl sm:shadow-none sm:mt-0"
                >
                    <GatsbyImage 
                        image={logo} 
                        className="max-w-md"
                        placeholder="blurred"
                        alt="logo"
                    />
                    <p 
                        className="sm:max-w-2xl mx-auto text-justify 
                            mt-12 text-beke"
                    >
                        Hotel situado a orilla de la hermosa Laguna de los 7 colores, rodeado de una atmósfera que transmite tranquilidad, relajación y conexión con la naturaleza. Destino petfriendly para aquellos viajeros que disfrutan de la compañía de sus mascotas.
                    </p>
                </section>

                <section className="w-11/12 mx-auto sm:w-full sm:mx-0">
                    <div 
                        className="grid grid-cols-1 
                            sm:grid-cols-2"
                    >
                        <div className="sm:h-96">
                            <GatsbyImage
                                className="sm:h-full w-full rounded-t-2xl
                                    sm:rounded-none"
                                image={terraza} 
                                alt="Suite Terraza" 
                            />
                        </div>
                        <div 
                            className="p-4 sm:p-10 flex items-center 
                                justify-center flex-col sm:w-4/5
                                shadow-2xl rounded-b-2xl sm:shadow-none
                                sm:rounded-none mb-8 sm:mb-0"
                        >
                            <h2 
                                className="text-beke sm:text-3xl 
                                    mb-4 text-center text-xl"
                            >
                                HABITACIÓN TERRAZA VISTA AL JARDÍN
                            </h2>
            
                            <p className="text-beke text-lg text-justify ">
                            Habitación con dos camas matrimoniales.
                            </p>
                            <div className="flex w-full justify-between mt-4 flex-wrap">
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={wifi} />
                                    <p>Wifi</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={ac} />
                                    <p>A/C</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={tv} />
                                    <p>TV</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={bath} />
                                    <p>Baño</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={chef} />
                                    <p>Cocineta</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Secadora</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Plancha</p>
                                </div>
                                
                            </div>
                        </div>
                        <div 
                            className="p-4 sm:p-10 flex sm:ml-auto 
                                justify-center flex-col sm:w-4/5 
                                items-center order-2 sm:order-none 
                                shadow-2xl rounded-b-2xl sm:shadow-none
                                sm:rounded-none mb-8 sm:mb-0"
                        >
                            <h2 
                                className="text-beke sm:text-3xl 
                                    mb-4 text-center text-xl"
                            >
                                HABITACIÓN TERRAZA
                            </h2>
                            
                            <p className=" sm:ml-auto text-beke text-lg text-justify">
                            Habitación con una cama matrimonial.
                            </p>
                            <div className="flex w-full justify-between mt-4 flex-wrap">
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={wifi} />
                                    <p>Wifi</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={ac} />
                                    <p>A/C</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={tv} />
                                    <p>TV</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={bath} />
                                    <p>Baño</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={chef} />
                                    <p>Cocineta</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Secadora</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Plancha</p>
                                </div>
                                
                            </div>
                        </div>
                        <div 
                            className="sm:h-96 order-1 sm:order-none"
                        >
                            <GatsbyImage 
                                className="h-full w-full rounded-t-2xl
                                    sm:rounded-none"
                                image={panoramica} 
                                alt="Suite Terraza" 
                            />
                        </div>
                        <div
                            className="sm:h-96"
                        >
                            <GatsbyImage
                                className="h-full w-full rounded-t-2xl
                                    sm:rounded-none" 
                                image={cabana} 
                                alt="Suite Terraza" 
                            />
                        </div>
                        <div 
                            className="p-4 sm:p-10 flex items-center 
                                justify-center flex-col sm:w-4/5
                                shadow-2xl rounded-b-2xl sm:shadow-none
                                sm:rounded-none mb-8 sm:mb-0"
                        >
                            <h2 
                                className="text-beke sm:text-3xl 
                                    text-center mb-4 text-xl"
                            >
                                HABITACIÓN TERRAZA VISTA A LA LAGUNA
                            </h2>
                            <p className="text-beke text-lg text-justify ">
                                Habitación con dos camas matrimoniales.
                            </p>
                            <div className="flex w-full justify-between mt-4 flex-wrap">
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={wifi} />
                                    <p>Wifi</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={ac} />
                                    <p>A/C</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={tv} />
                                    <p>TV</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={bath} />
                                    <p>Baño</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={chef} />
                                    <p>Cocineta</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Secadora</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Plancha</p>
                                </div>
                                
                            </div>
                        </div>
                        <div 
                            className="p-4 sm:p-10 flex sm:ml-auto 
                                justify-center flex-col sm:w-4/5 
                                items-center order-4 sm:order-none 
                                shadow-2xl rounded-b-2xl sm:shadow-none
                                sm:rounded-none mb-8 sm:mb-0"
                        >
                            <h2 
                                className="text-beke sm:text-3xl 
                                    mb-4 text-center text-xl"
                            >
                                FAMILIAR TERRAZA VISTA A LA LAGUNA
                            </h2>
                            
                            <p className=" ml-auto text-beke text-lg text-justify">
                                Habitacion con dos camas
                                matrimoniales y una cama
                                individual.
                            </p>
                            <div className="flex w-full justify-between mt-4 flex-wrap">
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={wifi} />
                                    <p>Wifi</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={ac} />
                                    <p>A/C</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={tv} />
                                    <p>TV</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={bath} />
                                    <p>Baño</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={chef} />
                                    <p>Cocineta</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Secadora</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Plancha</p>
                                </div>
                                
                            </div>
                        </div>
                        <div 
                            className="sm:h-96 order-3 sm:order-none"
                        >
                            <GatsbyImage 
                                className="h-full w-full rounded-t-2xl
                                    sm:rounded-none"
                                image={bungalow} 
                                alt="Suite Terraza" 
                            />
                        </div>
                    </div>
                </section>

                <section className="w-11/12 sm:w-full mx-auto sm:mx-0">
                    <div 
                        className="grid grid-cols-1 
                            sm:grid-cols-2"
                    >
                        <div>
                            <GatsbyImage 
                                className="h-full w-full rounded-t-2xl
                                    sm:rounded-none"
                                image={bacalar} 
                                alt="Bacalar" 
                            />
                        </div>
                        <div className="p-4 sm:p-16 bg-white rounded-b-2xl
                                shadow-2xl mb-8 sm:mb-0 sm:shadow-none sm:bg-none
                                sm:rounded-none">
                            <h2
                                className="text-beke text-xl xl:text-3xl
                                    mb-4 text-center"
                            >
                                BACALAR
                            </h2>
                            <p
                                className="text-beke 
                                    text-xl text-justify"
                            >
                                Bacalar alberga uno de los tesoros más hermosos: la Laguna de los Siete Colores, que además de su belleza natural única también guarda otros tesoros sorprendentes. Es hogar de algunos de los organismos más antiguos del planeta que podrían ayudar a descifrar el origen de la vida y de los secretos que dejaron los piratas de los siglos XVII y XVIII cuando se escondieron allí.
                            </p>
                            <p>
                            Bacalar es simplemente un poblado paradisíaco que te enamorará con sus pequeñas casas de pescadores, una hermosa laguna verde azul y el parque ecoturístico Uchben Kah, donde puedes nadar, hacer snorkel, bucear o realizar tranquilos paseos en lancha.
                            </p>
                        </div>
                    </div>
                </section>
            
            </Layout>
        </>
    )

}

export default XoPage

export const pageQuery = graphql `
    query {
        logo: file(relativePath: {eq: "xo-logo.png"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 348
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        smalllogo: file(relativePath: {eq: "xo-logo.png"}) {
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
        hero: file(relativePath: {eq: "1XO-15.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 1920
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        bungalow: file(relativePath: {eq: "XO-17.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 700
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        bungalowFrente: file(relativePath: {eq: "xo-22.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 700
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        bungalowmar: file(relativePath: {eq: "xo-21.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 700
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        superior: file(relativePath: {eq: "xo-15.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 700
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        bacalar: file(relativePath: {eq: "laguna.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 700
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        payment: file(relativePath: {eq: "payment-bg.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 700
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        banorte: file(relativePath: {eq: "banorte-logo.png"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 500
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        visa: file(relativePath: {eq: "visa-logo.png"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 100
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        mastercard: file(relativePath: {eq: "mastercard-logo.webp"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 128
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        paypal: file(relativePath: {eq: "paypal-logo.png"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 100
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
    }
`