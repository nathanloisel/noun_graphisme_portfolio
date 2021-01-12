import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters, { IFiltersProps } from '.';

export default {
  title: 'Components/Filters',
  component: Filters,
} as Meta;

const Template: Story<IFiltersProps> = (args) => {
  return <Filters {...args} />;
};

export const FiltersEx = Template.bind({});

FiltersEx.args = {
  onChange: action('onChange'),
};
