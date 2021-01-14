import styled from 'styled-components';
import { OrangeButton } from '../buttons';
import DotsIcon from '../icons/dots';
import RichText from '../rich-text';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 90px;

  ${({ theme }) =>
    theme.breakpoints.under_m(`
    flex-direction: column;
  `)}
`;
export const Details = styled.section`
  flex: 1;
  margin-right: 90px;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      margin-right: 0px;
  `)}

  h1 {
    color: ${({ theme }) => theme.color.dark_grey.hex};
  }
  h3 {
    font-weight: normal;
    margin-top: 55px;
    ${({ theme }) =>
      theme.breakpoints.under_m(`
        margin-top: 15px;
    `)}
    text-transform: uppercase;
  }
`;
export const ProjectCategory = styled.h4`
  font-size: ${({ theme }) => theme.typo.l};
  color: ${({ theme }) => theme.color.dark_grey.hex};
  font-weight: normal;
  margin-top: 20px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      margin-top: 15px;
  `)}
`;

export const Description = styled(RichText)`
  margin-top: 30px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      margin-top: 15px;
  `)}
`;

export const DateClient = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 45px;
  span {
    font-size: ${({ theme }) => theme.typo.xxs};
    display: block;
    ${({ theme }) =>
      theme.breakpoints.under_m(`
        font-size: ${theme.typo.sm};
    `)}
  }
`;

export const Images = styled.section`
  flex: 2;
`;
export const SmallImageList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    width: 250px;
    margin-top: 50px;
    ${({ theme }) =>
      theme.breakpoints.under_m(`
        width: 48%;
    `)}
  }
`;
export const ImageButton = styled.button<{ isVerticalHeroImage?: boolean }>`
  display: block;
  width: 100%;
  border: none;
  cursor: pointer;
`;
export const ProjectHeroWrapper = styled.div`
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      margin-top: 20px;
  `)}
`;

export const StyledDots = styled(DotsIcon)`
  fill: #c4c4c4;
  opacity: 0.21;
  position: absolute;
  bottom: 10px;
  right: 0;
  height: 75px;
  z-index: 1;
`;

export const NextProjectButton = styled(OrangeButton)<{ isForSmall?: boolean }>`
  z-index: 2;
  position: relative;
  margin: 80px auto 20px auto;

  ${({ theme, isForSmall }) =>
    isForSmall &&
    theme.breakpoints.upper_m(`
      display: none;
  `)}
  ${({ theme, isForSmall }) =>
    !isForSmall &&
    theme.breakpoints.under_m(`
      display: none;
  `)}
`;
