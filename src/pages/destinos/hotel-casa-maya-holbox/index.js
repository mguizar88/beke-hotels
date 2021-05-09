import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../../components/Layout'
import video from '../../../img/cm-video.mp4'

import chef from '../../../img/chef.svg'
import iron from '../../../img/ironing.svg'
import dryer from '../../../img/hair-dryer.svg'
import wifi from '../../../img/wi-fi.svg'
import bath from '../../../img/bathtub.svg'
import tv from '../../../img/tv-screen.svg'
import ac from '../../../img/freezer.svg'

const CasaMayaPage = ({data}) => {

    const logo = getImage(data.logo)
    const terraza = getImage(data.bungalowFrente)
    const panoramica = getImage(data.superior)
    const cabana = getImage(data.bungalowmar)
    const bungalow = getImage(data.bungalow)
    const estandar = getImage(data.estandar)
    const holbox = getImage(data.holbox)

    return (
        <Layout>
            <div className="sm:h-screen relative overflow-hidden">
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
                className="container mx-auto text-center p-6
                    sm:py-32 w-11/12 sm:w-full mb-12 -mt-12 
                    rounded-2xl sm:rounded-none sm:bg-transparent bg-white 
                    relative shadow-2xl sm:shadow-none sm:mt-0"
            >
                <GatsbyImage 
                    image={logo} 
                    className="max-w-md"
                    alt="logo"
                />
                <p 
                    className="sm:max-w-2xl mx-auto text-justify 
                        sm:mt-12 text-beke"
                >
                    Ubicado en la primera línea de playa de la encantadora isla de Holbox, hotel Casa Maya es un acogedor donde disfrutarás de las mejores vistas del amanecer y atardecer del Caribe mexicano.  Podrás relajarte en nuestro club de playa mientras tomas un delicioso cóctel o recorrer la isla en bicicleta con el mar color turquesa de fondo.
                    Si vacacionas en Holbox, no puedes perderte el característico tour de bioluminiscencia, un encuentro con la naturaleza que convertirá tu visita en una experiencia mágica.
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
                            className="text-beke text-3xl 
                                mb-4 text-center "
                        >
                            BUNGALOW FRENTE AL MAR
                        </h2>
        
                        <p className="text-beke text-lg text-justify ">
                            Con cama king size, un sofá cama individual, baño privado y vista
                            parcial al mar.
                        </p>
                        <div className="flex w-full justify-between mt-4">
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
                            className="text-beke text-3xl 
                                mb-4 text-center"
                        >
                            BUNGALOW SUPERIOR
                        </h2>
                        
                        <p className=" ml-auto text-beke text-lg text-justify">
                            Ideales para familias grandes, con dos camas matrimoniales, una cama
                            individual y baño privado.
                        </p>
                        <div className="flex w-full justify-between mt-4">
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
                            className="text-beke text-3xl 
                                text-center mb-4"
                        >
                            BUNGALOW CON VISTA AL MAR 
                        </h2>
                        <p className="text-beke text-lg text-justify ">
                            Cercano al mar, ideal para parejas,
                            cuenta con una cama king size, sofá cama individual, baño privado y vista parcial al
                            mar.
                        </p>
                        <div className="flex w-full justify-between mt-4">
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
                            items-center order-4 sm:order-none 
                            shadow-2xl rounded-b-2xl sm:shadow-none
                            sm:rounded-none mb-8 sm:mb-0"
                    >
                        <h2 
                            className="text-beke text-3xl 
                                mb-4 text-center "
                        >
                            BUNGALOW
                        </h2>
                        
                        <p className=" ml-auto text-beke text-lg text-justify">
                            Bungalow con una cama matrimonial y una cama individual, baño
                            privado y vista al jardín.
                        </p>
                        <div className="flex w-full justify-between mt-4">
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
                    <div
                        className="sm:h-96"
                    >
                        <GatsbyImage
                            className="h-full w-full rounded-t-2xl
                                sm:rounded-none" 
                            image={estandar} 
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
                            className="text-beke text-3xl 
                                text-center mb-4 "
                        >
                            BUNGALOW ESTÁNDAR 
                        </h2>
                        <p className="text-beke text-lg text-justify ">
                            Habitación perfecta para viajeros que buscan un lugar para descansar
                            y aprovechar al máximo la isla. La habitación cuenta con una cama matrimonial, baño privado
                            y televisión con cable.
                        </p>
                        <div className="flex w-full justify-between mt-4">
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
                            className="h-full w-full rounded-t-2xl
                                sm:rounded-none"
                            image={holbox} 
                            alt="Bacalar" 
                        />
                    </div>
                    <div className="p-4 sm:p-16 bg-white rounded-b-2xl
                            shadow-2xl mb-8 sm:mb-0 sm:shadow-none sm:bg-none
                            sm:rounded-none">
                        <h2
                            className="text-beke sm:text-xl xl:text-3xl
                                mb-4 text-center"
                        >
                            HOLBOX
                        </h2>
                        <p
                            className="text-beke 
                                text-xl text-justify"
                        >
                            La isla, ubicada dentro de la Reserva Natural Yum Balam, posee una extensión de tan solo 42 km de largo y 2 km de ancho y está situado al norte de la Pinsula de Yucatán. Sus playas vírgenes y ecosistema son el hábitat de especies silvestres como delfines, pelícanos, flamencos, tortugas, entre otras.
                            Sus aguas cristalinas la hacen un deleite para los bañistas y uno de los destinos ideales para practicar deportes como windsurf, el kitesurf, el buceo con snorkel, el velerismo y la navegación en kayak.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )

}

export default CasaMayaPage

export const pageQuery = graphql `
    query {
        logo: file(relativePath: {eq: "logo-casa-maya-color.png"}) {
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
        bungalow: file(relativePath: {eq: "22.jpg"}) {
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
        bungalowFrente: file(relativePath: {eq: "20-1.jpg"}) {
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
        bungalowmar: file(relativePath: {eq: "21.jpg"}) {
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
        superior: file(relativePath: {eq: "19.jpg"}) {
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
        estandar: file(relativePath: {eq: "18.jpg"}) {
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
        holbox: file(relativePath: {eq: "flamencos.jpg"}) {
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