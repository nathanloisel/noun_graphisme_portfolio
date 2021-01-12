import * as React from 'react';
import Projects from '../components/projects';
import { IProjectPreview, ProjectFilters } from '../pages';
// import { useDispatch, useSelector } from 'react-redux';

export interface IProps {
  projects: Array<IProjectPreview>;
  email: string;
}

const ProjectsContainer: React.FunctionComponent<IProps> = ({ projects, email }) => {
  const [filter, setFilter] = React.useState<undefined | ProjectFilters>(undefined);
  const filteredProjects = React.useMemo(() => (filter ? projects.filter((p) => p.category === filter) : projects), [
    filter,
    projects,
  ]);
  return <Projects projects={filteredProjects} filter={filter} onFilterChange={setFilter} email={email} />;
};

export default ProjectsContainer;
