import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import RichText from './rich-text'


interface IHeroProps {
  homeImage: {
    title: string;
    fluid: FluidObject;
  };
  bio: string;
}

const Hero: React.FC<IHeroProps> = ({ homeImage, bio }) => (
  <div >
    <Img
      alt={homeImage.title}
      fluid={homeImage.fluid}
    />
    <div>
      <RichText richText={bio} />
    </div>
  </div>
);


export default Hero;
