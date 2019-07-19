import React from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const { frontmatter, html } = data.markdownRemark
  const { title, intro, image } = frontmatter
  const editedTitle = `${title} - ${siteTitle}`

  return (
    <Layout>
      <SEO title={editedTitle} />
      <h1>{intro.heading}</h1>
      <p>{intro.description}</p>
      <img src={image.src} alt={image.alt} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/page-2/">>> Go to second page</Link>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        intro {
          heading
          description
        }
        image {
          src
          alt
        }
      }
    }
  }
`
