import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  width: 280px;
  height: 260px;

  & > .project-preview-inner {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 80%;
    background: ${({ theme }) => theme.color.orange.hex};
    transition: 250ms;
    ${({ theme }) =>
      theme.breakpoints.under_m(`
        opacity: 1;
        background: none;
  `)}
  }
  &:hover > .project-preview-inner {
    opacity: 1;
  }
`;
export const StyledImg = styled(Img)``;
export const Plus = styled.span`
  font-size: 72px;
  color: white;
  font-weight: bold;
  height: 35px;
  line-height: 17px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) =>
    theme.breakpoints.under_m(`
        display: none;
  `)}
`;
export const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: auto;
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.sm};
  text-align: center;
  margin: auto 30px 10px 30px;

  ${({ theme }) =>
    theme.breakpoints.under_m(`
      margin: auto;
      position: absolute;
      top: 120%;
      color: ${theme.color.dark_grey.hex};
  `)}
`;
