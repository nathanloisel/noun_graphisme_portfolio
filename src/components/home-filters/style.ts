import { Link } from 'gatsby';
import styled from 'styled-components';
import Filter from './filter';

export const FiltersWrapper = styled.div`
  display: flex;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
    flex-wrap: wrap;
    justify-content: space-around;
  `)}
`;
export const StyledFilter = styled(Filter)`
  flex: 1;
  ${({ theme }) =>
    theme.breakpoints.under_l(`
      flex: 0 45%;
    `)}

  &:not(:last-of-type) {
    margin-right: 85px;
    ${({ theme }) =>
      theme.breakpoints.under_l(`
      margin-right: 10px;
    `)}
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.typo.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.color.dark_grey.hex};
  line-height: 35px;
`;

export const Wrapper = styled.div``;

export const NumWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Num = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.grey.hex};
  margin: 0 18px 0 0;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.16);
`;
