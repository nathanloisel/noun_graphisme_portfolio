import * as React from 'react';
import { ProjectFilters } from '../../pages';
import { Filter, Wrapper } from './style';

export interface IFiltersProps {
  className?: string;
  filter?: ProjectFilters;
  onChange: (filter?: ProjectFilters) => void;
}

export const FilterLabel = {
  [ProjectFilters.Logo]: 'Logotype',
  [ProjectFilters.Edition]: 'Edition',
  [ProjectFilters.Identite]: 'Identité visuelle',
  [ProjectFilters.WebDesign]: 'Webdesign',
  [ProjectFilters.MotionDesign]: 'Motion Design',
  [ProjectFilters.Infographie]: 'Infographie',
};

const Filters: React.FC<IFiltersProps> = ({ filter, onChange, className }) => {
  const [thisFilter, setFilter] = React.useState(filter);
  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const fi = (e.currentTarget.getAttribute('data-filter') as ProjectFilters) || undefined;
      setFilter(fi);
      onChange(fi);
    },
    [onChange],
  );
  return (
    <Wrapper className={className}>
      <Filter onClick={onClick} isSelected={thisFilter === undefined}>
        Tous les projets
      </Filter>
      {Object.keys(ProjectFilters).map((a: any) => (
        <Filter
          key={a}
          onClick={onClick}
          isSelected={((ProjectFilters as any)[a] as ProjectFilters) === thisFilter}
          data-filter={(ProjectFilters as any)[a] as ProjectFilters}
        >
          {(FilterLabel as any)[(ProjectFilters as any)[a]]}
        </Filter>
      ))}
    </Wrapper>
  );
};

export default Filters;
