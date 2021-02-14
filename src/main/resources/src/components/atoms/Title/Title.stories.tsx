import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Title, TitleProps} from "./Title";

//import { Button, ButtonProps } from './index';

export default {
  title: 'Components/Atoms/Title',
  component: Title
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const LogoMain = Template.bind({});
LogoMain.args = {
  label: 'MinesO ',
};

export const LogoSub = Template.bind({});
LogoSub.args = {
  className: 'uk-text-small',
  label: '~ SNS共有・管理サービス ~',
};