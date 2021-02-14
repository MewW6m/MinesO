import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Button, ButtonProps} from "./Button";
import {FaEdit, FaSave, FaUser, FaUserCheck} from "react-icons/fa";
import {rgba} from "polished";

//import { Button, ButtonProps } from './index';

export default {
  title: 'Components/Atoms/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const reversiStyle = {
  color: rgba(255,255,255,1),
  backgroundColor: "#1e87f0"
}

export const Icon_Exist_Edit = Template.bind({});
export const Icon_Exist_Update = Template.bind({});
export const Icon_Exist_Follow = Template.bind({});
export const Icon_Exist_Follow_Zumi = Template.bind({});
export const Icon_None = Template.bind({});
Icon_Exist_Edit.args = {
  classNameString: 'uk-text-small',
  label: '編集',
  Icon: FaEdit
};
Icon_Exist_Update.args = {
  classNameString: 'uk-text-small',
  label: '更新',
  Icon: FaSave
};
Icon_Exist_Follow.args = {
  classNameString: 'uk-text-small',
  label: 'フォロー',
  Icon: FaUser
};
Icon_Exist_Follow_Zumi.args = {
  classNameString: 'uk-text-small',
  style: reversiStyle,
  label: 'フォロー済',
  Icon: FaUserCheck
};
Icon_None.args = {
  classNameString: 'uk-text-small',
  label: 'Button'
};