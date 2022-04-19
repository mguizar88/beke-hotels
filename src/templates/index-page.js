import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import image from '../img/building.svg'

const IndexPageTemplate = ({ data }) => {
  

  return(
    <div className="max-w-screen-sm mx-auto flex flex-col h-screen justify-center items-center">
      <img src={image} className="w-full" alt="Construcción" />
      <h2 className="text-3xl text-beke font-bold text-center">Sitio en construcción</h2>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPageTemplate

