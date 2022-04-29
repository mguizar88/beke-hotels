import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

import chef from '../img/closet.png'
import iron from '../img/equipaje.png'
import dryer from '../img/escritorio.png'
import wifi from '../img/wi-fi.svg'
import bath from '../img/bathtub.svg'
import tv from '../img/tv-screen.svg'
import ac from '../img/freezer.svg'
import clip from '../img/logo-clip.svg'

const ElCaminoPage = ({data}) => {

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
                        El hotel ideal para viajeros que gusten rodearse de la naturaleza.
                        En El Secreto, podrás explorar la laguna en kayak o paddle board, hacer recorridos en bicicleta,
                        avistamiento de aves endémicas o simplemente relajarte en una hamaca mientras tomas el sol. 
                        Contamos con todo lo necesario para tu descanso y comodidad, teniendo una vista panorámica de la laguna.
                        <br/>
                        ¿Quieres saber cuál es El Secreto? ¡Ven a descubrirlo!
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
                                    mb-4 text-center text-xl uppercase"
                            >
                                SUITE
                            </h2>
            
                            <p className="text-beke text-lg text-justify uppercase">
                              Con vista al Jardín
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
                                    <p>Closet</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Escritorio</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Rack para equipaje</p>
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
                                    mb-4 text-center text-xl uppercase"
                            >
                                Suite Familiar
                            </h2>
                            
                            <p className="uppercase sm:ml-auto text-beke text-lg text-justify">
                              Terraza con vista a la laguna
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
                                    <p>Closet</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Escritorio</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Rack para equipaje</p>
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
                                    text-center mb-4 text-xl uppercase"
                            >
                                Suite king
                            </h2>
                            <p className="text-beke text-lg text-justify uppercase">
                                Con vista al Jardín
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
                                    <p>Closet</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Escritorio</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Rack para equipaje</p>
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
                                    mb-4 text-center text-xl uppercase"
                            >
                                Suite master king
                            </h2>
                            
                            <p className=" ml-auto text-beke text-lg text-justify uppercase">
                                Terraza con vista a la laguna
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
                                    <p>Closet</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={dryer} />
                                    <p>Escritorio</p>
                                </div>
                                <div className="w-14 mx-2 text-xs flex flex-col items-center">
                                    <img className="w-8 h-8" src={iron} />
                                    <p>Rack para equipaje</p>
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
                                    mb-4 text-center uppercase"
                            >
                                BACALAR - XUL-HÁ
                            </h2>
                            <p
                                className="text-beke 
                                    text-xl text-justify uppercase"
                            >
                              Bacalar alberga uno de los tesoros más hermosos: la Laguna de los Siete Colores, que además de su belleza natural única también guarda otros tesoros sorprendentes. hogar de algunos de los organismos más antiguos del planeta que podrían ayudar a descifrar el origen de la vida y de los secretos que dejaron los piratas de los siglos XVII y XVIII cuando se escondieron allí.

                            </p>
                            <p className="uppercase text-xl text-justify">
                              de manera colindante se encuentra la laguna de xul-há, que significa “donde termina el agua”.
                              ambos sitios siendo idoneos para la relajación y el esparcimiento debido a su ubicación geográfica, así como su extensa flora y fauna.
                            </p>
                        </div>
                    </div>
                </section>
            
            </Layout>
        </>
    )

}

export default ElCaminoPage

export const pageQuery = graphql `
    query {
        logo: file(relativePath: {eq: "el-secreto-logo-horizontal.png"}) {
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
        hero: file(relativePath: {eq: "el-secreto-hero.jpg"}) {
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
        bungalow: file(relativePath: {eq: "master-king.jpg"}) {
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
        bungalowFrente: file(relativePath: {eq: "suite.jpg"}) {
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
        bungalowmar: file(relativePath: {eq: "suite-king.jpg"}) {
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
        superior: file(relativePath: {eq: "suite-familiar.jpg"}) {
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
        bacalar: file(relativePath: {eq: "bacalar.jpg"}) {
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