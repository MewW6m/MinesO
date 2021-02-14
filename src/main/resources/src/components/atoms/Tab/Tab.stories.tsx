import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Tab, TabProps} from "./Tab";

//import { Button, ButtonProps } from './index';

export default {
  title: 'Components/Atoms/Tab',
  component: Tab
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  classNameString: 'uk-text-small',
  tabList: ['test1', 'test2', 'test3']
};