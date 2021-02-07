import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {LogoLabel, LogoLabelProps} from "./index";
import {Img} from "../../atoms/Img";

export default {
  title: 'Components/Molecules/LogoLabel',
  component: LogoLabel,
  parameters: {
    backgrounds: { default: 'black' }
  }
} as Meta;

const Template: Story<LogoLabelProps> = (args) => <LogoLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
};