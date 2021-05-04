import { useStaticQuery, graphql } from "gatsby"

export const useNavigationData = () => {
   
    const { navigationData } = useStaticQuery(
        graphql `
            query navigationData{
                parents: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(nav-parents)/"}}){
                    edges {
                        node {
                            frontmatter {
                                title
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
}