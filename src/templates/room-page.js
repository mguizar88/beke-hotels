import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const RoomPageTemplate = ({data}) => {
    const {frontmatter} = data.markdownRemark
    const featuredImage = getImage(frontmatter.featuredimage)
    const roomImage = getImage(frontmatter.roomimage) 
    const title = frontmatter.title
    const shortDescription = frontmatter.shortdescription
    const description = frontmatter.description
    const amenities = frontmatter.amenities

    return (
        <Layout>
            <div className="h-96">
                <GatsbyImage 
                    className="h-full"
                    image={featuredImage} 
                    alt={title} />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1">
                <div 
                    className="bg-beke sm:h-80 h-auto flex 
                        items-center justify-center sm:justify-end p-16"
                >
                    <h1 
                        className="text-white text-lg 
                            sm:text-2xl"
                    >
                        {title}
                    </h1>
                </div>
                <div 
                    className="sm:h-80 h-auto flex items-center 
                        p-16"
                >
                    <p 
                        className="text-beke text-lg"
                    >
                        {shortDescription}
                    </p>
                </div>
                <div 
                    className="flex items-center justify-center 
                        sm:justify-end p-16 text-justify  sm:h-80 h-auto"
                >
                    <p className="text-beke text-lg">
                        {description}
                    </p>
                </div>
                <div className="sm:h-80 h-auto">
                    <GatsbyImage 
                        className="h-full"
                        image={roomImage} 
                        alt={title} 
                    />
                </div>
            </div>
            <div className="p-16">
                <h2 
                    className="text-beke sm:text-2xl 
                        text-lg text-center mb-4 sm:mb-8"
                >
                    Amenidades
                </h2>
                <div className="flex flex-col sm:flex-row justify-center">
                    {amenities &&
                        amenities.map(({amenity}, index) => (
                            <p 
                                key={index}
                                className="text-beke mx-2 p-4
                                    border-2 border-beke my-2
                                    sm:my-0 rounded-md 
                                    hover:bg-beke
                                    hover:text-white 
                                    hover:border-white
                                    transition-colors
                                    duration-500 ease-in-out"
                            >
                                {amenity}
                            </p>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default RoomPageTemplate

export const PageQuery = graphql`
    query RoomByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            frontmatter {
                title
                shortdescription
                description
                amenities {
                    amenity
                }
                featuredimage {
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
                roomimage {
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
        }
    }
`