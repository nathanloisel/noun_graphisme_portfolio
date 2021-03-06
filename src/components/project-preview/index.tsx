import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Plus, StyledLink, Title } from './style';

export interface IProjectPreviewProps {
  slug: string;
  title: string;
  image: {
    title: string;
    fluid?: FluidObject;
    svg?: {
      content: string;
    };
  };
  className?: string;
}

const ProjectPreview: React.FC<IProjectPreviewProps> = ({ slug, title, image, className }) => {
  return (
    <StyledLink to={`/projets/${slug}`} className={className}>
      {image.fluid && <Img alt={image.title} fluid={image.fluid} />}
      {image.svg && <div dangerouslySetInnerHTML={{ __html: image.svg.content }} />}
      <div className="project-preview-inner">
        <Plus>+</Plus>
        <Title>{title}</Title>
      </div>
    </StyledLink>
  );
};

export default ProjectPreview;
