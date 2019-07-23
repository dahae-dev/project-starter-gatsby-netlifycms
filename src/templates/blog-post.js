import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import { HTMLContent } from "../components/content"

export const BlogPostTemplate = ({ seoTitle, author, title, tags, thumbnail, created_at, updated_at, content, contentComponent }) => (
  <Layout>
    <SEO title={seoTitle} />
    <Post
      author={author}
      title={title}
      tags={tags}
      thumbnail={thumbnail}
      created_at={created_at}
      updated_at={updated_at}
      content={content}
      contentComponent={contentComponent}
    />
  </Layout>
)

BlogPostTemplate.propTypes = {
  seoTitle: PropTypes.string,
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
  thumbnail: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BlogPost = ({ data }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const post = data.markdownRemark
  const { author, title, tags, thumbnail, created_at, updated_at } = post.frontmatter
  const seoTitle = `${title} - ${siteTitle}`

  return (
    <BlogPostTemplate
      seoTitle={seoTitle}
      author={author}
      title={title}
      tags={tags}
      thumbnail={thumbnail}
      created_at={created_at}
      updated_at={updated_at}
      content={post.html}
      contentComponent={HTMLContent}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author {
          name
          role
          avatar
          location
        }
        title
        tags
        thumbnail
        created_at(formatString: "YYYY.MM.DD HH:mm:ss")
        updated_at(formatString: "YYYY.MM.DD HH:mm:ss")
      }
    }
  }
`