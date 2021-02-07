import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {FunctionSection, FunctionSectionProps} from "./index";

export default {
  title: 'Components/Organisms/Top/FunctionSection',
  component: FunctionSection
} as Meta;

const Template: Story<FunctionSectionProps> = (args) => <FunctionSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};