import styled, { css } from 'styled-components';

const buttonStyle = css`
  border: none;
  padding: 15px 60px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.sm};
  color: white;
`;

export const OrangeButton = styled.button`
  ${buttonStyle}
  background-color: ${({ theme }) => theme.color.orange.hex};
  &:hover {
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.color.orange.hex};
    color: ${({ theme }) => theme.color.orange.hex};
  }
`;

export const BlueButton = styled.button`
  ${buttonStyle}
  background-color: ${({ theme }) => theme.color.dark_blue.hex};
  &:hover {
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.color.dark_blue.hex};
    color: ${({ theme }) => theme.color.dark_blue.hex};
  }
`;
