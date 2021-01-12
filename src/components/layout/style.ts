import styled from 'styled-components';
import Header from '../header';

export const Wrapper = styled.div`
  padding: 30px 75px 80px 75px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
  padding: 30px 15px 80px 15px;
  `)}
`;

export const StyledHeader = styled(Header)`
  margin-bottom: 20px;
`;
