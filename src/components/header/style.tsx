import styled from 'styled-components';
import Logo from '../logo';
import Navigation from '../navigation';
import SocialNetworks from '../social-networks';

export const HeadWrapper = styled.header`
  display: flex;
  position: relative;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
  flex-direction: column;
  `)}
`;

export const StyledNavigation = styled(Navigation)`
  position: absolute;
  bottom: 0;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
    position: relative;
    justify-content: center;
    margin-top: 20px;
  `)}
`;
export const StyledLogo = styled(Logo)`
  margin-right: auto;
  margin-left: auto;
`;
export const StyledSocials = styled(SocialNetworks)`
  position: absolute;
  right: 0;
  bottom: 0;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
    position: relative;
    justify-content: flex-end;
    margin-top: 20px;
  `)}
`;
