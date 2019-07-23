import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Post from "../../components/post"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
    
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        {posts.map(({ node }) => (
          <Post
            key={node.id}
            to={node.fields.slug}
            author={node.frontmatter.author}
            title={node.frontmatter.title}
            tags={node.frontmatter.tags}
            thumbnail={node.frontmatter.thumbnail}
            created_at={node.frontmatter.created_at}
            updated_at={node.frontmatter.updated_at}
            content={node.excerpt}
          />
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___created_at], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
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
          fields {
            slug
          }
          excerpt(pruneLength: 180)
        }
      }
    }
  }
`