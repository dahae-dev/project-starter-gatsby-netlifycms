import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BlogPostTemplate  
        author={data.author}
        title={data.title}
        tags={data.tags}
        thumbnail={data.thumbnail}
        created_at={data.created_at}
        updated_at={data.updated_at}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default BlogPostPreview
