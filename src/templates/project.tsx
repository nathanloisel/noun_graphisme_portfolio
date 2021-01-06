import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import {IProjectPreview, ISiteMetaData} from '../pages';
import RichText from '../components/rich-text';

interface IProjectTemplateProps {
  location: Location;
  data: {
    contentfulProjet: IProjectPreview;
    site: {siteMetadata: ISiteMetaData};
  }
}

const ProjetTemplate: React.FC<IProjectTemplateProps> =({data, location}) => {

  const projet = data.contentfulProjet;
  const siteTitle = data.site.siteMetadata.title;
  const hero = projet.heroImage;
  return (
    <Layout location={location}>
      <div>
        <Helmet title={`${projet.title} | ${siteTitle}`} />
        <div>
          <h1>{projet.title}</h1>
          <span>project.category</span>
          <h3>{projet.sousTitre}</h3>
          <RichText richText={projet.description} />
          <div>
            <p>DATE: {projet.publishDate}</p>
            {projet.client && <p>CLIENT : {projet.client}</p>}
          </div>
          <button>Projet suivant</button>
        </div>
        <div>
          <div>
            <Img
              alt={hero.title}
              fluid={hero.fluid}
            />
          </div>
          <div>
            {/* images */}
          </div>
        </div>
        <div className="wrapper">
          <p
            style={{
              display: 'block',
            }}
          >
            {projet.publishDate}
          </p>
        </div>
      </div>
    </Layout>
  );
}
export default ProjetTemplate

export const query = graphql`
  query ProjetBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProjet(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        title
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      description {
        raw
      }
    }
  }
`
