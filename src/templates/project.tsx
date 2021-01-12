import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FluidObject } from 'gatsby-image';

import Layout from '../components/layout';
import { IRichText, ISiteMetaData, ProjectFilters } from '../pages';
import Projet from '../components/projet';

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
    site: { siteMetadata: ISiteMetaData };
    next?: string;
  };
  pageContext: {
    slug: string;
    next?: string;
  };
}

const ProjetTemplate: React.FC<IProjectTemplateProps> = ({ data, pageContext }) => {
  console.log(data);
  const projet = data.contentfulProjet;
  const siteTitle = data.site.siteMetadata.title;
  const nextProject = pageContext.next;
  return (
    <Layout>
      <>
        <Helmet title={`${projet.title} | ${siteTitle}`} />
        <Projet projet={projet} nextProject={nextProject} />
      </>
    </Layout>
  );
};
export default ProjetTemplate;

export const query = graphql`
  query ProjetBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
          ...GatsbyContentfulFluid
        }
      }
      imagesPreview: images {
        title
        fluid(maxWidth: 250, maxHeight: 200, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid
        }
      }
      images {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
