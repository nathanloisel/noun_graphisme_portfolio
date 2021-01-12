import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import { FluidObject } from 'gatsby-image';

import Hero from '../components/hero';
import Layout from '../components/layout';
import HomeFilters from '../components/home-filters';
import HomeDescription from '../components/home-description';
import styled from 'styled-components';

export type IRichText = RenderRichTextData<ContentfulRichTextGatsbyReference>;

export enum ProjectFilters {
  Logo = 'logo',
  Identite = 'identite',
  Edition = 'edition',
  WebDesign = 'webdesign',
  MotionDesign = 'motiondesign',
}

export interface ISiteMetaData {
  title: string;
}

export interface IProjectPreview {
  title: string;
  fields: {
    slug: string;
  };
  category: string;
  previewImage: {
    title: string;
    fluid: FluidObject;
  };
}

export interface IBioImageContact {
  bio: IRichText;
  email: string;
  phone: string;
  facebook?: string;
  behance?: string;
  homeImage: {
    title: string;
    fluid: FluidObject;
  };
  projetsLabel: string;
  projetsImage: {
    title: string;
    fluid: FluidObject;
  };
  descriptionImage: {
    title: string;
    fluid: FluidObject;
  };
  address: IRichText;
}

const StyledHomeFilters = styled(HomeFilters)`
  margin-top: 28px;
`;

const StyledHomeDescription = styled(HomeDescription)`
  margin-top: 80px;
`;

interface IHomeProps {
  data: {
    site: { siteMetadata: ISiteMetaData };
    allContentfulBioImageContact: {
      edges: Array<{ node: IBioImageContact }>;
    };
  };
  location: Location;
}

const Home: React.FC<IHomeProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [meta] = data.allContentfulBioImageContact.edges;
  return (
    <Layout facebookUrl={meta.node.facebook} behanceUrl={meta.node.behance}>
      <Helmet title={siteTitle} />
      <Hero homeImage={meta.node.homeImage} />
      <StyledHomeFilters />
      <StyledHomeDescription bio={meta.node.bio} descriptionImage={meta.node.descriptionImage} />
    </Layout>
  );
};
export default Home;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBioImageContact(filter: { contentful_id: { eq: "2nH2prijQalfGjAOnIQfbt" } }) {
      edges {
        node {
          facebook
          behance
          bio {
            raw
          }
          descriptionImage {
            title
            fluid(maxWidth: 617, maxHeight: 260, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          homeImage {
            title
            fluid(maxWidth: 1285, maxHeight: 409, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
