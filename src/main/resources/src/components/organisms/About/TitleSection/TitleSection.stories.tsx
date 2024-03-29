import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {TitleSection, TitleSectionProps} from "./TitleSection";

export default {
  title: 'Components/Organisms/About/TitleSection',
  component: TitleSection
} as Meta;

const Template: Story<TitleSectionProps> = (args) => <TitleSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};