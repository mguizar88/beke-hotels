import { useStaticQuery, graphql } from "gatsby"

const useNavigationData = () => {
   
    const { parents, navItems } = useStaticQuery(
        graphql`
            query NAVIGATION_DATA{
                parents: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(config)/"}}){
                    edges {
                        node {
                            frontmatter {
                                title
                                url
                                logo {
                                    childImageSharp {
                                        gatsbyImageData(
                                            layout: CONSTRAINED
                                            width: 220
                                            placeholder: BLURRED 
                                            formats: [WEBP]
                                            quality: 100
                                        )
                                    }
                                }
                                rightitems {
                                    title
                                    url
                                    logo {
                                        publicURL
                                    }
                                }
                            }
                        }
                    }
                }
                navItems: allMarkdownRemark(filter: {frontmatter: {onnav: {eq: true}}}) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                onnav
                                navparent
                            }
                        }
                    }
                }
            }
        `
    )
    return { parents, navItems }
}

export default useNavigationData