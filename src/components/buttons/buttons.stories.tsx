import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { IButtonProps } from '.';
import { BlueButton, OrangeButton } from './style';

export default {
  title: 'Components/Button',
  component: OrangeButton,
} as Meta;

export const OrangeButtonEx: Story<IButtonProps> = (args) => {
  return <OrangeButton {...args} />;
};
OrangeButtonEx.args = {
  onClick: action('onClick'),
  children: 'Orange button >',
};

export const BlueButtonEx: Story<IButtonProps> = (args) => {
  return <BlueButton {...args} />;
};
BlueButtonEx.args = {
  onClick: action('onClick'),
  children: 'Blue button >',
};
