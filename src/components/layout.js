import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Logo from './logo';
import Avatar from './avatar';
import TwoColumnContent from './twoColumContainer';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(50),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <TwoColumnContent
        leftComponent={<Avatar />}
        rightComponent={
          <div>
            <header>
              <Logo title={title} />
            </header>
            <main>{children}</main>
            <footer>© {new Date().getFullYear()}</footer>
          </div>
        }
      />
    </div>
  );
};

export default Layout;
