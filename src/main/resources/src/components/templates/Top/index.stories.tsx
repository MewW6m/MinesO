import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Top, TopProps} from "./index";

export default {
  title: 'Components/Templates/Top',
  component: Top
} as Meta;

const Template: Story<TopProps> = (args) => <Top {...args} />;

export const Default = Template.bind({});
Default.args = {
};