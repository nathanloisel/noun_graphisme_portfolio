import styled from 'styled-components';
import Img from 'gatsby-image';
import RichText from '../rich-text';

export const Wrapper = styled.section`
  display: flex;

  ${({ theme }) =>
    theme.breakpoints.under_m(`
      flex-direction: column;
      align-items: center;
    `)}
`;

export const StyledImg = styled(Img)`
  flex: 1;
  margin-right: 38px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    `)}
`;
export const StyledRichText = styled(RichText)`
  flex: 1;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
    margin-top: 20px;
`)}
  p {
    ${({ theme }) =>
      theme.breakpoints.under_m(`
    text-align: center;
  `)}
  }
  > * {
    color: ${({ theme }) => theme.color.grey.hex};
  }
`;
