import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Logo from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story<React.SVGProps<SVGSVGElement>> = (args) => {
  return <Logo {...args} />;
};

export const LogoEx = Template.bind({});

LogoEx.args = {
  width: 500
};
