/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { ISiteMetaData } from '../pages';
// @ts-ignore
import ogImage from '../images/noun_graphisme_og_image.png';

interface SEOProps {
  description?: string;
  meta?: [];
  title?: string;
  image?: string;
}

interface QueryResult {
  site: {
    siteMetadata: ISiteMetaData;
  };
}

const SEO: React.FC<SEOProps> = ({ description, meta, title, image }) => {
  const {
    site: { siteMetadata: metadata },
  } = useStaticQuery<QueryResult>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
          }
        }
      }
    `,
  );
  const ogTitle = title ? `${title} | ${metadata.title}` : metadata.title;
  const img = image || ogImage;
  const metaDescription = description || metadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang: 'fr',
      }}
      title={title}
      defaultTitle={metadata.title}
      titleTemplate={`%s | ${metadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:locale`,
          content: 'fr',
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: img && metadata.siteUrl + img,
        },
        {
          property: `og:url`,
          content: metadata.siteUrl,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `robots`,
          content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        },
        {
          property: `keywords`,
          content: metadata.keywords,
        },
      ].concat(meta || [])}
    />
  );
};

export default SEO;
