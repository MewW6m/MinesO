import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {About, AboutProps} from "./About";

export default {
  title: 'Components/Templates/About',
  component: About
} as Meta;

const Template: Story<AboutProps> = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {
};