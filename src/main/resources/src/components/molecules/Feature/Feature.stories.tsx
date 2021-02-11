import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Feature, FeatureProps} from "./Feature";
import {FaCalendar} from "react-icons/fa";

export default {
  title: 'Components/Molecules/Feature',
  component: Feature
} as Meta;

const Template: Story<FeatureProps> = (args) => <Feature {...args} />;

export const Default = Template.bind({});
Default.args = {
  Icon:  FaCalendar ,
  title: 'タイトル',
  detail: '詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細'
};