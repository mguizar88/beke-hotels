import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { StarIcon } from '@heroicons/react/solid'

import Layout from '../components/Layout'
import PackageCard from '../components/PackageCard'

const HotelPackages = ({ hotel, packages, data }) => {

    const ad = getImage(data.adventure)
    let packageRef = null
    const setRef = ref => packageRef = ref 
    
    return (
        <>
            <h1 className="text-center mb-12 text-white sm:text-5xl text-3xl font-bold">Paquetes en {hotel}</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {
                    packages.map(({ node: hotelPackage }, index) => {
                        const cover = hotelPackage.frontmatter.cover
                        if (hotelPackage.frontmatter.hotel === hotel) {
                            return <PackageCard key={index} ref={setRef} cover={cover} title={hotelPackage.frontmatter.title} />
                        }   
                    })
                }
            </div>
            
        </>
    )
}

const Package = ({data, location}) => {

    const { state = {} } = location
    
    const {destination} = state

    const {edges: packages} = data.packages
    
    return (
        <Layout>
            <div className="bg-gray-800">
                <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-0">
                    <HotelPackages hotel={destination} packages={packages} data={data} />
                </div>
            </div>
        </Layout>
    )

}

export default Package

export const pageQuery = graphql `
    query {
        hotels: allMarkdownRemark(filter: {frontmatter: {templateKey: { eq: "hotel-page" }}}) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                }
            }
        }
        packages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(packages)/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        duration
                        hotel
                        cover{
                            alt
                            image {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 640
                                        placeholder: BLURRED
                                        formats: [WEBP]
                                        quality: 100
                                    )
                                }
                            }
                        }
                        include {
                            title
                            imageObject {
                                alt
                                image {
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
                        }
                    }
                }
            }
        }
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