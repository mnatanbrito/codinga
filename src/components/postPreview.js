import React from 'react';
import { Link } from 'gatsby';

import '../styles/postPreview.css';
import { rhythm, scale } from '../utils/typography';
import { formatDate } from '../utils/date';
import colors from '../colors';

const PostPreview = node => {
  const title = node.frontmatter.title || node.fields.slug;
  return (
    <article key={node.fields.slug} className="post-preview-wrapper">
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 12),
          }}
        >
          <Link
            style={{ boxShadow: `none`, color: colors.titleColor }}
            to={node.fields.slug}
          >
            {title}
          </Link>
        </h3>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1/2),
          }}
        >
          {formatDate(node.frontmatter.date)}
        </p>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  );
};

export default PostPreview;
