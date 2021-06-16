import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { StarIcon } from '@heroicons/react/solid'

import Layout from '../components/Layout'
import PackageCard from '../components/PackageCard'

const Pier = ({data}) => {
    const adventure = getImage(data.adventure)
    const romance = getImage(data.romance)

    return (
        <>
            <h1 className="text-center mb-12 text-white sm:text-5xl text-3xl font-bold">Paquetes en Pier Bacalar</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <PackageCard cover={romance} title="ESCAPADA ROMÁNTICA 4 DÍAS 3 NOCHES" />
                <PackageCard cover={adventure} title="AVENTURA TOTAL 4 DÍAS 3 NOCHES" />
            </div>
        </>
    )
}

const CasaMaya = ({ data }) => {
    const adventure = getImage(data.adventure)
    const cm = getImage(data.cm)
    const bc = getImage(data.bc)

    return (
        <>
            <h1 className="text-center mb-12 text-white sm:text-5xl text-3xl font-bold">Paquetes en Casa Maya Holbox</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <PackageCard cover={adventure} title="Aventura total 5 DÍAS 4 NOCHES" />
                <PackageCard cover={cm} title="Relax - Isla Paradisíaca" />
                <PackageCard cover={bc} title="Experiencia Total" />
            </div>
        </>
    )
}

const Xo = ({ data }) => {
    
    const bc = getImage(data.bc)
    const xo = getImage(data.xo)

    return (
        <>
            <h1 className="text-center mb-12 text-white sm:text-5xl text-3xl font-bold">Paquetes en XO Bacalar</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <PackageCard cover={xo} title="Chill- Relax - Vive" />
            </div>
        </>
    )
}

const destinationRender = (destiny, data) => {
    switch (destiny) {
        case 'bacalar':
            return <Pier data={data} />
            break;
    
        case 'cm':
            return <CasaMaya data={data} />
            break;

        case 'xo':
            return <Xo data={data} />
            break;

        default:
            return
            break;
    }
}

const Package = ({data, location}) => {

    const { state = {} } = location
    
    const {destination} = state
    
    return (
        <Layout>
            <div className="bg-gray-800">
                <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-0">
                    {destinationRender(destination, data)}
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
        cm: file(relativePath: {eq: "casamaya6.png"}) {
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
        bc: file(relativePath: {eq: "casa-maya-portafolio.png"}) {
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
        xo: file(relativePath: {eq: "xo-laguna.png"}) {
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
    }
`