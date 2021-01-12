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

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  title?: string;
  image?: string;
}

interface QueryResult {
  site: {
    siteMetadata: ISiteMetaData;
  };
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta, title, image }) => {
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
  console.log(metadata.title);
  const metaDescription = description || metadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang,
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
          content: title,
        },
        {
          property: `og:locale`,
          content: 'fr_FR',
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
          content: image && metadata.siteUrl + image,
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
