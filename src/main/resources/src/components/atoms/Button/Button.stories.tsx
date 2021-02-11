import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Button, ButtonProps} from "./Button";
import {FaSyncAlt} from "react-icons/fa";

//import { Button, ButtonProps } from './index';

export default {
  title: 'Components/Atoms/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Icon_Exist = Template.bind({});
export const Icon_None = Template.bind({});
Icon_Exist.args = {
  classNameString: 'uk-text-small',
  label: '更新',
  Icon: FaSyncAlt
};
Icon_None.args = {
  classNameString: 'uk-text-small',
  label: 'Button'
};