import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Img, ImgProps} from "./Img";

export default {
  title: 'Components/Atoms/Img',
  component: Img,
  parameters: {
    backgrounds: { default: 'black' }
  }
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;


export const LogoImg = Template.bind({});
LogoImg.args = {
  src: "./img/logo.png",
  height: 30
};