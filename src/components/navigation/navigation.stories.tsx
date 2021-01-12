import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Navigation, { INavigationProps } from '.';

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as Meta;

const Template: Story<INavigationProps> = (args) => {
  return <Navigation {...args} />;
};

export const NavigationEx = Template.bind({});

NavigationEx.args = {
};
