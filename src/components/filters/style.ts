import styled from 'styled-components';

export const Filter = styled.button<{ isSelected: boolean }>`
  cursor: pointer;
  background: none;
  box-shadow: none;
  border: none;
  font-size: ${({ theme }) => theme.typo.sm};
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.orange.hex : theme.color.grey.hex)};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  width: 130px;
  ${({ theme }) =>
    theme.breakpoints.under_m(`
      height: 40px;
  `)}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
