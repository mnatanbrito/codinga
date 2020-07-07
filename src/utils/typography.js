import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = ({ rhythm }, options) => {
  return {
    body: {
      fontFamily: '20px',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    h1: {
      fontFamily: 'Merriweather',
      marginBottom: rhythm(1 / 2),
    },
    'h2,h3': {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1 / 2),
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography({
  ...Wordpress2016,
  scaleRatio: 3,
  baseFontSize: '18px',
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
