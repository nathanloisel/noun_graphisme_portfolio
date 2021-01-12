import * as React from 'react';
import { FluidObject } from 'gatsby-image';
import { IRichText } from '../../pages';
import { Wrapper, StyledImg, StyledRichText } from './style';

export interface IHomeDescriptionProps {
  descriptionImage: {
    title: string;
    fluid: FluidObject;
  };
  bio: IRichText;
  className?: string;
}

const HomeDescription: React.FC<IHomeDescriptionProps> = ({ descriptionImage, bio, className }) => {
  //    const [state, setstate] = useState(undefined);
  return (
    <Wrapper className={className}>
      {/* @ts-ignore */}
      <StyledImg alt={descriptionImage.title} fluid={descriptionImage.fluid} />
      <StyledRichText richText={bio} />
    </Wrapper>
  );
};

export default HomeDescription;
