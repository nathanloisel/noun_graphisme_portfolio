import * as React from 'react';
import { FiltersWrapper, StyledFilter } from './style';

export interface IHomeFiltersProps {
  className?: string;
}

const links = ['Identité visuelle', 'Logotype Refonte', 'Events Campagne Edition', 'Webdesign Motion design Infographie'];

const HomeFilters: React.FC<IHomeFiltersProps> = ({ className }) => {
  return (
    <FiltersWrapper className={className}>
      {links.map((link, index) => (
        <StyledFilter text={link} num={index + 1} />
      ))}
    </FiltersWrapper>
  );
};

export default HomeFilters;
