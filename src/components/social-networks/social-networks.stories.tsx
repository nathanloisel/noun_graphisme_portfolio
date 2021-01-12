import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import SocialNetworks, { ISocialNetworksProps } from '.';

export default {
  title: 'Components/SocialNetworks',
  component: SocialNetworks,
} as Meta;

const Template: Story<ISocialNetworksProps> = (args) => {
  return <SocialNetworks {...args} />;
};

export const SocialNetworksEx = Template.bind({});

SocialNetworksEx.args = {
  behanceUrl: '#',
  facebookUrl: '#',
};
