import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Facebook from './facebook';
import Behance from './behance';
import DotsIcon from './dots';

export default {
  title: 'Components/Icons',
  component: Facebook,
} as Meta;

export const FacebookEx: Story<React.SVGProps<SVGSVGElement>> = (args) => {
  return <Facebook {...args} />;
};

FacebookEx.args = {
  width: 50
};

export const BehanceEx: Story<React.SVGProps<SVGSVGElement>> = (args) => {
  return <Behance {...args} />;
};

BehanceEx.args = {
  width: 50
};


export const DotsIconEx: Story<React.SVGProps<SVGSVGElement>> = (args) => {
  return <DotsIcon {...args} />;
};

DotsIconEx.args = {
  width: 50,
  fill: 'grey'
};
