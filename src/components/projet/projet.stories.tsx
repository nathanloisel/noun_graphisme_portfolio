import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Projet, { IProjetProps } from '.';

export default {
  title: 'Components/Projet',
  component: Projet,
} as Meta;

const Template: Story<IProjetProps> = (args) => {
  return <Projet {...args} />;
};

export const ProjetEx = Template.bind({});

ProjetEx.args = {};
