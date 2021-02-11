import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Textbox, TextboxProps} from "./Textbox";

//import { Button, ButtonProps } from './index';

export default {
  title: 'Components/Atoms/Textbox',
  component: Textbox
} as Meta;

const Template: Story<TextboxProps> = (args) => <Textbox {...args} />;

export const Text = Template.bind({});
export const Date = Template.bind({});
Text.args = {
  classNameString: 'uk-text-small',
  placeHolder: 'test',
  label: "label1"
};
Date.args = {
  type: "date",
  classNameString: 'uk-text-large',
  value: "2020-02-01"
};