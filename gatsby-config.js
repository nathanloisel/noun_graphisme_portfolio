require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the access token need to be provided.');
}

module.exports = {
  siteMetadata: {
    title: 'Noun graphisme Freelance - Haute Savoie 74',
    siteUrl: process.env.NODE_ENV === 'development' ? `http://localhost:8000` : `https://noun-graphisme.fr`,
    description: `Je suis Lou ! Pour vous, je crée une identité visuelle qui vous ressemble. Pour vos projets d'éditions ou digitaux, je vous accompagne dans la conception de vos supports de communication adaptés depuis la Haute-Savoie.`,
    keywords: `graphiste indépendant, freelance, studio de création, graphisme, design, webdesign, web, édition, publicité, logotype, illustration, communication, Haute Savoie, refonte graphique, motion design`,
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-sitemap',
    `gatsby-plugin-netlify`,
    'gatsby-transformer-remark',
    `gatsby-transformer-inline-svg`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-slug-field`,
      options: {
        source: ['title'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-4EPED7H1BZ',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Noun Graphisme Portfolio`,
        short_name: `Noun Graphisme`,
        start_url: `/`,
        background_color: `#FFF`,
        description: `Noun Graphisme Portfolio: Tous à propos de mes réalisations graphiques.`,
        theme_color: `#FFF`,
        display: `standalone`,
        icon: 'src/images/icon-512x512.png',
        icons: [
          {
            src: 'src/images/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any maskable',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
