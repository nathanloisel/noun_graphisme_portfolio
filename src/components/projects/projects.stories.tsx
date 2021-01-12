import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Projects, { IProjectsProps } from '.';
import { projectImagePreview } from '../project-preview/project-preview.stories';
import { ProjectFilters } from '../../pages';

export default {
  title: 'Components/Projects',
  component: Projects,
} as Meta;

const Template: Story<IProjectsProps> = (args) => {
  return <Projects {...args} />;
};

export const ProjectsEx = Template.bind({});

ProjectsEx.args = {
  projects: [
    {
      title: 'Test 1',
      fields: { slug: 'test-1' },
      category: ProjectFilters.Logo,
      previewImage: projectImagePreview,
    },
    {
      title: 'Test 2',

      fields: { slug: 'test-2' },
      category: ProjectFilters.WebDesign,
      previewImage: projectImagePreview,
    },
    {
      title: 'Test 2',

      fields: { slug: 'test-2' },
      category: ProjectFilters.MotionDesign,
      previewImage: projectImagePreview,
    },
    {
      title: 'Test 2',

      fields: { slug: 'test-2' },
      category: ProjectFilters.Identite,
      previewImage: projectImagePreview,
    },
    {
      title: 'Test 2',

      fields: { slug: 'test-2' },
      category: ProjectFilters.Edition,
      previewImage: projectImagePreview,
    },
  ],
  email: 'test@noun-graphisme.com',
};
