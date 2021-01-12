import * as React from 'react';
import { navigate } from '@reach/router';
import { IProjectPreview, ProjectFilters } from '../../pages';
import { BlueButton, OrangeButton } from '../buttons';
import { Buttons, List, StyledFilters, StyledProjectPreview } from './style';

export interface IProjectsProps {
  projects: Array<IProjectPreview>;
  filter?: ProjectFilters;
  email: string;
  onFilterChange: (filter?: ProjectFilters) => void;
}

const Projects: React.FC<IProjectsProps> = ({ projects, filter, onFilterChange, email }) => {
  const onMoreClick = React.useCallback(() => {
    navigate('/contact');
  }, []);
  const onContactClick = React.useCallback(() => {
    window.location.href = `mailto:${email}?subject=Demande de devis`;
  }, [email]);
  return (
    <>
      <StyledFilters onChange={onFilterChange} filter={filter} />
      <List>
        {projects.map((p) => (
          <StyledProjectPreview title={p.title} slug={p.fields.slug} image={p.previewImage} key={p.fields.slug} />
        ))}
      </List>
      <Buttons>
        <OrangeButton onClick={onMoreClick}>En savoir plus {'>'}</OrangeButton>
        <BlueButton onClick={onContactClick}>Demande de devis {'>'}</BlueButton>
      </Buttons>
    </>
  );
};

export default Projects;
