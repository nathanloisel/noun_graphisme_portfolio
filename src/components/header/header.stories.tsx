import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Header, { IHeaderProps } from '.';
import { SocialNetworksEx } from '../social-networks/social-networks.stories';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<IHeaderProps> = (args) => {
  return <Header {...args} />;
};

export const HeaderEx = Template.bind({});

HeaderEx.args = {
  ...SocialNetworksEx.args
};
