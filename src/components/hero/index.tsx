import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Dots, ImageWrapper, VerticalCopyrights, Wrapper, Title } from './style';

export interface IHeroProps {
  homeImage: {
    title: string;
    fluid: FluidObject;
  };
  text?: string;
}

const Hero: React.FC<IHeroProps> = ({ homeImage, text }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img style={{ width: '100%' }} alt={homeImage.title} fluid={homeImage.fluid} />
        <VerticalCopyrights>© 2021 Noun graphisme. All Rights Reserved.</VerticalCopyrights>
        <Dots />
        {text && <Title>{text}</Title>}
      </ImageWrapper>
    </Wrapper>
  );
};
export default Hero;
