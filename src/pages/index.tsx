import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import { FluidObject, GatsbyImageFluidProps } from 'gatsby-image';

import Hero from '../components/hero';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

export interface ISiteMetaData {
  title: string;
}

export interface IProjectPreview {
  contentful_id: string;
  title: string;
  slug: string;
  category: string;
  sousTitre: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  publishDate: string;
  client?: string;
  heroImage: {
    title: string;
    fluid: FluidObject;
  };
  images: Array<{
    title: string;
    fluid: FluidObject;
  }>;
}

export interface IBioImageContact {
  bio: string;
  email: string;
  telephone: string;
  facebook: string;
  homeImage: {
    title: string;
    fluid: FluidObject;
  };
  descriptionImage: GatsbyImageFluidProps;
  address: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

interface IHomeProps {
  data: {
    site: {siteMetadata: ISiteMetaData};
    allContentfulProjet: {edges: Array<{node: IProjectPreview}>};
    allContentfulBioImageContact: {
      edges: Array<{node: IBioImageContact }>;
    };
  }
  location: Location;
}


const Home: React.FC<IHomeProps> = ({data, location}) => {

  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allContentfulProjet.edges;
  const [meta] = data.allContentfulBioImageContact.edges;
  console.log(projects);
  return (
      <div style={{ background: '#fff' }}>
      <Helmet title={siteTitle} />
      <Hero homeImage={meta.node.homeImage} bio={meta.node.bio} />
      <div className="wrapper">
        <h2 className="section-headline">Recent articles</h2>
        <ul className="article-list">
          {projects.map(({ node }) => (
              <li key={node.contentful_id}>
                <ProjectPreview slug={node.slug} title={node.title} image={node.heroImage} />
              </li>
          ))}
        </ul>
      </div>
      </div>
  );
}

export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProjet(filter: {node_locale: {eq: "fr-FR"}}, sort: { fields: [publishDate, title ], order: DESC }) {
      edges {
        node {
          title
          sousTitre
          contentful_id
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            title
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          images {
            title
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            raw
          }
        }
      }
    }
    allContentfulBioImageContact(
      filter: { contentful_id: { eq: "2nH2prijQalfGjAOnIQfbt" } }
    ) {
      edges {
        node {
          bio {
            raw
          }
          descriptionImage {
            title
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
          homeImage {
            title
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
