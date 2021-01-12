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
    fluid: FluidObject;
  }>;
  imagesPreview: Array<{
    title: string;
    fluid: FluidObject;
  }>;
  heroImage: {
    title: string;
    fluid: FluidObject;
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
  return (
    <Layout>
      <>
        <SEO
          title={projet.title}
          description={`${projet.title} - ${projet.sousTitre} - ${projet.description}`}
          image={projet.heroImage.fluid.src}
        />
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
      }
      imagesPreview: images {
        title
        fluid(maxWidth: 250, maxHeight: 200, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      images {
        title
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`;
