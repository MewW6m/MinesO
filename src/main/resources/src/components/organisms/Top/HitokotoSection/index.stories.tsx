import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {HitokotoSection, HitokotoSectionProps} from "./index";

export default {
  title: 'Components/Organisms/Top/HitokotoSection',
  component: HitokotoSection
} as Meta;

const Template: Story<HitokotoSectionProps> = (args) => <HitokotoSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};