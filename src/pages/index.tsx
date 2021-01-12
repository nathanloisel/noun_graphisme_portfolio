import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import { FixedObject, FluidObject } from 'gatsby-image';

import Hero from '../components/hero';
import Layout from '../components/layout';
import HomeFilters from '../components/home-filters';
import HomeDescription from '../components/home-description';
import styled from 'styled-components';
import SEO from '../components/seo';

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
  description: string;
  siteUrl: string;
  keywords: string;
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
    allContentfulBioImageContact: {
      edges: Array<{ node: IBioImageContact }>;
    };
  };
  location: Location;
}

const Home: React.FC<IHomeProps> = ({ data, location }) => {
  const [meta] = data.allContentfulBioImageContact.edges;
  return (
    <Layout facebookUrl={meta.node.facebook} behanceUrl={meta.node.behance}>
      <SEO />
      <Hero homeImage={meta.node.homeImage} />
      <main>
        <StyledHomeFilters />
        <StyledHomeDescription bio={meta.node.bio} descriptionImage={meta.node.descriptionImage} />
      </main>
    </Layout>
  );
};
export default Home;

export const pageQuery = graphql`
  query HomeQuery {
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
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          homeImage {
            title
            fluid(maxWidth: 1285, maxHeight: 409, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
