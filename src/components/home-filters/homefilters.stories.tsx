import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import HomeFilters, { IHomeFiltersProps } from '.';
import Filter, { IFilterProps } from './filter';

export default {
  title: 'Components/HomeFilters',
  component: HomeFilters,
} as Meta;

export const HomeFiltersEx: Story<IHomeFiltersProps> = (args) => {
  return <HomeFilters {...args} />;
};
HomeFiltersEx.args = {
};


export const FilterEx: Story<IFilterProps> = (args) => {
  return <Filter {...args} />;
};
FilterEx.args = {
  num: 1,
  text: "Identité visuelle"
};
