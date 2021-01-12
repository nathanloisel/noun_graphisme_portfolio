import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
`;
export const HeaderLink = styled(Link)`
  color: ${({ theme }) => theme.color.grey.hex};
  &:not(:last-of-type) {
    margin-right: 40px;
  }
  font-size: ${({ theme }) => theme.typo.sm};
`;
