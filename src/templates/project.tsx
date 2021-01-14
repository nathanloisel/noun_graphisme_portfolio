import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import Layout from '../components/layout';
import { IRichText, ProjectFilters } from '../pages';
import Projet from '../components/projet';
import SEO from '../components/seo';

export interface IGatsbyFile {
  contentType: 'image/svg+xml' | 'image/png' | 'image/jpeg' | 'video/mp4';
  details: {
    size: number;
  };
  fileName: string;
  url: string;
}
export interface IGatsbyContentfulImage {
  title: string;
  file: IGatsbyFile;
  fluid?: FluidObject;
  preview?: FluidObject;
  svg?: {
    content: string;
  };
}

export interface IProject {
  title: string;
  sousTitre: string;
  category: ProjectFilters;
  description: IRichText;
  publishDate: string;
  isVerticalHeroImage?: boolean;
  client?: string;
  images?: Array<IGatsbyContentfulImage>;
  heroImage: IGatsbyContentfulImage;
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
        preview: fluid(quality: 80, maxWidth: 827, maxHeight: 410, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyContentfulFluid
        }
        svg {
          content
        }
        file {
          url
          details {
            size
          }
          fileName
          contentType
        }
      }
      images {
        title
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyContentfulFluid
        }
        preview: fluid(quality: 80, maxWidth: 250, maxHeight: 200, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        svg {
          content
        }
      }
    }
  }
`;
