import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const Bacalar = ({data}) => {
    const adventure = getImage(data.adventure)
    const romance = getImage(data.romance)
    const dockSrc = getSrc(data.dock)

    return (
        <>
            <h1 className="text-center mb-12 text-white text-5xl font-bold">Paquetes en Bacalar</h1>
            <div 
                className="p-6 rounded-2xl mb-16"
                style={{
                    height: '500px',
                    backgroundImage: `url(${dockSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="h-full rounded-2xl shadow-2xl text-white p-10 grid sm:grid-cols-2 gap-4 cristal-container">
                    <div className="h-full">
                        <GatsbyImage className="rounded-2xl h-full overflow-hidden" image={adventure} alt="Imagen del paquete" />
                    </div>
                    <div 
                        className="overflow-y-scroll px-2"
                        style={{
                            maxHeight: '500px',
                        }}
                    >
                        <h3 className="bg-beke bg-opacity-80 rounded-2xl p-4 text-lg text-center">
                            AVENTURA TOTAL 4 DÍAS 3 NOCHES
                        </h3>
                        <p className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                            Aventúrate en el pueblo mágico de Bacalar, explora lugares impresionantes y disfruta de muchísimas actividades. 
                            Un paquete con experiencias, tours, alimentos y bebidas.
                        </p>
                        <ul>
                            <li className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                                Hospedaje a orilla de laguna.
                            </li>
                            <li className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                                Habitación con cama king size.
                            </li>
                            <li className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                                Alimentos y Bebidas incluidas.
                                <Link to="/menu/">Ver menú</Link>
                            </li>
                            <li className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                                Cena temática. (mar & tierra)
                            </li>
                            <li className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                                Aventura total: visita a Kohunlich, rápidos de Bacalar y cenote azul.
                            </li>
                            <li className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                                Tour rally salvaje con tirolesas, bicicletas y kayaks.
                            </li>
                            <li className="text-sm ring-2 bg-beke bg-opacity-50 ring-beke rounded-2xl p-2 my-4 text-justify">
                                Transportación redonda: Chetumal – Bacalar 
                            </li>
                            <p className="text-sm my-4">
                                Total $24,000 MXN
                            </p>
                            <p className="text-xs">
                                **Tarifa Flex: flexible en cambio de fechas hasta con 5 días anticipación.
                            </p>
                            <p className="text-xs">
                                **Métodos de pago: transferencia, deposito, tarjeta débito y tarjeta de crédito hasta 6 MSI.
                            </p>
                        </ul>
                    </div>
                </div>
            </div>         
            <div 
            className="p-6 rounded-2xl"
            style={{
                height: '500px',
                backgroundImage: `url(${dockSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="h-full rounded-2xl shadow-2xl text-white p-10 grid sm:grid-cols-2 gap-4 cristal-container">
                <div className="h-full">
                    <GatsbyImage className="rounded-2xl h-full overflow-hidden" image={romance} alt="Imagen del paquete" />
                </div>
                <div 
                    className="overflow-y-scroll px-2"
                    style={{
                        maxHeight: '500px',
                    }}
                >
                    <h3 className="bg-beke bg-opacity-80 rounded-2xl p-4 text-lg text-center">
                        ESCAPADA ROMÁNTICA 3 DÍAS 2 NOCHES
                    </h3>
                    <p className="text-sm ring-2 ring-beke bg-beke bg-opacity-50 rounded-2xl p-2 my-4 text-justify">
                        Nada como una escapada romántica para reavivar la pasión y dejar de lado el estrés
                        de la vida cotidiana. Celebra tu aniversario,  o simplemente regálale a esa persona tan especial
                        una estancia romántica con una deliciosa cena a la luz de las velas.
                    </p>
                    <ul>
                        <li className="text-sm ring-2 ring-beke bg-beke bg-opacity-50 rounded-2xl p-2 my-4 text-justify">
                            Hospedaje a orilla de laguna.
                        </li>
                        <li className="text-sm ring-2 ring-beke bg-beke bg-opacity-50 rounded-2xl p-2 my-4 text-justify">
                            Habitación con cama king size.
                        </li>
                        <li className="text-sm ring-2 ring-beke bg-beke bg-opacity-50 rounded-2xl p-2 my-4 text-justify">
                            Alimentos y Bebidas incluidas.
                            <Link to="/menu/">Ver menú</Link>
                        </li>
                        <li className="text-sm ring-2 ring-beke bg-beke bg-opacity-50 rounded-2xl p-2 my-4 text-justify">
                            Montaje romántico: pétalos de rosa, velas aromáticas, fresas con chocolate derretido y botella de vino espumoso.
                        </li>
                        <li className="text-sm ring-2 ring-beke bg-beke bg-opacity-50 rounded-2xl p-2 my-4 text-justify">
                            Experiencia en velero.
                        </li>
                        <li className="text-sm ring-2 ring-beke bg-beke bg-opacity-50 rounded-2xl p-2 my-4 text-justify">
                            Cena temática. (mar & tierra)
                        </li>
                        <p className="text-sm my-4">
                            Total $24,000 MXN
                        </p>
                        <p className="text-xs">
                            **Tarifa Flex: flexible en cambio de fechas hasta con 5 días anticipación.
                        </p>
                        <p className="text-xs">
                            **Métodos de pago: transferencia, deposito, tarjeta débito y tarjeta de crédito hasta 6 MSI.
                        </p>
                    </ul>
                </div>
            </div>
        </div>         
        </>
    )
}

const destinationRender = (destiny, data) => {
    switch (destiny) {
        case 'bacalar':
            return <Bacalar data={data} />
            break;
    
        default:
            return
            break;
    }
}

const Package = (props) => {
    
    const destiny = props.location.state.destination
    const data = props.data

    return (
        <Layout>
            <div className="bg-gray-800">
                <div className="max-w-screen-lg mx-auto py-12">
                    {destinationRender(destiny, data)}
                </div>
            </div>
        </Layout>
    )

}

export default Package

export const pageQuery = graphql `
    query {
        adventure: file(relativePath: {eq: "aventura.png"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 900
                    placeholder: BLURRED
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        romance: file(relativePath: {eq: "cena-romantica.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 900
                    placeholder: BLURRED
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        dock: file(relativePath: {eq: "2.jpg"}) {
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
    }
`