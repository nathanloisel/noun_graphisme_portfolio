import styled from 'styled-components';
import Filters from '../filters';
import ProjectPreview from '../project-preview';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      margin-top: 0px;
  `)}
`;
export const StyledProjectPreview = styled(ProjectPreview)`
  margin: 25px;

  ${({ theme }) =>
    theme.breakpoints.under_m(`
      width: 40%;
      height: auto;
      margin: 10px;
      margin-top: 60px;
  `)}
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
    flex-direction: column;
    margin-top: 50px;
  `)}

  > *:not(:last-of-type) {
    margin-right: 50px;
    ${({ theme }) =>
      theme.breakpoints.under_m(`
        margin: auto;
  `)}
  }
  > *:last-of-type {
    ${({ theme }) =>
      theme.breakpoints.under_m(`
      margin-top: 20px;
  `)}
  }
`;

export const StyledFilters = styled(Filters)`
  margin-top: 60px;

  ${({ theme }) =>
    theme.breakpoints.under_m(`
      margin-top: 0px;
  `)}
`;
