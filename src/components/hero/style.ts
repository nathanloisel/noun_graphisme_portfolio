import styled from 'styled-components';
import DotsIcon from '../icons/dots';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
    flex-direction: column;
  `)}
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Dots = styled(DotsIcon)`
  position: absolute;
  height: 75px;
  bottom: 20%;
  right: 5%;

  ${({ theme }) =>
    theme.breakpoints.under_m(`
    height: 20%;
    bottom: 40%;
  `)}
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;

  ${({ theme }) =>
    theme.breakpoints.under_m(`
  top: calc(50% - 20px);
`)}
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: normal;
`;

export const VerticalCopyrights = styled.p`
  position: absolute;
  left: -34px;
  top: 0;
  height: 100%;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.91rem;
  color: ${({ theme }) => theme.color.grey.hex};
  text-align: center;
  transform: rotate(180deg);

  ${({ theme }) =>
    theme.breakpoints.under_m(`
    position: relative;
    justify-content: center;
    margin: 20px auto 10px auto;
    left: 0;
    height: auto;
    writing-mode: initial;
    transform: rotate(0deg);
  `)}
`;
