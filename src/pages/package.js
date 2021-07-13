import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import PackageCard from '../components/PackageCard'
import transitionPromise from '../hooks/transitionPromise'

const HotelPackages = ({ hotel, packages }) => {
    const [elements, setElements] = useState(
        Array(packages.length)
        .fill(0)
        .map(() => React.createRef())
    )

    const [packagesAreDismissed, setPackagesDismissedState] = useState(false)

    // const dismissPackages = (index) => {
    //     return new Promise (  async resolve => {
    //             for(let i = 0; i < elements.length; i++) {
    //                 if(elements[i] !== elements[index] && elements[i].current !== null){
    //                     try {
    //                         const elementTransition = await transitionPromise(elements[i].current, 'transform', 'scale(0.5)')
    //                         const elementfullOpacity = await transitionPromise(elements[i].current, 'opacity', '0')
    //                         const displayNone = elements[i].current.style.display = 'none'
    //                     } catch (error) {
    //                         console.log(error)
    //                     }
    //                 }
    //             }
    //             setPackagesDismissedState(!packagesAreDismissed)
    //             resolve() 
    //         } 
    //     ) 
    // }

    return (
        <>
            <h1 className="text-center mb-12 text-white sm:text-5xl text-3xl font-bold">Paquetes en {hotel}</h1>
            
            <div className={`flex w-full gap-6`}>
                {
                    packages.map(({ node: hotelPackage }, index) => {
                        const cover = hotelPackage.frontmatter.cover
                        const include = hotelPackage.frontmatter.include
                        if (hotelPackage.frontmatter.hotel === hotel) {
                            return <PackageCard key={index} elementIndex={index} ref={elements[index]} cover={cover} title={hotelPackage.frontmatter.title} includes={include} />
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
                    <HotelPackages hotel={destination} packages={packages} />
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
    }
`