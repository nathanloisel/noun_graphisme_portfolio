import * as React from 'react';
import Img from 'gatsby-image';

import { IGatsbyContentfulImage } from '../../templates/project';

export interface IProjectHeroProps {
  image: IGatsbyContentfulImage;
}

const ProjectHero: React.FC<IProjectHeroProps> = ({ image }) => {
  if (image.preview) return <Img alt={image.title} fluid={image.preview} />;
  if (image.svg) return <div dangerouslySetInnerHTML={{ __html: image.svg.content }} />;
  if (image.file.contentType === 'video/mp4')
    return (
      <video preload="metadata" controls playsInline>
        <source src={image.file.url} type={image.file.contentType} />
        your browser does not support the video tag.
      </video>
    );
  return null;
};

export default ProjectHero;
