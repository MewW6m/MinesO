import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Features, FeaturesProps} from "./index";

export default {
  title: 'Components/Organisms/Features',
  component: Features
} as Meta;

const Template: Story<FeaturesProps> = (args) => <Features {...args} />;

export const Default = Template.bind({});
Default.args = {
};