import React from 'react';
import { graphql } from 'gatsby';
import { IBioImageContact } from '.';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/rich-text';
import SEO from '../components/seo';
// @ts-ignore
import Img, { FluidObject } from 'gatsby-image';

interface IContactProps {
  data: {
    allContentfulBioImageContact: {
      edges: Array<{ node: IBioImageContact }>;
    };
    map: {
      childImageSharp: {
        fluid: FluidObject;
      };
    } | null;
  };
  location: Location;
}

const Title = styled.h1`
  text-align: center;
  margin-top: 65px;
  color: ${({ theme }) => theme.color.dark_grey.hex};
`;
const MapContainer = styled.div`
  width: 100%;
  margin-top: 75px;
`;
const StyledRichText = styled(RichText)`
  p {
    font-size: ${({ theme }) => theme.typo.l};
    font-weight: bold;
    color: ${({ theme }) => theme.color.dark_grey.hex};
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      align-items: center;
      flex-direction: column;
      margin-top: 40px;
      height: 100%;
      justify-content: space-around;
      min-height: 40vh;
  `)}

  a {
    color: ${({ theme }) => theme.color.dark_grey.hex};
  }
`;

const Contact: React.FC<IContactProps> = ({ data }) => {
  const [meta] = data.allContentfulBioImageContact.edges;
  console.log(data.map);
  return (
    <Layout facebookUrl={meta.node.facebook} behanceUrl={meta.node.behance}>
      <SEO title={'Contact'} />
      <main>
        <Title>Un projet ? Besoin d’un devis ? Contactez-moi</Title>
        <MapContainer>{data.map && <Img fluid={data.map.childImageSharp.fluid} />}</MapContainer>
        <Details itemScope itemType="https://schema.org/Business">
          <h3>
            <a href={`mailto:${meta.node.email}?subject=Demande de devis`} itemProp="email">
              {meta.node.email}
            </a>
          </h3>
          <h3>
            <a href={`tel:${meta.node.phone}`} itemProp="telephone">
              {meta.node.phone}
            </a>
          </h3>

          <StyledRichText richText={meta.node.address} itemProp="address" />
        </Details>
      </main>
    </Layout>
  );
};
export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    map: file(relativePath: { eq: "carte-chablais.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    allContentfulBioImageContact(filter: { contentful_id: { eq: "2nH2prijQalfGjAOnIQfbt" } }) {
      edges {
        node {
          facebook
          behance
          email
          phone
          address {
            raw
          }
        }
      }
    }
  }
`;
