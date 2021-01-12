import * as React from 'react';
import { HeadWrapper, StyledLogo, StyledNavigation, StyledSocials } from './style';

export interface IHeaderProps {
  facebookUrl?: string;
  behanceUrl?: string;
  className?: string;
}

const Header: React.FC<IHeaderProps> = ({ facebookUrl, behanceUrl, className }) => {
  return (
    <HeadWrapper className={className}>
      <StyledLogo width="155px" />
      <StyledNavigation />
      <StyledSocials facebookUrl={facebookUrl} behanceUrl={behanceUrl} />
    </HeadWrapper>
  );
};

export default Header;
