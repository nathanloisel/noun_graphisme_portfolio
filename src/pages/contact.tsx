import React from 'react';
import { graphql } from 'gatsby';
import { IBioImageContact, ISiteMetaData } from '.';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/rich-text';
import SEO from '../components/seo';

interface IContactProps {
  data: {
    site: { siteMetadata: ISiteMetaData };
    allContentfulBioImageContact: {
      edges: Array<{ node: IBioImageContact }>;
    };
  };
  location: Location;
}

const Title = styled.h1`
  text-align: center;
  margin-top: 65px;
  color: ${({ theme }) => theme.color.dark_grey.hex};
`;
const StyledRichText = styled(RichText)`
  p {
    font-size: ${({ theme }) => theme.typo.l};
    font-weight: bold;
    color: ${({ theme }) => theme.color.dark_grey.hex};
  }
`;
const Details = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
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

const Contact: React.FC<IContactProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [meta] = data.allContentfulBioImageContact.edges;
  return (
    <Layout facebookUrl={meta.node.facebook} behanceUrl={meta.node.behance}>
      <SEO title={siteTitle} />
      <Title>Un projet ? Besoin d’un devis ? Contactez-moi</Title>
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
    </Layout>
  );
};
export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
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
