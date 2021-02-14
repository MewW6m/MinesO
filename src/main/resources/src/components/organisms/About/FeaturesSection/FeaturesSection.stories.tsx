import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {FeaturesSection, FeaturesSectionProps} from "./FeaturesSection";

export default {
  title: 'Components/Organisms/About/FeaturesSection',
  component: FeaturesSection
} as Meta;

const Template: Story<FeaturesSectionProps> = (args) => <FeaturesSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};