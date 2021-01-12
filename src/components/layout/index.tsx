import React from 'react';
import { StyledHeader, Wrapper } from './style';

interface ILayoutProps {
  behanceUrl?: string;
  facebookUrl?: string;
}

const Layout: React.FC<ILayoutProps> = ({children, facebookUrl, behanceUrl}) => (
  <Wrapper>
    <StyledHeader facebookUrl={facebookUrl} behanceUrl={behanceUrl}/>
    {children}
  </Wrapper>
);
export default Layout;
