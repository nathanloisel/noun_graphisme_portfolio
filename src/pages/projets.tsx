import React from 'react';
import { graphql } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';
import { IBioImageContact, IProjectPreview } from '.';
import ProjectsContainer from '../containers/ProjectsContainer';
import SEO from '../components/seo';

interface IProjetsProps {
  data: {
    allContentfulProjet: { edges: Array<{ node: IProjectPreview }> };
    allContentfulBioImageContact: {
      edges: Array<{ node: IBioImageContact }>;
    };
  };
  location: Location;
}

const Projets: React.FC<IProjetsProps> = ({ data, location }) => {
  const [meta] = data.allContentfulBioImageContact.edges;
  const projects = React.useMemo(() => data.allContentfulProjet.edges.map((p) => p.node), [data.allContentfulProjet.edges]);
  return (
    <Layout>
      <SEO title={'Projets'} />
      <Hero homeImage={meta.node.projetsImage} text={meta.node.projetsLabel} />
      <ProjectsContainer projects={projects} email={meta.node.email} />
    </Layout>
  );
};

export default Projets;

export const pageQuery = graphql`
  query ProjetsQuery {
    allContentfulProjet(filter: { node_locale: { eq: "fr-FR" } }, sort: { fields: [publishDate, title], order: DESC }) {
      edges {
        node {
          title
          category
          publishDate(formatString: "MMMM Do, YYYY")
          previewImage {
            title
            fluid(maxWidth: 280, maxHeight: 260, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          fields {
            slug
          }
        }
      }
    }
    allContentfulBioImageContact(filter: { contentful_id: { eq: "2nH2prijQalfGjAOnIQfbt" } }) {
      edges {
        node {
          facebook
          behance
          email
          projetsLabel
          projetsImage {
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
