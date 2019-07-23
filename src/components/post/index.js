import React from "react"
import { Link } from "gatsby"
import { IoMdPricetags } from "react-icons/io"

import Content from "../content"
import Author from "../author"
import "./style.scss"

const Post = ({ to, author, title, created_at, updated_at, tags, thumbnail, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="post-container">
      <Author author={author} />
      <div className="post-header">
        {!!to
          ? 
          <Link to={to}>
            <div className="post-title">{title}</div>
          </Link>
          :
          <div className="post-title">{title}</div>
        }
        <div className="post-date">Created {created_at}</div>
        <div className="post-date">Updated {updated_at}</div>
        <div className="post-tags">
          <IoMdPricetags />
          {tags.join(', ')}
        </div>
      </div>
      <div className={!!to ? "post-body" : ""}>
        <div className={!!to ? "img-container" : "img-container-full"}>
          <img src={thumbnail} alt={title} width="100%" />
        </div>
        <PageContent className="post-content" content={content} />
      </div>
    </div>
  )
};

export default Post;
