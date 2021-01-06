import React from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

interface IProjectPreviewProps {
    slug: string;
    title: string;
    image: {
      title: string;
      fluid: FluidObject;
    }
}

const ProjectPreview: React.FC<IProjectPreviewProps> = ({ slug, title, image }) => {
  return (
    <div>
      <Img alt={image.title} fluid={image.fluid} />
      <h3 >
        <Link to={`/projets/${slug}`}>{title}</Link>
      </h3>
    </div>
  );
}


export default ProjectPreview;
