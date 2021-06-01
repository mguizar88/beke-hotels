import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../../components/Layout'
import video from '../../../img/pier-video.mp4'

import chef from '../../../img/chef.svg'
import iron from '../../../img/ironing.svg'
import dryer from '../../../img/hair-dryer.svg'
import wifi from '../../../img/wi-fi.svg'
import bath from '../../../img/bathtub.svg'
import tv from '../../../img/tv-screen.svg'
import ac from '../../../img/freezer.svg'
import clip from '../../../img/logo-clip.svg'

const PierPage = ({data}) => {

    const logo = getImage(data.logo)
    const terraza = getImage(data.terraza)
    const panoramica = getImage(data.panoramica)
    const cabana = getImage(data.cabana)
    const bacalar = getImage(data.bacalar)
    const bbva = getImage(data.bbva)
    const visa = getImage(data.visa)
    const mastercard = getImage(data.mastercard)
    const paypal = getImage(data.paypal)

    const videoJsOptions = {
        autoPlay: true,
        controls: false,
        loop: true,
        sources: [{
            src: video,
            type: 'video/mp4'
        }]
    }

    return (
        <Layout>
            <div className="sm:h-screen relative z-0 overflow-hidden">
                <video  
                    src={video} 
                    muted 
                    autoPlay
                    loop
                >
                    Tu navegador no admite el elemento <code>video</code>.
                </video>
            </div>
            <section 
                className="container shadow-2xl sm:shadow-none mx-auto text-center p-6
                    sm:py-32 w-11/12 sm:w-full mb-12 sm:mt-0 -mt-12 
                    rounded-2xl bg-white sm:bg-transparent relative
                    sm:rounded-none"
            >
                <GatsbyImage 
                    image={logo} 
                    className="max-w-md"
                    alt="logo"
                />
                <p 
                    className="sm:max-w-2xl mx-auto text-justify 
                        mt-12 text-beke"
                >
                    Pier Hotel Bacalar – Todo Incluido, al 
                    estar rodeado de naturaleza crea un entorno 
                    de exclusividad lejos de todo lo cotidiano. 
                    Podrás disfrutar de la increíble laguna de 
                    Bacalar a unos cuantos pasos de tu 
                    habitación. Además, por nuestra ubicación 
                    y su arena blanca, no podrás diferenciarla 
                    del mar, por la noche disfrutarás del cielo 
                    estrellado como nunca antes lo habías 
                    visto, tu habitación, nuestro personal 
                    y el ambiente te harán experimentar las 
                    mejores vacaciones en pareja o en familia.
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
                                mb-4 text-center text-2xl"
                        >
                            SUITE TERRAZA
                        </h2>
                        <p className="text-beke text-xl text-justify">
                            suite con dos camas queen size 
                            y vista al jardín.
                        </p>
                        <p className="text-beke text-lg text-justify ">
                            Habitación perfecta para familias que buscan comodidad. Todas las
                            habitaciones cuentan con dos camas queen size, televisión, baño completo, cocineta,
                            refrigerador, microondas y lo mejor de todo, están a unos cuantos metros de la laguna de
                            Bacalar.
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
                        className="p-4 sm:p-10 flex ml-auto 
                            justify-center flex-col sm:w-4/5 
                            items-center order-2 sm:order-none 
                            shadow-2xl rounded-b-2xl sm:shadow-none
                            sm:rounded-none mb-8 sm:mb-0"
                    >
                        <h2 
                            className="text-beke sm:text-3xl 
                                mb-4 text-center text-2xl"
                        >
                            SUITE PANORÁMICA
                        </h2>
                        <p 
                            className="text-beke text-xl 
                             text-justify ml-auto"
                        >
                            Cama King Size con terraza y 
                            vista parcial a la laguna.
                        </p>
                        <p className=" ml-auto text-beke text-lg text-justify">
                            Habitación familiar que cuenta con el beneficio de tener una hermosa
                            vista a la laguna de Bacalar. Todas las habitaciones cuentan con una cama king size y un
                            sofá cama matrimonial, televisión, baño completo, cocineta, refrigerador y microondas.
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
                            justify-center flex-col sm:w-4/5 sm:rounded-none
                            rounded-b-2xl shadow-2xl sm:shadow-none
                            mb-8 sm:mb-0"
                    >
                        <h2 
                            className="text-beke sm:text-3xl 
                                text-center mb-4 text-2xl"
                        >
                            CABAÑA PANORÁMICA 
                        </h2>
                        <p className="text-beke text-xl text-justify ">
                            Suite con cama King Size y 
                            vista parcial a la laguna.
                        </p>
                        <p className="text-beke text-lg text-justify ">
                            Habitación perfecta para 
                            parejas que buscan un lugar 
                            romántico para relajarse y 
                            disfrutar de la hermosa vista 
                            a la laguna. La habitación 
                            cuenta con una cama
                            king size y baño completo.
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
                </div>
            </section>

            <section className="w-11/12 sm:w-full mx-auto sm:mx-0">
                <div 
                    className="grid grid-cols-1 
                        sm:grid-cols-2"
                >
                    <div>
                        <GatsbyImage 
                            className="w-full h-full rounded-t-2xl"
                            image={bacalar} 
                            alt="Bacalar" 
                        />
                    </div>
                    <div   
                        className="p-4 sm:p-16 bg-white rounded-b-2xl
                            shadow-2xl mb-8 sm:mb-0 sm:shadow-none sm:bg-none
                            sm:rounded-none"
                    >
                        <h2
                            className="text-beke sm:text-3xl
                                mb-4 text-center text-2xl font-gotham"
                        >
                            Bacalar
                        </h2>
                        <p
                            className="text-beke 
                                text-xl text-justify"
                        >
                            Bacalar alberga uno de los tesoros más hermosos: la Laguna de los Siete Colores que además de su belleza natural única también guarda otros tesoros sorprendentes. Es hogar de algunos de los organismos más antiguos del planeta que podrían ayudar a descifrar el origen de la vida y los secretos que dejaron los piratas de los siglos XVII y XVIII cuando se escondieron allí.
                            <br/>
                            <br/>
                            Bacalar es simplemente un poblado paradisiaco que te enamorará con sus pequeñas casas de pescadores donde se encuentra una hermosa laguna verde azul y el parque ecoturístico Uchben Kah, donde puedes nadar, hacer snorkel, bucear o realizar tranquilos paseos en lancha.
                        </p>
                    </div>
                </div>
            </section>

        </Layout>
    )

}

export default PierPage

export const pageQuery = graphql `
    query {
        logo: file(relativePath: {eq: "pier-green.png"}) {
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
        terraza: file(relativePath: {eq: "1.jpg"}) {
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
        panoramica: file(relativePath: {eq: "7.jpg"}) {
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
        cabana: file(relativePath: {eq: "20.jpg"}) {
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
        bbva: file(relativePath: {eq: "bbva.png"}) {
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