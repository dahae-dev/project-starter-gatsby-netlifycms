import React from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const IndexPageTemplate = ({ title, heading, description, src, alt, content }) => (
  <Layout>
    <SEO title={title} />
    <h1>{heading}</h1>
    <p>{description}</p>
    <img src={src} alt={alt} />
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <Link to="/blog/">>> Go to blog page</Link>
  </Layout>
)

const IndexPage = ({ data }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const { frontmatter, html } = data.markdownRemark
  const { title, intro, image } = frontmatter
  const editedTitle = `${title} - ${siteTitle}`

  return (
    <IndexPageTemplate
      title={editedTitle}
      heading={intro.heading}
      description={intro.description}
      src={image.src}
      alt={image.alt}
      content={html}
    />
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
