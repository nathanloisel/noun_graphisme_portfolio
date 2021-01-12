import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledHeader, Wrapper } from './style';
import { theme } from '../../theme';
import { GlobalStyle } from '../../global-style';

interface ILayoutProps {
  behanceUrl?: string;
  facebookUrl?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, facebookUrl, behanceUrl }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Wrapper>
        <StyledHeader facebookUrl={facebookUrl} behanceUrl={behanceUrl} />
        {children}
      </Wrapper>
    </>
  </ThemeProvider>
);
export default Layout;
