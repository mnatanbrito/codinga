import React from "react"
import { Link } from "gatsby"

import "../styles/postPreview.css"
import { rhythm } from "../utils/typography"
import { formatDate } from "../utils/date"

const PostPreview = node => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug} className="post-preview-wrapper">
      <header>
        <small>{formatDate(node.frontmatter.date)}</small>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link
            style={{ boxShadow: `none`, color: "#000080" }}
            to={node.fields.slug}
          >
            {title}
          </Link>
        </h3>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default PostPreview
