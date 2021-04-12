import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../../components/Layout'


const XoPage = ({data}) => {

    const hero = getImage(data.hero)
    const logo = getImage(data.logo)
    const terraza = getImage(data.bungalowFrente)
    const panoramica = getImage(data.superior)
    const cabana = getImage(data.bungalowmar)
    const bungalow = getImage(data.bungalow)
    const bacalar = getImage(data.bacalar)

    return (
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
                    Hotel situado a orilla de la hermosa
                    laguna de los 7 colores, rodeado de una
                    atmósfera que
                    transmite tranquilidad, relajación y
                    conexión con la naturaleza. Destino
                    petfriendly para aquellos
                    viajeros que disfrutan de la compañía
                    de sus mascotas.
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
                    </div>
                    <div 
                        className="p-4 sm:p-10 flex ml-auto 
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
    }
`