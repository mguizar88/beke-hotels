import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../../components/Layout'
import video from '../../../img/cm-video.mp4'

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
            <div style={{height: '600px'}} className="relative overflow-hidden">
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
                className="container mx-auto text-center p-4
                    sm:py-32"
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
                    Ubicado en la primera línea de playa de la encantadora isla de Holbox, hotel Casa Maya es un acogedor donde disfrutarás de las mejores vistas del amanecer y atardecer del Caribe mexicano.  Podrás relajarte en nuestro club de playa mientras tomas un delicioso cóctel o recorrer la isla en bicicleta con el mar color turquesa de fondo.
                    Si vacacionas en Holbox, no puedes perderte el característico tour de bioluminiscencia, un encuentro con la naturaleza que convertirá tu visita en una experiencia mágica.
                </p>
            </section>

            <section>
                <div 
                    className="grid grid-cols-1 
                        sm:grid-cols-2"
                >
                    <div className="sm:h-96">
                        <GatsbyImage
                            className="sm:h-full w-full"
                            image={terraza} 
                            alt="Suite Terraza" 
                        />
                    </div>
                    <div 
                        className="p-4 sm:p-10 flex 
                            justify-center items-center flex-col w-4/5"
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
                        <Link 
                            to="/hotel-casa-maya-holbox/rooms/bungalow-frente-al-mar/"
                            className="p-2 text-white bg-beke
                                rounded-md w-1/6 text-center mt-4"
                        >
                            Ver más
                        </Link>
                    </div>
                    <div 
                        className="p-4 sm:p-10 flex 
                            justify-center ml-auto items-center flex-col w-4/5"
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
                        <Link 
                            to="/hotel-casa-maya-holbox/rooms/bungalow-superior/"
                            className="p-2 text-white bg-beke
                                rounded-md w-1/6 text-center mt-4"
                        >
                            Ver más
                        </Link>
                    </div>
                    <div 
                        className="sm:h-96"
                    >
                        <GatsbyImage 
                            className="h-full w-full"
                            image={panoramica} 
                            alt="Suite Terraza" 
                        />
                    </div>
                    <div
                        className="sm:h-96"
                    >
                        <GatsbyImage
                            className="h-full w-full" 
                            image={cabana} 
                            alt="Suite Terraza" 
                        />
                    </div>
                    <div 
                        className="p-4 sm:p-10 flex 
                            justify-center items-center flex-col w-4/5"
                    >
                        <h2 
                            className="text-beke text-3xl 
                                text-center mb-4 "
                        >
                            BUNGALOW CON VISTA AL MAR 
                        </h2>
                        <p className="text-beke text-lg text-justify ">
                            Cercano al mar, ideal para parejas,
                            cuenta con una cama king size, sofá cama individual, baño privado y vista parcial al
                            mar.
                        </p>
                        <Link 
                            to="/hotel-casa-maya-holbox/rooms/bungalow-con-vista-al-mar/"
                            className="p-2 text-white bg-beke
                                rounded-md w-1/6 text-center mt-4"
                        >
                            Ver más
                        </Link>
                    </div>
                    <div 
                        className="p-4 sm:p-10 flex 
                            justify-center ml-auto items-center flex-col w-4/5"
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
                        <Link 
                            to="/hotel-casa-maya-holbox/rooms/bungalow/"
                            className="p-2 text-white bg-beke
                                rounded-md w-1/6 text-center mt-4"
                        >
                            Ver más
                        </Link>
                    </div>
                    <div 
                        className="sm:h-96"
                    >
                        <GatsbyImage 
                            className="h-full w-full"
                            image={bungalow} 
                            alt="Suite Terraza" 
                        />
                    </div>
                    <div
                        className="sm:h-96"
                    >
                        <GatsbyImage
                            className="h-full w-full" 
                            image={estandar} 
                            alt="Suite Terraza" 
                        />
                    </div>
                    <div 
                        className="p-4 sm:p-10 flex 
                            justify-center items-center flex-col w-4/5"
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
                        <Link 
                            to="/hotel-casa-maya-holbox/rooms/bungalow-estándar/"
                            className="p-2 text-white bg-beke
                                rounded-md w-1/6 text-center mt-4"
                        >
                            Ver más
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <div 
                    className="grid grid-cols-1 
                        sm:grid-cols-2"
                >
                    <div>
                        <GatsbyImage 
                            className="w-full h-full"
                            image={holbox} 
                            alt="Bacalar" 
                        />
                    </div>
                    <div className="sm:p-16">
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