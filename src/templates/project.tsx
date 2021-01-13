import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import Layout from '../components/layout';
import { IRichText, ProjectFilters } from '../pages';
import Projet from '../components/projet';
import SEO from '../components/seo';

export interface IProject {
  title: string;
  sousTitre: string;
  category: ProjectFilters;
  description: IRichText;
  publishDate: string;
  client?: string;
  images: Array<{
    title: string;
    fluid?: FluidObject;
    svg?: { content: string };
    preview?: FluidObject;
  }>;
  heroImage: {
    title: string;
    fluid?: FluidObject;
    svg?: { content: string };
  };
}

interface IProjectTemplateProps {
  location: Location;
  data: {
    contentfulProjet: IProject;
    next?: string;
  };
  pageContext: {
    slug: string;
    next?: string;
  };
}

const ProjetTemplate: React.FC<IProjectTemplateProps> = ({ data, pageContext }) => {
  const projet = data.contentfulProjet;
  const nextProject = pageContext.next;
  const image = projet.heroImage.fluid ? projet.heroImage.fluid.src : projet.heroImage.svg?.content;
  return (
    <Layout>
      <>
        <SEO title={projet.title} description={`${projet.title} - ${projet.sousTitre} - ${projet.description}`} image={image} />
        <Projet projet={projet} nextProject={nextProject} />
      </>
    </Layout>
  );
};
export default ProjetTemplate;

export const query = graphql`
  query ProjetBySlug($slug: String!) {
    contentfulProjet(fields: { slug: { eq: $slug } }) {
      title
      category
      sousTitre
      client
      publishDate(formatString: "MMMM YYYY")
      description {
        raw
      }
      heroImage {
        title
        fluid(maxWidth: 827, maxHeight: 410, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        svg {
          content
        }
      }
      images {
        title
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        preview: fluid(maxWidth: 250, maxHeight: 200, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        svg {
          content
        }
      }
    }
  }
`;
