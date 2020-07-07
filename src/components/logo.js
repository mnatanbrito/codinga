import React from 'react';

import '../styles/logo.css';
import logoImg from '../../content/assets/logo_codinga.png';

const BlogLogo = ({ title }) => {
  // return <img src={logoImg} className="logo" />
  return (
    <div>
      <h1>
        <span
          style={{
            color: '#102335',
          }}
        >
          C
        </span>
        <span
          style={{
            color: '#1D3A4B',
          }}
        >
          o
        </span>
        <span
          style={{
            color: '#345362',
          }}
        >
          d
        </span>
        <span
          style={{
            color: '#5B7985',
          }}
        >
          i
        </span>
        <span
          style={{
            color: '#96b3b9',
          }}
        >
          n
        </span>
        <span
          style={{
            color: '#bdd9dc',
          }}
        >
          g
        </span>
        <span
          style={{
            color: '#d0ecee',
          }}
        >
          a
        </span>
      </h1>
      <p>Mais mandinga do que código</p>
    </div>
  );
};

export default BlogLogo;
